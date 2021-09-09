package app.security;

import static app.security.Constants.HEADER_AUTHORIZACION_KEY;
import static app.security.Constants.ISSUER_INFO;
import static app.security.Constants.SUPER_SECRET_KEY;
import static app.security.Constants.TOKEN_BEARER_PREFIX;
import static app.security.Constants.TOKEN_EXPIRATION_TIME;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import app.dto.Usuario;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private AuthenticationManager authenticationManager;

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		
		try {
			
			// obtenemos el body de la peticion que asumimos viene en formato JSON,
			// Asumimos que el body tendrá el siguiente JSON  {"username":"ask", "password":"123"}
	        // Realizamos un mapeo a nuestra clase User para tener ahi los datos,
			Usuario credenciales = new ObjectMapper().readValue(request.getInputStream(), Usuario.class);

			
			// Finalmente autenticamos
	        // Spring comparará el user/password recibidos
	        // contra el que definimos en la clase SecurityConfig
			return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					credenciales.getUsername(), credenciales.getContrasena(), new ArrayList<>()));
		} 
		catch (IOException e) {
			
			throw new RuntimeException(e);
		}
	}

	// Método para crear el JWT y enviarlo al cliente en el header de la respuesta
	// Si la autenticacion fue exitosa, agregamos el token a la respuesta
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication auth) throws IOException, ServletException {

		String token = Jwts.builder().setIssuedAt(new Date()).setIssuer(ISSUER_INFO)
				.setSubject(((User) auth.getPrincipal()).getUsername())
				
				// Vamos a asignar un tiempo de expiracion,
				.setExpiration(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION_TIME))

				// Hash con el que firmaremos la clave
				.signWith(SignatureAlgorithm.HS512, SUPER_SECRET_KEY).compact();

		// agregamos al encabezado el token,
		response.addHeader(HEADER_AUTHORIZACION_KEY, TOKEN_BEARER_PREFIX + " " + token);
	}
}

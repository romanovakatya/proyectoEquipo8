package app.security;

import static app.security.Constants.HEADER_AUTHORIZACION_KEY;
import static app.security.Constants.SUPER_SECRET_KEY;
import static app.security.Constants.TOKEN_BEARER_PREFIX;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Jwts;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

	public JWTAuthorizationFilter(AuthenticationManager authManager) {
		super(authManager);
	}

	
	/**
	 * Las peticiones que no sean /login pasarán por este filtro
	 * el cuál se encarga de pasar el "request" para que valide el token.
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		
		String header = req.getHeader(HEADER_AUTHORIZACION_KEY);
		
		if (header == null || !header.startsWith(TOKEN_BEARER_PREFIX)) {
			chain.doFilter(req, res);
			return;
		}
		
		UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(req, res);
	}

	
	// Método para validar el token enviado por el cliente,
	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
		
		// Obtenemos el token que viene en el encabezado de la peticion,
		String token = request.getHeader(HEADER_AUTHORIZACION_KEY);
		
		// si hay un token presente, entonces lo validamos,
		if (token != null) {
			// Se procesa el token y se recupera el usuario.
			String user = Jwts.parser()
						.setSigningKey(SUPER_SECRET_KEY)
						.parseClaimsJws(token.replace(TOKEN_BEARER_PREFIX, ""))
						.getBody()
						.getSubject();

			// Recordamos que para las demás peticiones que no sean /login
            // no requerimos una autenticacion por username/password
            // por este motivo podemos devolver un UsernamePasswordAuthenticationToken sin password
			if (user != null) {
				return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
			}
			return null;
		}
		return null;
	}
}


CREATE DATABASE IF NOT EXISTS proyecto_final;
USE proyecto_final;

DROP TABLE IF EXISTS ejemplares_prestados;
DROP TABLE IF EXISTS ejemplares;
DROP TABLE IF EXISTS libros;
DROP TABLE IF EXISTS editoriales;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE IF NOT EXISTS editoriales(
id int auto_increment primary key,
nombre varchar(100) not null,
direccion varchar(100) not null,
pagina_web varchar(100) default null
);

CREATE TABLE IF NOT EXISTS libros(
id int auto_increment primary key,
autor varchar(100) not null,
titulo varchar(100) not null,
descripcion varchar(255) default null,
editorial int not null,
foreign key (editorial) references editoriales(id) 
on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS usuarios(
id int auto_increment primary key,
contrasena varchar(255) not null,
nombre varchar(100) not null,
apellidos varchar(100) not null,
username varchar(100) not null,
email varchar(100) not null
);

CREATE TABLE IF NOT EXISTS ejemplares(
id int auto_increment primary key,
isbn varchar(13) not null,
status_libre boolean default true,
numero_paginas int not null,
propietario int not null,
portada varchar(255) default null,
libro int,
foreign key (propietario) references usuarios(id) on delete cascade on update cascade,
foreign key (libro) references libros(id) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS ejemplares_prestados(
id int auto_increment primary key,
ejemplar int,
usuario_prestamo int,
inicio_prestamo date,
fin_prestamo date,
foreign key (ejemplar) references ejemplares(id) on delete cascade on update cascade,
foreign key (usuario_prestamo) references usuarios(id) on delete cascade on update cascade
);

INSERT INTO editoriales (nombre, direccion, pagina_web) VALUES ('Ediciones Europa', 'C/Antoni de Bofarull Nº12', 'https://edicioneseuropa.es/');
INSERT INTO editoriales (nombre, direccion, pagina_web) VALUES ('Letrame', 'Avinguda Catalunya Nº8', 'https://letrame.com/');
INSERT INTO editoriales (nombre, direccion, pagina_web) VALUES ('Editorial Circulo Rojo', 'C/Pedrol Nº5', 'https://editorialcirculorojo.com/');
INSERT INTO editoriales (nombre, direccion, pagina_web) VALUES ('Caligrama', 'C/Maria José Nº6', 'https://caligramaeditorial.es/');
INSERT INTO editoriales (nombre, direccion) VALUES ('Grupo Santillana', 'Carrer de la Argentera, Nº18');

INSERT INTO libros (autor, titulo, descripcion, editorial) VALUES ('J.K. Rowling', 'Harry Potter y la Piedra Filosofal', 'es el primer volumen de la ya clásica serie de novelas fantásticas de la autora británica J.K. Rowling.', 1);
INSERT INTO libros (autor, titulo, editorial) VALUES ('Stephen King', 'La larga marcha', 2);
INSERT INTO libros (autor, titulo, editorial) VALUES ('Stephen King', 'El resplandor', 3);
INSERT INTO libros (autor, titulo, editorial) VALUES ('Suzanne Collins', 'Los juegos del hambre', 4);
INSERT INTO libros (autor, titulo, editorial) VALUES ('J. R. R. Tolkien', 'El señor de los anillos', 5);

INSERT INTO usuarios (contrasena, nombre, apellidos, username, email) VALUES ('4566417', 'Joel', 'Fernández Rodríguez', 'joelfr', 'fernandez.rodriguez.joel.21@gmail.com');
INSERT INTO usuarios (contrasena, nombre, apellidos, username, email) VALUES ('5435434', 'Hugo', 'Castaño Rodríguez', 'hugocr', 'hugocr@gmail.com');
INSERT INTO usuarios (contrasena, nombre, apellidos, username, email) VALUES ('5347373', 'Álvaro', 'Castaño Rodríguez', 'alvarocr', 'alvarocr@gmail.com');
INSERT INTO usuarios (contrasena, nombre, apellidos, username, email) VALUES ('9754541', 'Víctor', 'Cano Rodríguez', 'victorcr', 'victorcr@gmail.com');
INSERT INTO usuarios (contrasena, nombre, apellidos, username, email) VALUES ('7544865', 'Pedro', 'López García', 'pedrolg', 'pedrolg@gmail.com');

INSERT INTO ejemplares (isbn, numero_paginas, propietario, libro) VALUES ('2-7895-1235-4', 256, 1, 1);
INSERT INTO ejemplares (isbn, numero_paginas, propietario, libro) VALUES ('8-4578-3215-3', 384, 2, 2);
INSERT INTO ejemplares (isbn, numero_paginas, propietario, libro) VALUES ('5-4786-5687-1', 599, 3, 3);
INSERT INTO ejemplares (isbn, numero_paginas, propietario, libro) VALUES ('7-4598-0248-3', 374, 4, 4);
INSERT INTO ejemplares (isbn, numero_paginas, propietario, libro) VALUES ('9-7368-1974-3', 423, 5, 5);

INSERT INTO ejemplares_prestados (ejemplar, usuario_prestamo, inicio_prestamo, fin_prestamo) VALUES (2, 4, '2021-08-20', '2021-10-20');
INSERT INTO ejemplares_prestados (ejemplar, usuario_prestamo, inicio_prestamo, fin_prestamo) VALUES (5, 2, '2021-08-15', '2021-10-25');
INSERT INTO ejemplares_prestados (ejemplar, usuario_prestamo, inicio_prestamo, fin_prestamo) VALUES (3, 1, '2021-08-02', '2021-10-02');
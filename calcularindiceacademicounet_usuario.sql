CREATE DATABASE if not exists calcularIndiceAcademicoUNET;

create table if not exists calcularindiceacademicounet.Usuario(
	id int primary key auto_increment,
	nombreUsuario varchar(100) not null default "" unique,
    contrasenia varchar(300) not null,
    carrera varchar(50) not null default ""
);

create table if not exists calcularindiceacademicounet.materias(
	id int primary key auto_increment,
    Codigo varchar(20) not null,
    nombreMateria varchar(100) not null,
    UnidadCredito int not null,
    Semestre INT NOT NULL
);
-- Semestre I
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('412101T', 'Introducción a la Ingeniería en Informática', 1, 1, 'Ingeniería en Informática'),
('415102T', 'Computación I', 3, 1, 'Ingeniería en Informática'),
('834102T', 'Matemática Discreta', 3, 1, 'Ingeniería en Informática'),
('826101T', 'Matemática I', 4, 1, 'Ingeniería en Informática'),
('1033101T', 'Lenguaje y Comunicación', 2, 1, 'Ingeniería en Informática'),
('1032109T', 'Efectividad Personal', 1, 1, 'Ingeniería en Informática'),
('0007001T', 'Actividad Deportiva I', 1, 1, 'Ingeniería en Informática');

-- Semestre II
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('416202T', 'Programación I', 4, 2, 'Ingeniería en Informática'),
('914201T', 'Química General I', 3, 2, 'Ingeniería en Informática'),
('826201T', 'Matemática II', 4, 2, 'Ingeniería en Informática'),
('846203T', 'Física I', 4, 2, 'Ingeniería en Informática'),
('842204L', 'Laboratorio de Física I', 1, 2, 'Ingeniería en Informática'),
('0007002T', 'Actividad Deportiva II', 1, 2, 'Ingeniería en Informática');

-- Semestre III
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('424301T', 'Estructura de Datos', 4, 3, 'Ingeniería en Informática'),
('413302T', 'Teoría General de Sistemas', 2, 3, 'Ingeniería en Informática'),
('826301T', 'Matemática III', 4, 3, 'Ingeniería en Informática'),
('846302T', 'Física II', 4, 3, 'Ingeniería en Informática'),
('842303L', 'Laboratorio de Física II', 1, 3, 'Ingeniería en Informática'),
('1023202T', 'Inglés I', 2, 3, 'Ingeniería en Informática'),
('0007003T', 'Actividad Deportiva III', 1, 3, 'Ingeniería en Informática');

-- Semestre IV
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('425401T', 'Programación II', 3, 4, 'Ingeniería en Informática'),
('425404T', 'Fundamentos de Lógica Digital', 3, 4, 'Ingeniería en Informática'),
('834405T', 'Estadística I', 3, 4, 'Ingeniería en Informática'),
('826401T', 'Matemática IV', 4, 4, 'Ingeniería en Informática'),
('1023302T', 'Inglés II', 2, 4, 'Ingeniería en Informática'),
('1032201T', 'Ciencia y Sociedad I', 1, 4, 'Ingeniería en Informática'),
('0007004T', 'Actividad Deportiva IV', 1, 4, 'Ingeniería en Informática');

-- Semestre V
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('426502T', 'Organización del Computador', 4, 5, 'Ingeniería en Informática'),
('425501T', 'Base de Datos I', 3, 5, 'Ingeniería en Informática'),
('834501T', 'Estadística II', 3, 5, 'Ingeniería en Informática'),
('0007005T', 'Automatización', 4, 5, 'Ingeniería en Informática'),
('1032301T', 'Necesidad, Valores y Proyecto de Vida', 1, 5, 'Ingeniería en Informática'),
('834504T', 'Análisis Numérico', 3, 5, 'Ingeniería en Informática'),
('1000001T', 'Seminario De Servicio Comunitario', 0, 5, 'Ingeniería en Informática'),
('1000002T', 'Proyecto De Servicio Comunitario', 0, 5, 'Ingeniería en Informática'),
('0007006T', 'Actividad Deportiva V', 1, 5, 'Ingeniería en Informática');

-- Semestre VI
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('425602T', 'Comunicaciones I', 3, 6, 'Ingeniería en Informática'),
('425601T', 'Sistemas de Información I', 3, 6, 'Ingeniería en Informática'),
('425605T', 'Investigación de Operaciones I', 4, 6, 'Ingeniería en Informática'),
('425603T', 'Sistemas Operativos', 3, 6, 'Ingeniería en Informática'),
('424604T', 'Multimedia', 3, 6, 'Ingeniería en Informática'),
('1013401T', 'Economía', 2, 6, 'Ingeniería en Informática'),
('1000003T', 'Servicio Comunitario', 0, 6, 'Ingeniería en Informática'),
('0007007T', 'Actividad Deportiva VI', 1, 6, 'Ingeniería en Informática');

-- Semestre VII
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('425702T', 'Comunicaciones II', 3, 7, 'Ingeniería en Informática'),
('425705T', 'Base de Datos II', 3, 7, 'Ingeniería en Informática'),
('425701T', 'Investigación de Operaciones II', 3, 7, 'Ingeniería en Informática'),
('423703T', 'Electiva I', 2, 7, 'Ingeniería en Informática'),
('425706T', 'Compiladores e Interpretes', 3, 7, 'Ingeniería en Informática'),
('134708T', 'Ingeniería Económica', 3, 7, 'Ingeniería en Informática'),
('0007008T', 'Actividad Deportiva VII', 1, 7, 'Ingeniería en Informática');

-- Semestre VIII
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('425802T', 'Sistemas Distribuidos', 3, 8, 'Ingeniería en Informática'),
('425801T', 'Sistemas de Información II', 3, 8, 'Ingeniería en Informática'),
('425803T', 'Simulación de Sistemas', 3, 8, 'Ingeniería en Informática'),
('0007009T', 'Electiva II', 2, 8, 'Ingeniería en Informática'),
('423804T', 'Finanzas para Ingenieros', 2, 8, 'Ingeniería en Informática'),
('1123403T', 'Ecología y Contaminación Ambiental', 2, 8, 'Ingeniería en Informática'),
('0007010T', 'Actividad Deportiva VIII', 1, 8, 'Ingeniería en Informática');

-- Semestre IX
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('425901T', 'Ingeniería del Software', 3, 9, 'Ingeniería en Informática'),
('424902T', 'Seminario', 3, 9, 'Ingeniería en Informática'),
('0007011T', 'Electiva III', 2, 9, 'Ingeniería en Informática'),
('0007012T', 'Electiva IV', 2, 9, 'Ingeniería en Informática'),
('1032601T', 'Legislación, Valores Nacionales y Proyecto de País', 1, 9, 'Ingeniería en Informática'),
('1033801T', 'Metodología de la Investigación', 2, 9, 'Ingeniería en Informática'),
('0007013T', 'Actividad Deportiva IX', 1, 9, 'Ingeniería en Informática');

-- Semestre X
INSERT INTO calcularindiceacademicounet.materias(Codigo, nombreMateria, UnidadCredito, Semestre, carrera) VALUES
('0007014T', 'Trabajo de Aplicación Profesional (Proyecto Especial de Grado)', 12, 10, 'Ingeniería en Informática'),
('0007015T', 'Actividad Deportiva X', 1, 10, 'Ingeniería en Informática');
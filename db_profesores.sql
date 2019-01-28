-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-01-2019 a las 02:25:20
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_profesores`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) CHARACTER SET latin1 NOT NULL,
  `apellidos` varchar(40) CHARACTER SET latin1 NOT NULL,
  `direccion` varchar(30) CHARACTER SET latin1 NOT NULL,
  `poblacion` varchar(20) CHARACTER SET latin1 NOT NULL,
  `cp` varchar(5) CHARACTER SET latin1 NOT NULL,
  `provincia` varchar(20) CHARACTER SET latin1 NOT NULL,
  `telefono` varchar(14) CHARACTER SET latin1 NOT NULL,
  `fecha_de_nacimiento` varchar(10) CHARACTER SET latin1 NOT NULL,
  `dni` varchar(14) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `nombre`, `apellidos`, `direccion`, `poblacion`, `cp`, `provincia`, `telefono`, `fecha_de_nacimiento`, `dni`) VALUES
(4, 'Ismael ', 'De Jesus', '7 de Junip', 'Mexico', '12345', 'Ixtapaluca', '2381707256', '10-01-2019', '12.123.12-La'),
(9, 'Fernando', 'Martinez Guzman', 'Ixtapaluca', 'mexico', '56566', 'Estado de mexico', '5574400653', '02-07-1994', '12.122-KL'),
(16, 'Elizabeth', 'Garcia Pacheco', 'Ixtapaluca', 'Mexico', '10298', 'Puebla', '2301707256', '02-02-2000', '12.123.12-LR');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

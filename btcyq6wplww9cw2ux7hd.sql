-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: btcyq6wplww9cw2ux7hd-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 06-07-2024 a las 03:23:26
-- Versión del servidor: 8.0.15-5
-- Versión de PHP: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `btcyq6wplww9cw2ux7hd`
--
CREATE DATABASE IF NOT EXISTS `btcyq6wplww9cw2ux7hd` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `btcyq6wplww9cw2ux7hd`;

DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `InsertarReservaYmesa`$$
CREATE DEFINER=`ufjxzbt63iiiwtqa`@`%` PROCEDURE `InsertarReservaYmesa` (IN `p_nombre` VARCHAR(45), IN `p_fecha` DATE, IN `p_horario` VARCHAR(15), IN `p_personas` INT, IN `p_comentarios` TEXT, IN `p_numero_mesa` INT)   BEGIN
    -- Declarar la variable al principio del bloque
    DECLARE last_mesa_id INT;

    -- Insertar en la tabla mesa
    INSERT INTO mesa (numero_mesa, personas, estado)
    VALUES (p_numero_mesa, p_personas, 'ocupada');

    -- Obtener el id_mesa recién insertado
    SET last_mesa_id = LAST_INSERT_ID();

    -- Insertar en la tabla reserva
    INSERT INTO reserva (nombre, fecha, horario, personas, comentarios, mesa_id)
    VALUES (p_nombre, p_fecha, p_horario, p_personas, p_comentarios, last_mesa_id);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carta`
--

DROP TABLE IF EXISTS `carta`;
CREATE TABLE `carta` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `tipo` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `carta`
--

INSERT INTO `carta` (`id`, `nombre`, `descripcion`, `precio`, `tipo`) VALUES
(1, 'Margarita Clásica', 'Una mezcla refrescante de tequila, jugo de lima y licor de naranja, servida con sal en el borde del vaso.', 1524.00, 'bebida'),
(2, 'Piña Colada', 'Un cóctel tropical cremoso hecho con ron, crema de coco y jugo de piña, decorado con una rodaja de piña y una cereza.', 3642.00, 'bebida'),
(3, 'Mojito', 'Bebida cubana que combina ron blanco, jugo de lima, azúcar, agua con gas y hojas de menta fresca.', 2876.00, 'bebida'),
(4, 'Gin Tonic', 'Una mezcla sencilla y elegante de ginebra y agua tónica, adornada con una rodaja de lima o limón.', 1235.00, 'bebida'),
(5, 'Bloody Mary', 'Cóctel salado y picante hecho con vodka, jugo de tomate, salsa Worcestershire, tabasco, sal y pimienta, decorado con un tallo de apio.', 4910.00, 'bebida'),
(6, 'Daiquiri de Fresa', 'Un cóctel dulce y afrutado hecho con ron, jugo de lima, jarabe de azúcar y fresas frescas.', 1987.00, 'bebida'),
(7, 'Negroni', 'Mezcla amarga y aromática de ginebra, vermut rojo y Campari, servida con una rodaja de naranja.', 2678.00, 'bebida'),
(8, 'Whisky Sour', 'Combinación clásica de whisky, jugo de limón, azúcar y una pizca de clara de huevo, servida con una cereza.', 3021.00, 'bebida'),
(9, 'Cosmopolitan', 'Cóctel elegante hecho con vodka, licor de naranja, jugo de arándano y un toque de jugo de lima, decorado con una tira de cáscara de naranja.', 4567.00, 'bebida'),
(10, 'Caipirinha', 'Bebida brasileña hecha con cachaça, azúcar y trozos de lima, servida con hielo triturado.', 1890.00, 'bebida'),
(11, 'Bife de Chorizo', 'Corte de carne de res jugoso y tierno, servido con papas fritas y ensalada.', 2109.00, 'plato_principal'),
(12, 'Paella Valenciana', 'Plato tradicional español con arroz, mariscos, pollo y verduras, sazonado con azafrán.', 3789.00, 'plato_principal'),
(13, 'Pollo a la Parrilla', 'Pechuga de pollo marinada y asada a la parrilla, acompañada de vegetales al vapor.', 4123.00, 'plato_principal'),
(14, 'Lasagna Bolognesa', 'Capas de pasta con salsa bolognesa, bechamel y queso gratinado.', 1756.00, 'plato_principal'),
(15, 'Salmón al Horno', 'Filete de salmón horneado con hierbas y limón, servido con espárragos y puré de papas.', 2500.00, 'plato_principal'),
(16, 'Tacos de Carnitas', 'Tortillas de maíz rellenas de cerdo desmenuzado, cebolla, cilantro y salsa.', 3333.00, 'plato_principal'),
(17, 'Risotto de Hongos', 'Arroz cremoso cocido con hongos frescos, parmesano y un toque de vino blanco.', 2901.00, 'plato_principal'),
(18, 'Fettuccine Alfredo', 'Pasta fettuccine en una cremosa salsa de mantequilla, ajo y queso parmesano.', 3150.00, 'plato_principal'),
(19, 'Costillas BBQ', 'Costillas de cerdo asadas a la parrilla y bañadas en salsa barbacoa, servidas con ensalada de col.', 4102.00, 'plato_principal'),
(20, 'Enchiladas de Pollo', 'Tortillas de maíz rellenas de pollo, bañadas en salsa roja y gratinadas con queso.', 2800.00, 'plato_principal'),
(21, 'Tarta de Manzana', 'Deliciosa tarta de manzana con una base de masa crujiente y relleno de manzanas caramelizadas.', 2254.00, 'postre'),
(22, 'Cheesecake de Fresa', 'Postre cremoso hecho con queso crema y fresas frescas sobre una base de galletas trituradas.', 3445.00, 'postre'),
(23, 'Brownie de Chocolate', 'Pastel denso y rico en chocolate, servido caliente con una bola de helado de vainilla y salsa de chocolate.', 1980.00, 'postre'),
(24, 'Tiramisú', 'Postre italiano hecho con capas de bizcocho empapado en café y crema de mascarpone espolvoreado con cacao en polvo.', 4132.00, 'postre'),
(25, 'Creme Brûlée', 'Custard cremoso con una capa de azúcar caramelizado en la parte superior.', 3667.00, 'postre'),
(26, 'Helado de Vainilla con Chocolate Caliente', 'Tres bolas de helado de vainilla servidas con salsa de chocolate caliente y almendras tostadas.', 2999.00, 'postre'),
(27, 'Bombitas de crema', 'Pequeños bocados de masa rellenos de crema pastelera y cubiertos con chocolate derretido.', 4888.00, 'postre'),
(28, 'Mousse de Chocolate', 'Postre ligero y esponjoso hecho con chocolate derretido y crema batida, servido en copas individuales.', 3722.00, 'postre'),
(29, 'Pastel de Zanahoria', 'Pastel húmedo y especiado con trozos de zanahoria, nueces y cubierto con glaseado de queso crema.', 2543.00, 'postre'),
(30, 'Crepe de Nutella y Plátano', 'Crepe fina untada con Nutella y rellena de rodajas de plátano, doblada y espolvoreada con azúcar glas.', 4210.00, 'postre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

DROP TABLE IF EXISTS `contacto`;
CREATE TABLE `contacto` (
  `id_contacto` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `mensaje` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id_contacto`, `nombre`, `email`, `mensaje`) VALUES
(12, 'German', 'gerquercia@gmail.com', '123456789'),
(13, 'German', 'gerquercia@hotmail.com', 'nuevo mensaje 1'),
(14, 'German', 'gerquercia@gmail.com', 'nuevo mensaje 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesa`
--

DROP TABLE IF EXISTS `mesa`;
CREATE TABLE `mesa` (
  `id_mesa` int(11) NOT NULL,
  `numero_mesa` int(11) NOT NULL,
  `personas` int(11) NOT NULL,
  `estado` enum('libre','ocupada') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'libre'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `mesa`
--

INSERT INTO `mesa` (`id_mesa`, `numero_mesa`, `personas`, `estado`) VALUES
(1, 2, 1, 'ocupada'),
(2, 4, 4, 'ocupada'),
(3, 2, 2, 'ocupada'),
(4, 4, 1, 'ocupada'),
(5, 3, 1, 'ocupada'),
(6, 1, 1, 'ocupada'),
(7, 4, 5, 'ocupada'),
(8, 1, 3, 'ocupada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

DROP TABLE IF EXISTS `reserva`;
CREATE TABLE `reserva` (
  `id_reserva` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `horario` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `personas` int(11) DEFAULT NULL,
  `comentarios` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `mesa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id_reserva`, `nombre`, `fecha`, `horario`, `personas`, `comentarios`, `mesa_id`) VALUES
(6, 'German', '2024-07-05', '19:00', 1, 'una persona - mesa uno', 6),
(8, 'Alguien mas', '2024-07-10', '22:00', 3, '3 personas en mesa 1', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuarios`, `nombre`, `pass`) VALUES
(1, 'usuario1', '$2a$05$B.ckxVxnGIhEZbj0kJ7SS.CTM28EcGEVKeErW1gGQ15ElqFx6QdMK'),
(2, 'usuario2', '$2a$05$grNn1O8/NZf0VqIX0jneO.69osM/hKwuJl61sWi9eSbFYH8khSBX.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carta`
--
ALTER TABLE `carta`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_contacto`),
  ADD UNIQUE KEY `id_contacto_UNIQUE` (`id_contacto`);

--
-- Indices de la tabla `mesa`
--
ALTER TABLE `mesa`
  ADD PRIMARY KEY (`id_mesa`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id_reserva`),
  ADD UNIQUE KEY `id_reserva_UNIQUE` (`id_reserva`),
  ADD KEY `fk_mesa` (`mesa_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuarios`),
  ADD UNIQUE KEY `id_usuarios_UNIQUE` (`id_usuarios`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carta`
--
ALTER TABLE `carta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `mesa`
--
ALTER TABLE `mesa`
  MODIFY `id_mesa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_mesa` FOREIGN KEY (`mesa_id`) REFERENCES `mesa` (`id_mesa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04/03/2026 às 20:20
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbhotel`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `adicionais`
--

CREATE TABLE `adicionais` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `preco` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `adicionais`
--

INSERT INTO `adicionais` (`id`, `nome`, `preco`) VALUES
(1, 'Banheira', 149.9),
(2, 'Banheira', 149.9),
(3, 'Banheira', 149.9),
(4, 'felipe@gmail.com', 1234),
(5, 'felipe@gmail.com', 1234),
(6, 'felipe@gmail.com', 1234);

-- --------------------------------------------------------

--
-- Estrutura para tabela `cargos`
--

CREATE TABLE `cargos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cargos`
--

INSERT INTO `cargos` (`id`, `nome`) VALUES
(1, 'Usuario'),
(2, 'Clientes');

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fk_cargo` int(11) DEFAULT 2,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `cpf`, `telefone`, `email`, `fk_cargo`, `senha`) VALUES
(100, 'Felipe', '123456789-55', '157070-7070', 'feamaral@gmail.com', 2, '$2b$10$EKa.xhXnu36DAMyg.uVi1eagf.8BSxsolc3kYg6GdQBx6BS2cTH7S'),
(101, 'FelPedroipe', '123456789-55', '157070-7070', 'feamaral@gmail.com', 2, '$2b$10$yon0XPY9MWkqXHl83qfy3e8Yc5uZTXohQOx3vcbPDdcybKc7GKgS.'),
(102, 'Pedro', '123456789-55', '157070-7070', 'feamaral@gmail.com', 2, '$2b$10$0qw0sqXoSiQLAO9WRlUzvO2sTvbR9NTD5t2NPt2tJn4rjx/V//UO2'),
(103, 'Pedro', '123456789-55', '157070-7070', 'pedro@gmail.com', 2, '$2b$10$F.oKhwAa89XwGR.bXRs9EewyppVC1VVK3T/iWH7QNUvvm0.V.dcw.'),
(104, 'Pedro', '123456789-55', '157070-7070', 'pedro@gmail.com', 2, '$2b$10$80Ib2gA4s3kQy5tpl3krGeRAjlOxKziu9EbM1oDw.acjKJfzgjUje'),
(105, 'Pedro', '123456789-55', '157070-7071', 'pedro@gmail.com', 2, '$2b$10$fdpgsC3ZgOLNCvsvwqUv4etNKoXbnZREXO3IJkHIZKbpJOymKnPy6'),
(106, 'Pedro', '123456789-55', '157070-7071', 'pedro@gmail.com', 2, '$2b$10$J2M2CO02cupWJWUWRul54O./LqB.Fh5O88pHCoO5HMbRzX2sy0wqK'),
(107, 'Pedro', '123456789-55', '157070-7071', 'pedro@gmail.com', 2, '$2b$10$9/NEftUhe9I3kavWQGmkxutisEnDT9nTKoIEiR0yKxO04lV5fcZ3O');

-- --------------------------------------------------------

--
-- Estrutura para tabela `fotos`
--

CREATE TABLE `fotos` (
  `nome` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `fotos`
--

INSERT INTO `fotos` (`nome`, `id`) VALUES
('fotos/quartos/suiteLuxo001', 1),
('fotos/quartos/quartoCasal002', 2),
('fotos/quartos/quartoFamilia003', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `foto_quarto`
--

CREATE TABLE `foto_quarto` (
  `foto_id` int(11) DEFAULT NULL,
  `quarto_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `foto_quarto`
--

INSERT INTO `foto_quarto` (`foto_id`, `quarto_id`) VALUES
(1, 3),
(2, 2),
(3, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `imagens`
--

CREATE TABLE `imagens` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `caminho` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `data` timestamp NOT NULL DEFAULT current_timestamp(),
  `pagamento` enum('Cartão','Dinheiro','Pix') DEFAULT 'Cartão'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `usuario_id`, `cliente_id`, `data`, `pagamento`) VALUES
(1, 8, 102, '2026-03-04 18:06:07', 'Cartão'),
(12, NULL, 100, '2026-03-04 19:12:59', 'Pix'),
(13, NULL, 100, '2026-03-04 19:13:51', 'Pix');

-- --------------------------------------------------------

--
-- Estrutura para tabela `quartos`
--

CREATE TABLE `quartos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `qtd_cama_casal` int(11) NOT NULL,
  `qtd_cama_solteiro` int(11) NOT NULL,
  `preco` double NOT NULL,
  `disponivel` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `quartos`
--

INSERT INTO `quartos` (`id`, `nome`, `numero`, `qtd_cama_casal`, `qtd_cama_solteiro`, `preco`, `disponivel`) VALUES
(1, 'Quarto Casal(Criança)', '003', 1, 2, 375.99, 1),
(2, 'Casal Deluxe', '002', 1, 0, 250.99, 1),
(3, 'Suíte de Luxo', '001', 1, 0, 120.9, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) DEFAULT NULL,
  `quarto_id` int(11) DEFAULT NULL,
  `adicional_id` int(11) DEFAULT NULL,
  `fim` timestamp NOT NULL DEFAULT current_timestamp(),
  `inicio` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `reservas`
--

INSERT INTO `reservas` (`id`, `pedido_id`, `quarto_id`, `adicional_id`, `fim`, `inicio`) VALUES
(7, 12, 1, NULL, '2026-03-04 17:00:00', '2026-03-30 15:00:00'),
(8, 13, 1, NULL, '2026-03-30 15:00:00', '2026-03-04 17:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cargo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `cargo_id`) VALUES
(8, 'Felipe', 'felipe.asouza29@senacsp.edu.br', '38555c58ead04cddca5170734accd75b', 1),
(9, 'Felipe Amaral', 'felipe@gmail.com', '$2y$10$qQ4YzC5MxSJA459Copb2OupRBe6X2OB8mMlZ02N8UwYd0ww13dkdK', 1),
(10, 'felipe', 'felipe@gmail.com', '123', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `adicionais`
--
ALTER TABLE `adicionais`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cargo` (`fk_cargo`);

--
-- Índices de tabela `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `foto_quarto`
--
ALTER TABLE `foto_quarto`
  ADD KEY `imagem_id` (`foto_id`),
  ADD KEY `quarto_id` (`quarto_id`);

--
-- Índices de tabela `imagens`
--
ALTER TABLE `imagens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `cliente_id` (`cliente_id`);

--
-- Índices de tabela `quartos`
--
ALTER TABLE `quartos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido_id` (`pedido_id`),
  ADD KEY `quarto_id` (`quarto_id`),
  ADD KEY `adicional_id` (`adicional_id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cargo_id` (`cargo_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `adicionais`
--
ALTER TABLE `adicionais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT de tabela `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `imagens`
--
ALTER TABLE `imagens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `quartos`
--
ALTER TABLE `quartos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_cargo` FOREIGN KEY (`fk_cargo`) REFERENCES `cargos` (`id`);

--
-- Restrições para tabelas `foto_quarto`
--
ALTER TABLE `foto_quarto`
  ADD CONSTRAINT `id_foto` FOREIGN KEY (`foto_id`) REFERENCES `fotos` (`id`),
  ADD CONSTRAINT `id_quarto` FOREIGN KEY (`quarto_id`) REFERENCES `quartos` (`id`);

--
-- Restrições para tabelas `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`);

--
-- Restrições para tabelas `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`quarto_id`) REFERENCES `quartos` (`id`),
  ADD CONSTRAINT `reservas_ibfk_3` FOREIGN KEY (`adicional_id`) REFERENCES `adicionais` (`id`);

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

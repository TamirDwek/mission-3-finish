-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 07:24 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meeting management`
--
CREATE DATABASE IF NOT EXISTS `meeting management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `meeting management`;

-- --------------------------------------------------------

--
-- Table structure for table `development_groups`
--

CREATE TABLE `development_groups` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `development_groups`
--

INSERT INTO `development_groups` (`id`, `group_name`, `created_at`, `updated_at`) VALUES
('8ddf3deb-fcb6-11ef-85e2-0242ac110002', 'UI Team ', '2025-03-09 07:16:45', '2025-03-09 07:16:45'),
('8ddf45ec-fcb6-11ef-85e2-0242ac110002', 'Mobile Team', '2025-03-09 07:16:45', '2025-03-09 07:16:45'),
('97bf068a-fcb6-11ef-85e2-0242ac110002', 'React Team', '2025-03-09 07:17:29', '2025-03-09 07:17:29'),
('97bf1881-fcb6-11ef-85e2-0242ac110002', 'Node js Team', '2025-03-09 07:17:29', '2025-03-09 07:17:29'),
('aa2bc1da-fcb6-11ef-85e2-0242ac110002', 'AI Team', '2025-03-09 07:17:46', '2025-03-09 07:17:46'),
('aa2bc910-fcb6-11ef-85e2-0242ac110002', 'Art Team', '2025-03-09 07:17:46', '2025-03-09 07:17:46'),
('c2f2a0b2-fcb6-11ef-85e2-0242ac110002', 'Development Team', '2025-03-09 07:18:17', '2025-03-09 07:18:17'),
('c2f2a747-fcb6-11ef-85e2-0242ac110002', 'Production Team', '2025-03-09 07:18:17', '2025-03-09 07:18:17');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `group_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `meeting_starting_time` datetime NOT NULL,
  `meeting_description` varchar(255) NOT NULL,
  `meeting_room` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `group_id`, `meeting_starting_time`, `meeting_description`, `meeting_room`, `created_at`, `updated_at`) VALUES
('0f12de03-fcb7-11ef-85e2-0242ac110002', '8ddf45ec-fcb6-11ef-85e2-0242ac110002', '2025-03-07 09:20:04', 'Money and needs', 'Work room', '2025-03-09 07:20:04', '2025-03-09 07:20:04'),
('0f12e477-fcb7-11ef-85e2-0242ac110002', '8ddf3deb-fcb6-11ef-85e2-0242ac110002', '2025-03-09 07:20:04', 'how to grow up', 'Ui room', '2025-03-09 07:20:04', '2025-03-09 07:20:04'),
('3ec251eb-fcb7-11ef-85e2-0242ac110002', '97bf1881-fcb6-11ef-85e2-0242ac110002', '2025-03-09 07:21:05', 'develop the Server company', 'lom Room', '2025-03-09 07:21:05', '2025-03-09 07:21:05'),
('3ec25909-fcb7-11ef-85e2-0242ac110002', 'c2f2a747-fcb6-11ef-85e2-0242ac110002', '2025-03-31 09:21:05', 'talking about Marketing in the company', 'Marketing Room', '2025-03-09 07:21:05', '2025-03-09 07:21:05'),
('5b9160ba-fcb7-11ef-85e2-0242ac110002', 'c2f2a747-fcb6-11ef-85e2-0242ac110002', '2025-03-09 07:22:24', 'Security in the company', 'red room', '2025-03-09 07:22:24', '2025-03-09 07:22:24'),
('5b9168fb-fcb7-11ef-85e2-0242ac110002', 'c2f2a0b2-fcb6-11ef-85e2-0242ac110002', '2025-03-09 07:22:24', 'how to make a lot of money', 'Moon Room', '2025-03-09 07:22:24', '2025-03-09 07:22:24'),
('eb1d9db4-fcb6-11ef-85e2-0242ac110002', 'aa2bc1da-fcb6-11ef-85e2-0242ac110002', '2025-03-09 07:19:02', 'talking about the futere of the company', 'Blue room', '2025-03-09 07:19:02', '2025-03-09 07:19:02'),
('eb1daffc-fcb6-11ef-85e2-0242ac110002', 'aa2bc910-fcb6-11ef-85e2-0242ac110002', '2025-03-19 09:19:02', 'talking about the company name', 'White room', '2025-03-09 07:19:02', '2025-03-09 07:19:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `development_groups`
--
ALTER TABLE `development_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `development_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

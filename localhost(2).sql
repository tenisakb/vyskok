-- Adminer 4.2.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `results`;
CREATE DATABASE `results` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `results`;

DROP TABLE IF EXISTS `savedresults`;
CREATE TABLE `savedresults` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `surName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `sex` varchar(6) NOT NULL,
  `jumpHeight` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `savedresults` (`id`, `firstName`, `surName`, `email`, `tel`, `sex`, `jumpHeight`) VALUES
(20,	'jh',	'hkl',	'jklj',	'klj',	'Muž',	14),
(21,	'jh',	'hkl',	'jklj',	'klj',	'Muž',	237),
(19,	'Jan',	'Demel',	'jandemel98@gmail.com',	'603979638',	'Muž',	314),
(18,	'kljlkjhlk',	'jlk',	'jlk',	'jlk',	'Muž',	276),
(17,	'dsfgsdfg',	'sdfgdsfg',	'sdfgdsfgdsfg',	'dsfg32132',	'Muž',	195),
(16,	'piuoi',	'ulij',	'lkj',	'lkjlk',	'Muž',	186),
(15,	'ouhkj',	'hkjh',	'kjh',	'kjhkj',	'Muž',	154),
(14,	'jkhkj',	'hkjh',	'kjh',	'kjhkj',	'Muž',	43),
(22,	'darg',	'dsfg',	'sadfasdf',	'asfsadf',	'Muž',	178),
(23,	'Jan',	'Dylino',	'Petrpn@gmilc.om',	'asdfasdf',	'Muž',	189),
(24,	'sauzh',	'kjh',	'kjh',	'65416516',	'Muž',	166);

-- 2016-01-29 12:12:13

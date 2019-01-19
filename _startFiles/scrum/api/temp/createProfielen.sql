CREATE TABLE `profielen` (
 `id` varchar(24) NOT NULL,
 `familienaam` varchar(1000) NOT NULL,
 `voornaam` varchar(1000) NOT NULL,
 `geboortedatum` varchar(10) NOT NULL,
 `email` varchar(1000) NOT NULL,
 `nickname` varchar(1000) NOT NULL,
 `foto` varchar(1000) NOT NULL,
 `beroep` varchar(1000) NOT NULL,
 `sexe` varchar(1) NOT NULL,
 `haarkleur` varchar(50) NOT NULL,
 `oogkleur` varchar(50) NOT NULL,
 `grootte` int(11) NOT NULL,
 `gewicht` int(11) NOT NULL,
 `wachtwoord` varchar(1000) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
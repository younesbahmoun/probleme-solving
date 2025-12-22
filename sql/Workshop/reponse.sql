-- Niveau Débutant
1) 
SELECT * FROM participants;
2)
SELECT 
    nom,
    prenom 
FROM participants
WHERE nationalite = 'Marocaine';
3)
SELECT COUNT(*) FROM participants;
4)
SELECT * FROM participants
WHERE date_naissance >= '1995-01-01';
5)
SELECT * FROM participants
ORDER BY prenom;



-- Niveau Intermédiaire
6)
SELECT 
    nationalite, 
    COUNT(*) AS nombre_participants
FROM participants
GROUP BY nationalite
ORDER BY nombre_participants DESC;
7)
SELECT 
	nationalite,
	COUNT(*) AS nombre_participants 
FROM participants
GROUP BY nationalite
HAVING COUNT(*) > 2;
8)
SELECT 
    ROUND(AVG(TIMESTAMPDIFF(YEAR, date_naissance, CURDATE()))) AS age
FROM participants
WHERE date_naissance IS NOT NULL;
9)
SELECT 
    MAX(TIMESTAMPDIFF(YEAR, date_naissance, CURDATE())) AS max_age,
    MIN(TIMESTAMPDIFF(YEAR, date_naissance, CURDATE())) AS min_age
FROM participants
WHERE date_naissance IS NOT NULL;
10)
SELECT 
    TIMESTAMPDIFF(YEAR, date_naissance, CURDATE())
FROM participants
WHERE date_naissance IS NOT NULL
ORDER BY date_naissance DESC
LIMIT 4;



-- Niveau Avancé
11)
SELECT 
	p.nom,
    p.prenom,
    f.nom_formation
FROM participants p 
JOIN participant_formation pf ON p.id = pf.participant_id
JOIN formations f ON f.id = pf.formation_id;
12)
SELECT 
    f.nom_formation,
    COUNT(*) AS nombre_participants
FROM formations f
JOIN participant_formation pf ON f.id = pf.formation_id
GROUP BY f.nom_formation;
13)
SELECT 
    f.nom_formation,
    COUNT(*) AS nombre_participants
FROM formations f
JOIN participant_formation pf ON f.id = pf.formation_id
GROUP BY f.nom_formation
HAVING COUNT(*) >= 3;
14)
SELECT
	DISTINCT p.nationalite
FROM participants p
JOIN participant_formation pf ON pf.participant_id = p.id
JOIN formations f ON f.id = pf.formation_id
WHERE f.nom_formation LIKE 'Workshop Carte ID';
15)
SELECT
	f.nom_formation,
    FLOOR(AVG(TIMESTAMPDIFF(YEAR, p.date_naissance, CURDATE()))) AS moyen_age
FROM formations f
JOIN participant_formation pf ON pf.formation_id = f.id
JOIN participants p ON pf.participant_id = p.id
GROUP BY f.nom_formation
ORDER BY moyen_age DESC;
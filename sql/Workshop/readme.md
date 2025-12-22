# Workshop SQL – Manipulation de Données (MySQL)

## Objectif du Workshop
Ce workshop a pour objectif de permettre de pratiquer les bases de MySQL à travers des mises en situation concrètes.
Ils travailleront sur la manipulation des données (SELECT, WHERE, JOIN, fonctions d’agrégation) à partir d’une base de données réelle et structurée.


## Étape 1 – Création de la base de données

Exécuter le script SQL suivant dans phpMyAdmin ou via le terminal MySQL.

```sql
CREATE DATABASE IF NOT EXISTS workshop;
USE workshop;

CREATE TABLE participants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    date_naissance DATE,
    nationalite VARCHAR(50),
    adresse VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE formations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_formation VARCHAR(100),
    date_debut DATE,
    date_fin DATE
);

CREATE TABLE participant_formation (
    participant_id INT,
    formation_id INT,
    PRIMARY KEY (participant_id, formation_id),
    FOREIGN KEY (participant_id) REFERENCES participants(id),
    FOREIGN KEY (formation_id) REFERENCES formations(id)
);

 
INSERT INTO participants (nom, prenom, date_naissance, nationalite, adresse, email) VALUES
('El Idrissi', 'Ali', '1995-03-12', 'Marocaine', 'Rabat', 'ali@mail.com'),
('Benchekroun', 'Sara', '1997-07-05', 'Marocaine', 'Casablanca', 'sara@mail.com'),
('Smith', 'John', '1990-11-22', 'Américaine', 'New York', 'john@mail.com'),
('Dupont', 'Claire', '1992-01-18', 'Française', 'Paris', 'claire@mail.com'),
('Khalifa', 'Amir', '1989-06-09', 'Marocaine', 'Marrakech', 'amir@mail.com'),
('Tarek', 'Omar', '1996-12-15', 'Tunisienne', 'Tunis', 'omar@mail.com'),
('Nguyen', 'Linh', '1994-09-21', 'Vietnamienne', 'Hanoi', 'linh@mail.com'),
('Almeida', 'Lucas', '1993-02-10', 'Portugaise', 'Lisbonne', 'lucas@mail.com'),
('Chen', 'Mei', '1998-05-30', 'Chinoise', 'Beijing', 'mei@mail.com');

INSERT INTO formations (nom_formation, date_debut, date_fin) VALUES
('Workshop Carte ID', '2025-12-20', '2025-12-22'),
('JavaScript DOM', '2025-12-23', '2025-12-27');

INSERT INTO participant_formation VALUES
(1,1),
(2,1),
(5,1),
(6,1),
(9,1),
(3,2),
(4,2),
(7,2),
(8,2);
```

---

## Étape 2 – ERD de la base de données

Voici le diagramme ERD représentant la structure de la base :
<img width="1130" height="291" alt="Screenshot From 2025-12-19 10-17-40" src="https://github.com/user-attachments/assets/d5328143-aa1d-4d18-9558-585eafc3a76f" />


---

## Étape 3 – Challenges SQL

### Niveau Débutant

1. Afficher tous les participants.
2. Afficher les noms et prénoms des participants marocains.
3. Compter le nombre total de participants.
4. Afficher les participants nés après 1995.
5. Trier les participants par prénom.

### Niveau Intermédiaire

6. Compter le nombre de participants par nationalité.
7. Afficher les nationalités ayant plus de 2 participants.
8. Calculer l’âge moyen des participants.
9. Afficher le participant le plus jeune et le plus âgé.
10. Afficher les 3 participants les plus jeunes.

### Niveau Avancé

11. Afficher les participants avec le nom de leur formation.
12. Compter le nombre de participants par formation.
13. Afficher les formations ayant au moins 3 participants.
14. Afficher les nationalités des participants inscrits au "Workshop Carte ID".
15. Afficher les formations avec l’âge moyen des participants, trié par ordre décroissant.

---

## Règles du Workshop

* Utiliser uniquement des requêtes SQL
* Utiliser : WHERE, JOIN, COUNT, AVG, MIN, MAX, GROUP BY, HAVING, ORDER BY, LIMIT..
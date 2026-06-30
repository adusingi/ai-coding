# Starter Kit — [Nom de l'équipe]
**Livrable post-session 2. À personnaliser pour chaque client.**

---

## 1. Votre CLAUDE.md

Créez ce fichier à la racine de votre projet principal. Il donne à Claude le contexte de votre équipe — chaque développeur obtiendra des réponses cohérentes.

```markdown
# [Nom du projet]

## Contexte du projet
[Description courte de ce que fait le produit — 2-3 phrases]

## Stack technique
- Backend : [ex. Python / Django]
- Frontend : [ex. React / TypeScript]
- Base de données : [ex. PostgreSQL]
- Déploiement : [ex. Docker on-premise]

## Architecture
[Les grandes parties du système — ex. API REST, worker de traitement, interface admin]

## Conventions de code
- [ex. Nommage des variables en snake_case]
- [ex. Tests unitaires obligatoires pour chaque nouvelle fonction]
- [ex. PR review par au moins 1 autre développeur]

## Ce qu'on NE fait pas
- [ex. On ne touche pas à la config réseau sans valider avec Saga]
- [ex. On ne déploie pas le vendredi]

## Glossaire
- [Terme métier 1] : [définition]
- [Terme métier 2] : [définition]
```

---

## 2. Prompts utiles — Cheatsheet

### Structurer une idée avant de coder

```
Tu es un ingénieur senior. Interroge-moi sur cette idée jusqu'à ce qu'on ait résolu
tous les points flous : [décris ton idée en 2-3 phrases].
Pose une question à la fois. Ne commence pas à coder.
```

### Audit d'architecture

```
Analyse l'architecture de ce projet et génère un document ARCHITECTURE.md complet.
Couvre : structure des dossiers, composants principaux, base de données, intégrations
externes, déploiement, sécurité. N'invente rien — base-toi uniquement sur ce que
tu trouves dans le code.
```

### Demander des optimisations après l'audit

```
Tu viens de générer l'ARCHITECTURE.md de notre projet. En te basant uniquement sur
ce que tu as vu, qu'est-ce qui te semble manquant, risqué, ou sous-optimal ?
Donne-moi une liste priorisée avec une explication pour chaque point.
```

### Prototyper une idée rapidement

```
Je veux tester une idée avant de la construire. Crée un prototype minimal qui me
permet de valider [hypothèse précise]. Pas besoin que ce soit production-ready —
juste assez pour voir si ça tient.
```

### Créer des tickets d'engineering depuis une discussion

```
On vient de définir cette fonctionnalité : [description]. Décompose ça en tickets
d'engineering indépendants, du plus petit au plus grand. Pour chaque ticket :
titre, description, critères d'acceptation, dépendances.
```

---

## 3. Plan 30 jours — Ancrer les habitudes

### Semaine 1 — Fondations
- [ ] Chaque développeur ouvre Claude Code au moins une fois par jour
- [ ] Le `CLAUDE.md` est créé et partagé sur le repo principal
- [ ] Chaque développeur utilise Claude sur une vraie tâche cette semaine

### Semaine 2 — Structurer les idées
- [ ] Avant de coder une nouvelle fonctionnalité, passer par le prompt "structurer une idée"
- [ ] Comparer : est-ce que le résultat est meilleur qu'avant ? Qu'est-ce qui manque ?
- [ ] Mettre à jour le `CLAUDE.md` avec ce qu'on a appris

### Semaine 3 — Architecture
- [ ] Lancer l'audit d'architecture sur le projet principal
- [ ] Demander les optimisations
- [ ] Choisir 1 point à adresser et créer le ticket correspondant

### Semaine 4 — Équipe
- [ ] Organiser un point de 30 min en équipe : qu'est-ce qui a marché ? Qu'est-ce qui n'a pas marché ?
- [ ] Choisir 2 prompts à standardiser pour toute l'équipe
- [ ] Décider de la prochaine compétence à acquérir (prototypage ? tickets automatiques ?)

---

## 4. Ressources

- Claude Code : `npm install -g @anthropic-ai/claude-code`
- Documentation Claude Code : [docs.anthropic.com](https://docs.anthropic.com)
- Pour aller plus loin : prototypage, ADRs, génération de tickets — demander à Aimable

# Guide de setup — À faire avant la session 1
**Durée estimée : 10 minutes**
**À envoyer à l'équipe de Saga avant la première session.**

---

Bonjour à toute l'équipe,

Avant notre première session, merci de faire ce setup rapide sur votre machine. Ça prend environ 10 minutes et ça nous permet de démarrer directement dans le vif du sujet le jour J.

---

## Étape 1 — Créer un compte Anthropic (2 min)

1. Va sur [claude.ai](https://claude.ai)
2. Crée un compte avec ton email professionnel
3. Choisis le plan **Pro** (20 $/mois) — il te sera remboursé par l'entreprise

> Si tu as déjà un compte, passe directement à l'étape 2.

---

## Étape 2 — Installer Claude Code (5 min)

Claude Code est l'outil qu'on va utiliser en session. C'est une interface en ligne de commande — ouvre ton terminal et suis ces étapes.

**Prérequis : Node.js installé sur ta machine.**
Pour vérifier : `node --version` dans le terminal. Si tu vois un numéro de version, c'est bon.
Si Node n'est pas installé : [nodejs.org](https://nodejs.org) → télécharge la version LTS.

**Installation de Claude Code :**

```bash
npm install -g @anthropic-ai/claude-code
```

**Connexion à ton compte :**

```bash
claude
```

Au premier lancement, Claude Code va t'ouvrir une page de connexion dans ton navigateur. Connecte-toi avec le compte créé à l'étape 1.

---

## Étape 3 — Tester que tout fonctionne (3 min)

Dans ton terminal, dans n'importe quel dossier de projet, tape :

```bash
claude
```

Puis pose cette question :

```
Explique-moi en 3 phrases ce qu'est un CLAUDE.md et à quoi ça sert.
```

Si tu reçois une réponse cohérente, tout est prêt.

---

## En cas de problème

Réponds à cet email avec une capture d'écran de l'erreur — on règle ça avant la session.

---

## Ce qu'on fera en session 1

On ne passera pas de temps sur la théorie. On va directement :
- Créer votre `CLAUDE.md` ensemble sur un vrai projet
- Utiliser Claude pour structurer une idée que vous travaillez en ce moment

Venez avec un projet sur lequel vous travaillez actuellement ouvert dans votre éditeur.

À bientôt,
Aimable

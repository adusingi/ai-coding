# Guide de setup — À faire avant la session 1
**Durée estimée : ~15 minutes (10 min de setup + 5 min de lecture)**
**À envoyer à l'équipe de Saga avant la première session.**

---

Bonjour à toute l'équipe,

Avant notre première session, merci de faire ce setup rapide et cette courte lecture. Ça prend environ 15 minutes et ça nous permet de démarrer directement dans le vif du sujet le jour J — sans perdre de temps sur les installations ou les définitions.

---

## Étape 1 — Passer à Claude Pro (3 min)

1. Va sur [claude.ai](https://claude.ai)
2. Crée un compte (ou connecte-toi) avec ton email professionnel
3. Passe au plan **Pro** (20 $/mois) — pris en charge de façon centralisée par Saga pour l'équipe

> **Pourquoi Pro et pas la version gratuite ?** Deux raisons. D'abord, la version gratuite sert à essayer — le travail professionnel se fait sur la version payante (limites plus hautes, les modèles les plus puissants, et Claude Code). Ensuite, évaluer si les offres payantes valent le coup pour votre équipe fait partie des objectifs de ces sessions — et on ne peut juger correctement qu'en travaillant sur la vraie version. On la comparera en direct à ce que donnent les outils gratuits.

---

## Étape 2 — Installer Claude Code (5 min)

Claude Code est l'agent de code qu'on va utiliser en session. Tu peux l'utiliser de deux façons — choisis celle que tu préfères :

**Option A — Extension VS Code (recommandée, l'équipe utilise déjà VS Code)**
Ouvre VS Code → Extensions → cherche **« Claude Code »** → Installer. Connecte-toi avec le compte de l'étape 1.

**Option B — Ligne de commande**

Prérequis : Node.js installé. Pour vérifier : `node --version` dans le terminal — si tu vois un numéro de version, c'est bon. Sinon : [nodejs.org](https://nodejs.org) → télécharge la version LTS.

```bash
npm install -g @anthropic-ai/claude-code
```

Puis lance-le et connecte-toi :

```bash
claude
```

Au premier lancement, une page de connexion s'ouvre dans ton navigateur — connecte-toi avec le compte de l'étape 1.

---

## Étape 3 — Tester que tout fonctionne (2 min)

Dans n'importe quel dossier de projet, lance Claude Code et pose cette question :

```
Explique-moi en 3 phrases ce qu'est un fichier CLAUDE.md et à quoi ça sert.
```

Si tu reçois une réponse cohérente, tout est prêt.

---

## Étape 4 — Lire : 12 termes IA à connaître (5 min)

Pour ne pas passer du temps sur les définitions en session, merci de lire ceci une fois. **Tu dois pouvoir expliquer chaque terme avec tes propres mots** — on ira vite et on s'appuiera dessus.

| # | Terme | En une ligne |
|---|-------|--------------|
| 1 | **LLM** (Large Language Model) | Le « cerveau » IA derrière ChatGPT, Claude, Gemini, Copilot — il prédit le prochain morceau de texte, à grande échelle. |
| 2 | **Hallucination** | Quand l'IA invente quelque chose — avec assurance, et complètement faux. (On creusera ce point en direct.) |
| 3 | **Token (jeton)** | L'unité de base du texte IA — un morceau de mot, et ce que tu paies réellement. |
| 4 | **Entraînement vs Inférence** | Apprendre au modèle (lent, une fois) vs. le modèle qui te répond (rapide, à chaque fois). |
| 5 | **Fine-tuning (affinage)** | Prendre un modèle généraliste et le spécialiser sur des données ciblées pour une tâche précise. |
| 6 | **Apprentissage par renforcement** | Le modèle apprend par essais, récompense et répétition — c'est ainsi qu'on rend les assistants utiles. |
| 7 | **Distillation** | Apprendre à un petit modèle à imiter un grand — plus rapide et moins cher, presque aussi bon. |
| 8 | **RAG** (génération augmentée par récupération) | L'IA + tes propres documents : elle récupère les passages pertinents avant de répondre, ce qui réduit les hallucinations. |
| 9 | **Chaîne de pensée (Chain of Thought)** | Le modèle résout un problème étape par étape — plus lent, mais bien plus fiable. |
| 10 | **Poids (Weights)** | Les milliards de nombres dans le modèle qui stockent ce qu'il « sait ». |
| 11 | **Validation Loss (perte de validation)** | Un score qui mesure la qualité de l'entraînement — plus bas = mieux ; détecte la mémorisation au lieu de l'apprentissage. |
| 12 | **Agent de code (Coding Agent)** | Une IA qui ne se contente pas de suggérer du code — elle écrit, exécute, teste et débogue toute seule (Claude Code, mode agent de Copilot, Cursor). |

---

## En cas de problème

Réponds à cet email avec une capture d'écran de l'erreur — on règle ça avant la session.

---

## Ce qu'on fera en session 1

On ne passera pas de temps sur la théorie. On va directement :
- Créer ensemble votre **fichier de contexte** partagé sur un vrai projet — le « cerveau d'équipe » qui donne à l'IA un contexte cohérent pour tout le monde (on le montrera dans les outils que vous utilisez : le `CLAUDE.md` de Claude Code, les instructions de GitHub Copilot, et les Projets de Claude/ChatGPT)
- Utiliser l'IA pour **structurer une idée** sur laquelle vous travaillez en ce moment, avant d'écrire la moindre ligne de code
- Une comparaison rapide et honnête **gratuit vs Pro** pour que vous voyiez la différence par vous-mêmes

Venez avec un projet sur lequel vous travaillez actuellement ouvert dans votre éditeur.

À bientôt,
Aimable

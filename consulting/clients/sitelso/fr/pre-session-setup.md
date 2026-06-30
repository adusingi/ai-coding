# Guide de setup — À faire avant la session 1
**Durée estimée : 15 minutes minimum**
**Page réservée aux membres — accès accordé à l'équipe SiTelSo.**

---

Bonjour à toute l'équipe,

Avant notre première session, merci de faire ce setup et cette courte lecture. Comptez au minimum 15 minutes — ça nous permet de démarrer directement dans le vif du sujet le jour J, sans perdre de temps sur les installations ou les définitions.

---

## Étape 1 — Passer à Claude Pro

1. Allez sur [claude.ai](https://claude.ai)
2. Créez un compte (ou connectez-vous) avec votre email professionnel
3. Passez au plan **Pro** (20 $/mois) — pris en charge de façon centralisée pour l'équipe.\*

\* _Prise en charge réservée à l'équipe SiTelSo._

> **Pourquoi Pro et pas la version gratuite ?** Deux raisons. D'abord, la version gratuite sert à essayer — le travail professionnel se fait sur la version payante (limites plus hautes, les modèles les plus puissants, et Claude Code). Ensuite, évaluer si les offres payantes valent le coup pour votre équipe fait partie des objectifs de ces sessions — et on ne peut juger correctement qu'en travaillant sur la vraie version. On la comparera en direct à ce que donnent les outils gratuits.

---

## Étape 2 — Installer Claude Code

Claude Code est l'agent de code qu'on va utiliser en session. Vous pouvez l'utiliser de deux façons — choisissez celle que vous préférez :

**Option A — Extension VS Code (recommandée, l'équipe utilise déjà VS Code)**
Ouvrez VS Code → Extensions → cherchez **« Claude Code »** → Installer. Connectez-vous avec le compte de l'étape 1.

**Option B — Ligne de commande**

Prérequis : Node.js installé. Pour vérifier : `node --version` dans le terminal — si vous voyez un numéro de version, c'est bon. Sinon : [nodejs.org](https://nodejs.org) → téléchargez la version LTS.

```bash
npm install -g @anthropic-ai/claude-code
```

Puis lancez-le et connectez-vous :

```bash
claude
```

Au premier lancement, une page de connexion s'ouvre dans votre navigateur — connectez-vous avec le compte de l'étape 1.

---

## Étape 3 — Tester que tout fonctionne

Dans n'importe quel dossier de projet, lancez Claude Code et posez cette question :

```
Explique-moi en 3 phrases ce qu'est un fichier CLAUDE.md et à quoi ça sert.
```

Si vous recevez une réponse cohérente, tout est prêt.

---

## Étape 4 — Lire : 12 termes IA à connaître

> 📖 **Version interactive et détaillée :** [academy.mobayilo.com/learn/ai-engineering](https://academy.mobayilo.com/learn/ai-engineering)

Pour ne pas passer du temps sur les définitions en session, merci de lire ceci une fois. **Vous devez pouvoir expliquer chaque terme avec vos propres mots** — on ira vite et on s'appuiera dessus.

| # | Terme | En une ligne |
|---|-------|--------------|
| 1 | **LLM** (Large Language Model) | Le « cerveau » IA derrière ChatGPT, Claude, Gemini, Copilot — il prédit le prochain morceau de texte, à grande échelle. |
| 2 | **Hallucination** | Quand l'IA invente quelque chose — avec assurance, et complètement faux. (On creusera ce point en direct.) |
| 3 | **Token (jeton)** | L'unité de base du texte IA — un morceau de mot, et ce que vous payez réellement. |
| 4 | **Entraînement vs Inférence** | Apprendre au modèle (lent, une fois) vs. le modèle qui vous répond (rapide, à chaque fois). |
| 5 | **Fine-tuning (affinage)** | Prendre un modèle généraliste et le spécialiser sur des données ciblées pour une tâche précise. |
| 6 | **Apprentissage par renforcement** | Le modèle apprend par essais, récompense et répétition — c'est ainsi qu'on rend les assistants utiles. |
| 7 | **Distillation** | Apprendre à un petit modèle à imiter un grand — plus rapide et moins cher, presque aussi bon. |
| 8 | **RAG** (génération augmentée par récupération) | L'IA + vos propres documents : elle récupère les passages pertinents avant de répondre, ce qui réduit les hallucinations. |
| 9 | **Chaîne de pensée (Chain of Thought)** | Le modèle résout un problème étape par étape — plus lent, mais bien plus fiable. |
| 10 | **Poids (Weights)** | Les milliards de nombres dans le modèle qui stockent ce qu'il « sait ». |
| 11 | **Validation Loss (perte de validation)** | Un score qui mesure la qualité de l'entraînement — plus bas = mieux ; détecte la mémorisation au lieu de l'apprentissage. |
| 12 | **Agent de code (Coding Agent)** | Une IA qui ne se contente pas de suggérer du code — elle écrit, exécute, teste et débogue toute seule (Claude Code, mode agent de Copilot, Cursor). |

---

## Optionnel — Améliorer votre terminal (bonus)

Vous allez utiliser Claude Code dans le terminal, donc un terminal confortable est un vrai plus. **Rien de tout ça n'est obligatoire pour la session** — installez-le seulement si vous le souhaitez.

Sur macOS, tout s'installe avec [Homebrew](https://brew.sh) :

```sh
brew install --cask ghostty   # terminal moderne, rapide, accéléré par le GPU
brew install yazi             # gestionnaire de fichiers dans le terminal, avec aperçus
brew install lazygit          # une interface terminal simple pour git
brew install zoxide           # un `cd` plus malin qui retient où vous allez
```

Après avoir installé zoxide, ajoutez cette ligne à la fin de `~/.zshrc` pour qu'il commence à mémoriser vos dossiers :

```sh
eval "$(zoxide init zsh)"
```

> **Windows :** Ghostty est réservé à macOS/Linux — utilisez Windows Terminal à la place. Les trois autres s'installent avec `winget` ou `scoop` (ex. `scoop install yazi lazygit zoxide`).

---

## En cas de problème

Envoyez une capture d'écran de l'erreur à Aimable — nous réglons ça avant la session.

---

## Ce qu'on fera en session 1

On ne passera pas de temps sur la théorie. On va directement :
- Créer ensemble votre **fichier de contexte** partagé sur un vrai projet — le « cerveau d'équipe » qui donne à l'IA un contexte cohérent pour tout le monde (on le montrera dans les outils que vous utilisez : le `CLAUDE.md` de Claude Code, les instructions de GitHub Copilot, et les Projets de Claude/ChatGPT)
- Utiliser l'IA pour **structurer une idée** sur laquelle vous travaillez en ce moment, avant d'écrire la moindre ligne de code
- Une comparaison rapide et honnête **gratuit vs Pro** pour que vous voyiez la différence par vous-mêmes

Venez avec un projet sur lequel vous travaillez actuellement ouvert dans votre éditeur.

À bientôt,
Aimable

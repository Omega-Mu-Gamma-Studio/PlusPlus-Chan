# ⚔️ PlusPlus-chan

**An anime-guided C++ tutor built for aspiring game developers — learn C++ by building a game, concept by concept.**

*Because nobody learned pointers from a cold segfault.*

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055ff)](https://www.framer.com/motion/)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](https://github.com/Omega-Mu-Gamma-Studio/PlusPlus-Chan/blob/main/LICENSE)

Built by [Omega Mu Gamma Studio](https://github.com/Omega-Mu-Gamma-Studio) · the team behind [SeeDS](https://see-ds.vercel.app), [KMapX](https://kmapx.vercel.app), [EG Suite](https://eg-suite.vercel.app), [GateLab](https://gatelab.vercel.app), [Java-chan](https://java-chan.vercel.app), [ArchVisor](https://arch-visor.vercel.app), and [ThermOS](https://thermos-omg.vercel.app).

---

## What is PlusPlus-chan?

PlusPlus-chan is a browser-based C++ learning app where an anime mascot character guides students through a complete game-development-oriented C++ curriculum. Every lesson follows a fixed three-phase model — working code, broken code, then you try — with an expressive character who **reacts to your progress**, escalates her hints when you're stuck, and celebrates when you get it right.

The twist? Every single concept is taught through the lens of **building a game**. Variables aren't abstract — they're your player's health. Pointers aren't scary — they're your enemy's memory address. By the end of all 75 lessons, you've built a complete text-based RPG in C++, piece by piece.

No abstract theory walls. No cold segfaults. No account required. Just C++ and a very intense tutor.

---

## The Teaching Model

Every single lesson — all 75 of them — follows this exact structure:

| Phase | Name | What Happens |
| --- | --- | --- |
| **1** | See It Work | C++-chan shows working code, the output, and explains what's happening line by line |
| **2** | See It Break | Same code, deliberately broken — she explains the error, what caused it, and why it matters |
| **3** | You Try | Student writes code or fills in blanks; pattern-based validation gives immediate feedback |

Validation is regex/pattern-based — no code execution in the browser. For full programs, students compile and run in their own environment. This keeps the app lightweight and deployable anywhere.

---

## Curriculum — 75 Lessons Across 5 Units

All five units are complete, published, and available from day one.

| Unit | Topic | Lessons |
| --- | --- | --- |
| 1 | C++ Foundations | 15 |
| 2 | Object-Oriented C++ | 15 |
| 3 | Memory & Pointers | 15 |
| 4 | STL & Templates | 15 |
| 5 | File I/O, Error Handling & Shipping | 15 |

<details>
<summary>📖 View all 75 lessons</summary>

**Unit 1 — C++ Foundations** `1.1` What is C++? Why game devs love it · `1.2` Setting up your environment (g++, VS Code) · `1.3` Your first program — Hello, Player! · `1.4` Variables, Data Types & Constants · `1.5` Arithmetic & Logical Operators · `1.6` Taking Input — the player types something · `1.7` if / else — branching decisions · `1.8` switch — menus and choices · `1.9` while loops — the game loop concept · `1.10` for loops — spawning things repeatedly · `1.11` Functions — reusable game actions · `1.12` Function overloading · `1.13` Arrays — storing multiple values · `1.14` Strings & string manipulation · `1.15` Scope, namespaces & std::

**Unit 2 — Object-Oriented C++** `2.1` Structs — grouping game data · `2.2` Classes & Objects — the Player class · `2.3` Constructors & Destructors · `2.4` Access modifiers — public, private, protected · `2.5` Getters & Setters · `2.6` Member functions — what a Player can do · `2.7` Inheritance — Enemy → Boss · `2.8` Method overriding · `2.9` Polymorphism — one function, many enemies · `2.10` Abstract classes & pure virtual functions · `2.11` Interfaces via abstract classes · `2.12` Static members — global game counters · `2.13` Friend functions & operator overloading · `2.14` Copy constructor & assignment operator · `2.15` The this pointer

**Unit 3 — Memory & Pointers** `3.1` Memory — stack vs heap, the basics · `3.2` Pointers — what they are and why · `3.3` Pointer arithmetic · `3.4` References vs Pointers · `3.5` new and delete — dynamic allocation · `3.6` Memory leaks — how your game dies slowly · `3.7` Smart pointers — unique_ptr · `3.8` Smart pointers — shared_ptr & weak_ptr · `3.9` Dynamic arrays with pointers · `3.10` Passing by value vs reference vs pointer · `3.11` Returning pointers from functions · `3.12` Pointer to objects — dynamic enemy spawning · `3.13` The Rule of Three · `3.14` Move semantics — std::move · `3.15` RAII — Resource Acquisition Is Initialization

**Unit 4 — STL & Templates** `4.1` What is the STL? · `4.2` std::vector — the dynamic inventory · `4.3` std::array — fixed-size collections · `4.4` std::list — turn-order queues · `4.5` std::map — item databases & lookup tables · `4.6` std::unordered_map — fast lookups · `4.7` std::set & std::unordered_set · `4.8` Iterators — walking through collections · `4.9` STL Algorithms — sort, find, count · `4.10` Lambda functions · `4.11` Function pointers & std::function · `4.12` Templates — generic game components · `4.13` Template specialization · `4.14` Variadic templates · `4.15` std::tuple & std::pair — compound game data

**Unit 5 — File I/O, Error Handling & Shipping** `5.1` Exceptions — try, catch, throw · `5.2` Custom exception classes · `5.3` noexcept & exception safety · `5.4` File I/O basics — fstream · `5.5` Reading from files — loading game data · `5.6` Writing to files — saving game state · `5.7` Binary file I/O — save files · `5.8` JSON-style manual parsing (no lib) · `5.9` Preprocessor directives & macros · `5.10` Header files & the compilation model · `5.11` Multi-file projects — splitting your game · `5.12` Namespaces in large projects · `5.13` Intro to multithreading — std::thread · `5.14` Mutexes & race conditions · `5.15` Unit 5 Review — Your game is complete

</details>

---

## Features

### 🎓 Learning System

- **Three-phase lesson structure** — See It Work → See It Break → You Try, on every lesson, no exceptions
- **Game-dev context throughout** — every code example is part of a running RPG narrative
- **Contextual hint escalation** — hint appears at 2 wrong attempts, solution unlocks at 5
- **Pattern-based validation** — instant feedback without a server or code execution engine
- **Full lesson navigation** — collapsible sidebar with per-lesson completion tracking

### 🎮 Progression & Rewards

- **XP system** — earn XP on lesson completion; bonus XP for first-attempt success and hint-free runs
- **10 levels** — clear thresholds (100 XP per level) with a persistent progress bar
- **Level-gated cosmetics** — one new reward unlocks per level, alternating wallpapers and outfits
- **localStorage persistence** — no account needed, progress is saved in the browser

### 🎨 The Shop

The shop has two sections — cosmetics that change the app itself, and downloadable wallpapers for your device.

**App Themes** (equippable backgrounds):

| Level | Item | Style |
| --- | --- | --- |
| 1 | Terminal Black 🖤 | The classic void |
| 3 | Sakura Compile 🌸 | Cherry blossom dark |
| 5 | Neon Server Room 🌃 | Late-night blue |
| 7 | Galaxy Stack Overflow 🌌 | Deep space purple |
| 9 | Golden Hour Bytecode 🌇 | Amber sunset |

**Character Outfits** (equippable; all with full 6-expression sprite art):

| Level | Outfit | Vibe |
| --- | --- | --- |
| 1 | Classic Hoodie 🖤 | Her signature look, always equipped |
| 2 | Casual Hoodie 🧥 | Off the clock, still ready to compile |
| 4 | School Uniform 🎀 | Sailor-collar edition |
| 6 | Magical Girl Debugger 🪄 | Silver robe, glowing `*ptr` staff |
| 8 | Streetwear Hacker 🕶️ | All black, green cuffs |
| 10 | Legendary Kimono 👘 | For students who survived pointers |

**Downloadable Wallpapers** (phone/desktop art, save to your device):

- Sakura Study (Level 3) · Neon Night Compile (Level 5) · Galaxy Stack (Level 7) · Golden Hour Debug (Level 9)

### ✨ Character & Expressions

PlusPlus-chan has 6 distinct expressions that fire contextually throughout lessons:

| State | Trigger |
| --- | --- |
| `teaching` | Phase 1 — explaining working code |
| `thinking` | Hint mode; waiting for input |
| `excited` | Correct answer |
| `oops` | Wrong answer (first few times) |
| `frustrated` | Repeated wrong attempts |
| `idle-sleeping` | Idle between interactions |

Each equipped outfit has its own full set of 6 expression sprites — swapping outfits changes PlusPlus-chan's entire look, not just a filter.

**Domain Expansion** — a fullscreen celebration effect fires on milestone level-ups, complete with confetti.

---

## Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | React 19 + Vite 8 | Fast HMR, ES modules, modern JSX transform |
| Styling | Plain CSS + Framer Motion 12 | No CSS framework overhead; animations via Motion |
| State | Zustand 5 | Minimal boilerplate, works with `persist` middleware out of the box |
| Data | JSON files + localStorage | Zero backend for Phase 1; data adapter ready for Phase 2 |
| Routing | React Router v7 | File-level page components |
| Hosting | Vercel | Zero-config deployment |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Running Locally

```bash
# Clone the repo
git clone https://github.com/Omega-Mu-Gamma-Studio/PlusPlus-Chan.git
cd PlusPlus-Chan

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Deploying to Vercel

This repo is Vercel-ready with no configuration needed. Connect the repo in the Vercel dashboard and it'll detect the Vite setup automatically. No environment variables required for Phase 1.

---

## Project Structure

```
PlusPlus-Chan/
├── public/
│   ├── sprites/                      # Character expressions (base outfit)
│   │   ├── teaching.png
│   │   ├── excited.png
│   │   ├── frustrated.png
│   │   ├── thinking.png
│   │   ├── oops.png
│   │   ├── idle-sleeping.png
│   │   └── uniforms/                 # Outfit-specific sprite sets
│   │       ├── casual/               # Casual Hoodie (6 expressions)
│   │       ├── sailor/               # School Uniform (6 expressions)
│   │       ├── mage/                 # Magical Girl Debugger (6 expressions)
│   │       ├── hacker/               # Streetwear Hacker (6 expressions)
│   │       └── kimono/               # Legendary Kimono (6 expressions)
│   └── wallpapers/                   # Downloadable device wallpapers
│
├── src/
│   ├── components/
│   │   ├── character/PlusPlusChan.jsx  # Sprite renderer; reads spriteOverrides from equipped outfit
│   │   ├── layout/AppLayout.jsx        # Root layout; applies wallpaper + theme
│   │   ├── lesson/                     # LessonCanvas, CodeBlock, PhaseIndicator
│   │   └── ui/                         # Sidebar, BottomBar, XPDisplay, ProgressBar
│   │
│   ├── data/
│   │   ├── lessons/                  # 75 JSON lesson files (unit1–5, lessons 1–15)
│   │   ├── units/                    # 5 unit JSON files (id, title, lesson list)
│   │   └── shopItems.js              # All cosmetic definitions (outfits, wallpapers, downloadables)
│   │
│   ├── hooks/
│   │   ├── useLesson.js              # Lesson phase state machine
│   │   ├── useProgress.js            # Progress store bindings
│   │   └── useSound.js               # Sound effect hooks
│   │
│   ├── pages/
│   │   ├── Home.jsx                  # Dashboard / unit selection
│   │   ├── UnitPage.jsx              # Lesson list for a unit
│   │   ├── LessonPage.jsx            # The actual lesson experience
│   │   └── Shop.jsx                  # Cosmetics shop
│   │
│   ├── services/
│   │   ├── lessonService.js          # JSON loader + lesson data access
│   │   └── storageService.js         # localStorage adapter (Phase 2: swap for API)
│   │
│   ├── store/
│   │   ├── progressStore.js          # Zustand store: XP, level, outfits, progress
│   │   └── lessonStore.js            # Zustand store: active lesson state
│   │
│   └── utils/
│       ├── xpCalculator.js           # XP thresholds, level math, earned XP calculation
│       ├── patternMatcher.js         # Regex-based answer validation engine
│       └── cppHighlighter.js         # C++ syntax highlighting for code blocks
```

---

## Adding Content

### Adding a New Lesson

Lesson JSON files live at `src/data/lessons/unit{N}/{N}.{M}.json`. Each file follows this structure:

```json
{
  "id": "1.1",
  "title": "What is C++?",
  "xp": 10,
  "phases": [
    {
      "phase": 1,
      "title": "See It Work",
      "dialogue": "C++-chan's explanation text here",
      "code": "#include <iostream>\nint main() { ... }",
      "output": "Hello, Player!"
    },
    {
      "phase": 2,
      "title": "See It Break",
      "dialogue": "Here's what happens when...",
      "code": "#include <iostream>\nint main() { ... broken code ... }",
      "error": "error: expected ';' before '}'"
    },
    {
      "phase": 3,
      "title": "You Try",
      "dialogue": "Your turn!",
      "prompt": "What directive includes the standard I/O library in C++?",
      "answer": "#include <iostream>",
      "hint": "It starts with a # symbol.",
      "solution": "#include <iostream>"
    }
  ]
}
```

### Adding a New Outfit

1. Create a folder under `public/sprites/uniforms/<outfit-name>/`
2. Drop in 6 PNGs named: `teaching.png`, `idle.png`, `oops.png`, `thinking.png`, `frustrated.png`, `excited.png`
3. Add an entry to `src/data/shopItems.js` with `spriteOverrides` mapping each expression state to the correct file path
4. That's it — `PlusPlusChan.jsx` and `Shop.jsx` both read `spriteOverrides` automatically

### Developer Cheat Mode

In the Shop page, **triple-click the Shop title** to toggle the dev cheat:

- First triple-click → instantly sets XP to 9999 and level to 10 (unlocks everything)
- Second triple-click → resets XP and level back to 0 / 1

---

## Roadmap

### Phase 1 (Current) ✅

- All 75 lessons authored and published
- Full cosmetics system (5 outfits, 5 themes, 4 downloadable wallpapers)
- XP/leveling, shop, expressions, domain expansion
- localStorage persistence, no account required

### Phase 2 (Planned)

- PostgreSQL + Express API backend
- User accounts and cross-device sync
- Progress stored server-side (the store already has a `_resetForMigration` hook and storage adapter pattern ready for this)
- Instructor view: class-wide completion dashboards
- No frontend rewrite required — only the storage layer changes

---

## Credits & Assets

**Character Art**: PlusPlus-chan's sprites were generated using AI tools and hand-curated for expression consistency by [@albertofelix08](https://github.com/albertofelix08). All character designs are proprietary to Omega Mu Gamma Studio.

**Note**: As a free, open-source educational tool, we prioritized shipping a complete learning experience over commissioning custom art. If you're an artist interested in contributing official character designs, reach out — we'd love to collaborate.

---

## Part of Omega Mu Gamma Studio

PlusPlus-chan is the sixth tool from Omega Mu Gamma Studio — a student-built suite of open-source engineering and CS education tools from St. Xavier's Catholic College of Engineering.

| Tool | What it does |
| --- | --- |
| [SeeDS](https://see-ds.vercel.app) | 3D data structure visualizer with drag-and-drop Playground mode |
| [KMapX](https://kmapx.vercel.app) | Karnaugh map simplifier with don't-care support |
| [EG Suite](https://eg-suite.vercel.app) | 3D Engineering Graphics simulator for ME22201 |
| [GateLab](https://gatelab.vercel.app) | 2D digital logic schematic playground (CS22303) |
| [Java-chan](https://java-chan.vercel.app) | Anime-guided Java tutor for CS22301 |
| [ArchVisor](https://arch-visor.vercel.app) | An interactive Computer Organization & Architecture learning platform — built for CS22304 |
| [ThermOS](https://thermos-omg.vercel.app) | A collection of 5 interactive browser-based modules for ME22301 — Engineering Thermodynamics |
| **PlusPlus-chan** | Anime-guided C++ tutor for aspiring game developers — *this repo* |

---

## License

The **source code** for this project is released under the [MIT License](https://github.com/Omega-Mu-Gamma-Studio/PlusPlus-Chan/blob/main/LICENSE).

**The character art, sprites, and visual assets for PlusPlus-chan are proprietary.** They are not covered by the MIT License and may not be reproduced, redistributed, or used outside this project without explicit permission from Omega Mu Gamma Studio.

© 2026 Omega Mu Gamma Studio

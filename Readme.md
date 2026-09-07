# Dart Advisor | Modern Parity & Recovery Engine

An offline-first, voice-activated checkout and tactical setup calculator engineered for steel-tip and soft-tip darts. Built on modern PDC tournament match telemetry, expected-value (EV) conversion models, a $2^n$ parity hierarchy, and kinetic throwing-plane continuity.

---

## Why This Advisor Exists

Traditional checkout charts treat the dartboard as a flat arithmetic grid and assume mechanical perfection. In live match friction, darts drift into single wedges.

Standard pub charts leave players stranded when an aimed treble catches a fat single. Dart Advisor maps the board dynamically around **Fat-Bed Survivability** and the **Single-Miss Margin**:
- **Discrete Dart Inventory:** Select whether you have 3, 2, or 1 dart in hand. Options adapt instantly to rescue the turn if your first dart drifts.
- **Parity Optimization ($2^n$ Hierarchy):** When opponent pressure is low, routes prioritize primary tier doubles that degrade cleanly on an inside wire miss (D16, Tops, D8, D12, D4). Missing inside preserves setup equity without burning extra darts to adjust.
- **Accidental-Treble Bust Protection:** On single-dart setups (scores 41–59), the engine strictly routes to fat single beds where an accidental treble cannot bust your turn.
- **Kinetic Corridors:** Target sequences minimize lateral shoulder and elbow shifts across distant board quadrants, keeping your arm swing locked in natural vertical channels (e.g., the Top Corridor: 20, 1, 5, 12, 18).

---

## Route Legend

- **Best (Green):** Highest conversion EV based on fat-bed survivability, guaranteed double equity, and co-equal tournament baselines (e.g., Tops-favoring vs. D16-favoring branches).
- **Alt (Amber):** Valid alternative corridor or rhythm preferences, wire-blocking pivots, and calculated percentage plays.
- **Avoid (Red):** Outdated legacy match traps that strand the visit with 0% checkout probability on a single miss.
- **Setup (Purple):** Deliberate positioning darts engineered to leave premier parity finishes on your next visit when a checkout is mathematically impossible.

---

## How to Use

### Manual Keypad
1. Select your current dart count (**3 Darts**, **2 Darts**, or **1 Dart**).
2. Enter your score using the numeric keypad.
3. Review primary and secondary recommendation cards. Tap **Tactical Details ▾** to view error-branch recovery trees and mechanics.

### Voice Input (Hands-Free at the Oche)
1. Tap the **🎙 Voice** button.
2. Speak your count and score naturally:
   - *"2 darts, 76"*
   - *"82 with 3 darts"*
   - *"1 dart, 55"*
3. The engine parses the inventory, displays the out card, and automatically reads the optimal route aloud via speech synthesis.

*Note: In browsers without native voice recognition (such as desktop Firefox), clicking the Voice button opens a text simulation prompt that accepts your command and tests the speech synthesizer output.*

---

## Mobile Installation (Offline PWA)

This tool requires zero external servers and runs entirely in local device memory.

- **iOS (Safari):** Open your live GitHub Pages URL, tap the **Share** button (rectangle with an upward arrow), and select **"Add to Home Screen"**.
- **Android (Chrome):** Open the link, tap the three vertical dots menu, and select **"Install App"** or **"Add to Home screen"**.

Once saved, it launches in full screen without browser toolbars and functions flawlessly without Wi-Fi or cellular data.

---

## License & Intellectual Property

Copyright (c) 2026 John Phillip Amarante. All rights reserved.

- **Master Database & Tactical Content:** All written tactical notes, strategic recovery trees, and curated schemas are authored by John Phillip Amarante and licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).
- **Application Engine Source Code:** Free for personal, non-commercial, and educational oche practice. Commercial redistribution, white-labeling, scraping, or embedding into monetized scoring platforms without prior written authorization is strictly prohibited.
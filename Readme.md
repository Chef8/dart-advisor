# Dart Advisor | Match Play Tactics

An offline-first, voice-activated checkout and tactical setup calculator engineered for steel-tip and soft-tip darts. Built on modern PDC tournament match telemetry, expected-value (EV) conversion models, a 2ⁿ parity hierarchy, and kinetic throwing-plane continuity.

---

## Why This Advisor Exists

Traditional checkout charts treat the dartboard as a flat arithmetic grid and assume mechanical perfection. In live match friction, darts drift into single wedges.

Standard pub charts leave players stranded when an aimed treble catches a fat single. Dart Advisor maps the board dynamically around **Fat-Bed Survivability** and the **Single-Miss Margin**:
- **Discrete Dart Inventory:** Select whether you have 3, 2, or 1 dart in hand. Options adapt instantly to rescue the turn if your first dart drifts.
- **Parity Optimization (2ⁿ Hierarchy):** When opponent pressure is low, routes prioritize primary tier doubles that degrade cleanly on an inside wire miss (D16, Tops, D8, D12, D4). Missing inside preserves setup equity without burning extra darts to adjust.
- **The Tactical Tie-Breaker:** When high-pressure survivability clashes with parity, parity wins. If utilizing a Guaranteed Bull Pivot on an even number (e.g., 64) forces the resulting treble onto a dead-end odd double like D11, the engine abandons the bailout and routes to a treble that secures an elite even double.
- **Accidental-Treble Bust Protection:** On single-dart setups (scores 41–59), the engine strictly routes to fat single beds where an accidental treble cannot bust your turn.
- **Kinetic Corridors:** Target sequences minimize lateral shoulder and elbow shifts across distant board quadrants, keeping your arm swing locked in natural vertical channels (e.g., the Top Corridor: 20, 1, 5, 12, 18).

---

## Route Legend

- **Best (Green):** Highest conversion EV based on fat-bed survivability, guaranteed double equity, and co-equal tournament baselines (e.g., Tops-favoring vs. D16-favoring branches).
- **Survival:** Gritty, high-pressure bailout routes that guarantee a dart at the Bullseye on a single miss, sacrificing ideal setup math just to keep your turn alive when the opponent is on a finish.
- **Alt (Amber):** Valid alternative corridor or rhythm preferences, wire-blocking pivots, and calculated percentage plays.
- **Avoid (Red):** Outdated legacy match traps that strand the visit with 0% checkout probability on a single miss.
- **Setup (Purple):** Deliberate positioning darts engineered to leave premier parity finishes on your next visit when a checkout is mathematically impossible.

---

## How to Use

### Manual Keypad & Smart Modifiers
1. Enter your starting score and select your darts in hand.
2. **Smart Subtraction:** To deduct a throw, press a multiplier followed by the number. Pressing **T** then **20** automatically builds `- T20` in your history log, calculates the deduction, and decrements your dart count.
3. Review primary and secondary recommendation cards. Tap **Tactical Details ▾** to view error-branch recovery trees and mechanics.

### Voice Input (Hands-Free at the Oche)
1. Tap the **🎙 Voice** button.
2. **Set a Starting Score:** Speak your count and score naturally (e.g., *"82 with 3 darts"* or *"1 dart, 55"*).
3. **Continuous Match Play:** Once a score is active, simply speak what you hit. Saying *"Trip 20"*, *"Minus 18"*, or *"Bullseye"* will automatically subtract the value, drop your dart count, display the math history, and read the next optimal route aloud.

### Error Correction & History
* **Math Trail:** The display splits to show your active calculation (e.g., `110 - T20`) above your main score so you never lose track of a visit.
* **Undo:** If a voice command is misheard or you press the wrong key, tap **↶ Undo** to instantly revert your score, dart count, and history to the exact previous state.

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
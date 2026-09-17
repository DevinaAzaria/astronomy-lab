# Astronomy Lab

An interactive student laboratory for exploring astronomy through transparent, testable calculations.

> **Ringkasan Indonesia:** Astronomy Lab adalah laboratorium interaktif untuk mempelajari fisika bintang, jarak benda langit, dan gerak orbit. Bahasa Indonesia digunakan sebagai bahasa utama pada antarmuka, dengan istilah ilmiah Inggris sebagai padanan untuk membantu pembelajaran dan literasi internasional.

**Author:** Devina Azaria  
**Status:** v0.1.1 — bilingual interface release  
**Focus:** astronomy, physics, scientific computing, and research communication

## Why this project exists

Astronomy formulas are easier to understand when inputs can be changed and their effects observed immediately. Astronomy Lab turns selected equations into small experiments while keeping the assumptions, units, and source logic visible.

The project is part of Devina's long-term learning portfolio toward astronomy competitions and future study in mechanical and aerospace engineering.

## Experiments in v0.1

1. **Wien's displacement law** — estimates stellar surface temperature from peak wavelength.
2. **Distance modulus** — converts apparent and absolute magnitude into parsecs and light-years.
3. **Kepler's third law** — estimates orbital period from semi-major axis and stellar mass.

## Scientific assumptions

- Wien's law uses `b = 2.897771955 × 10⁶ nm·K`.
- Distance modulus ignores interstellar extinction.
- The Kepler model treats the orbiting body's mass as negligible relative to the star and uses AU, solar masses, and Julian years.
- Results are learning estimates, not substitutes for research-grade numerical software.

## Run locally

```bash
npm start
```

Open `http://localhost:4173`.

## Test

```bash
npm test
```

Tests compare the calculators with known reference cases such as an Earth-like orbit around a one-solar-mass star.

## Portfolio authorship

This repository is maintained as a learning record. Each substantial version should include Devina's own notes describing:

- the question investigated;
- the equation and assumptions;
- a hand-worked or independently checked example;
- what was learned;
- what remains uncertain or should improve.

Technical support and review may be provided through DevinaHQ, while authorship notes should accurately distinguish Devina's research, writing, design, and code contributions.

## Roadmap

See [`ROADMAP.md`](ROADMAP.md) for planned releases.

## License

MIT

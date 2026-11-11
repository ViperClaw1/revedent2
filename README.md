# Revedent AI UI Kit

A React UI kit for **Revedent.ai**, a premium, AI-driven dental billing company. Built with Tailwind CSS and Lucide React icons.

## Design System

**Typography:** Plus Jakarta Sans globally (Inter as a premium sans-serif fallback).

**Color palette:**

| Role | Color | Hex |
| --- | --- | --- |
| Background | Pure White | `#FFFFFF` |
| Primary text & dark sections | Deep Navy Blue | `#0B1120` |
| Secondary text | Slate-500 | `#64748B` |
| Primary buttons, accents & highlights | Electric Cyan | `#06B6D4` |

## Navigation

A fixed, glassmorphism top navigation bar:

- **Left:** the text logo `revedent.ai` in bold Navy, with `.ai` in Cyan.
- **Center:** links to Services, Pricing, About and Resources.
- **Right:** a **Book a Demo** button with a Cyan background, white text and slightly rounded corners (`rounded-md`). On hover it scales to 105% and gains a cyan glow shadow.
- **Mobile:** fully responsive, collapsing into a hamburger menu.

## Live App

A deployed version of the site is available online.

## Workflow

- **Ship faster:** iterate on the UI quickly and deploy changes as you go.
- **Stay in sync:** every change is committed straight to this repository.
- **Full ownership:** the code is yours. Push to `main` on GitHub to publish your changes.

## Development

You need Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

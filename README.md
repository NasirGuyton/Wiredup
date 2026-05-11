# Wiredup: WAV Vault

WAV Vault is a small React/Vite app for previewing WAV and audio files in the browser. A user can upload an audio file, view basic file information, and play the track while seeing a waveform preview.

## Purpose

This project was built for the Wiredup assignment. The goal was to connect development tools to live context so AI-assisted coding could use current documentation and real browser verification instead of relying only on stale memory.

## Protocol Servers Used

### Context7

Context7 was used for live third-party library documentation. In this project, it was used to check the current wavesurfer.js API while building the waveform preview feature.

### Chrome DevTools MCP

Chrome DevTools MCP was used as the second protocol server. It supports browser verification, screenshots, console inspection, and visual checks of the running app.

## Feature

The app includes:

- Audio/WAV file upload
- Waveform rendering with wavesurfer.js
- Play/pause control
- Track name display
- File size formatting
- Automated test coverage for file-size formatting

## Tech Stack

- React
- Vite
- wavesurfer.js
- Vitest
- MCP configuration with Context7 and Chrome DevTools

## Project Structure

```txt
wiredup/
├── .mcp.json
├── CLAUDE.md
├── README.md
├── evidence/
│   ├── live-docs-usage.md
│   └── hallucination-comparison.md
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── App.test.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Setup

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Build the project:

```bash
npm run build
```

## Evidence

Evidence for the assignment is stored in the `evidence/` folder.

- `evidence/live-docs-usage.md` explains how Context7 was used while building the wavesurfer.js feature.
- `evidence/hallucination-comparison.md` compares AI output with and without live documentation.

## What Changed My Workflow

Using Context7 helped reduce guessing around the wavesurfer.js API. Instead of relying only on remembered examples, I could verify the current setup pattern, loading behavior, event usage, and cleanup approach.

Using Chrome DevTools MCP helped connect the development process to the actual browser. This made it easier to verify that the UI loaded correctly and that the waveform preview could be checked visually.

## What's Next

Future improvements could include:

- Drag-and-drop upload
- Track tags or moods
- BPM/key fields
- Saving a local audio library
- Playlist organization

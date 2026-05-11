# Wiredup Development Instructions

This project is a WAV Vault: a small browser app for loading WAV/audio files and previewing them with a waveform.

## Required MCP Usage

Always use Context7 when working with third-party library APIs, especially:

- wavesurfer.js
- Vite
- React
- Vitest
- Testing Library

Use Chrome DevTools MCP to verify the app visually in the browser, capture screenshots, inspect console errors, and confirm the waveform/audio UI loads correctly.

## Workflow

1. Write or update a test first.
2. Use Context7 for current library docs.
3. Implement the feature.
4. Run tests.
5. Use Chrome DevTools MCP to verify the UI.
6. Document evidence in the evidence folder.
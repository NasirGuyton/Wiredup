# Live Docs Usage Evidence

## Project

Wiredup: WAV Vault

## Protocol Server Used

Context7

## Third-Party Library

wavesurfer.js

## Why Live Docs Were Needed

The app uses wavesurfer.js to create an audio waveform preview. Since third-party APIs can change over time, I used Context7 to check current library documentation instead of relying only on model memory.

## Prompt Used

```txt
Use Context7 to check the current wavesurfer.js documentation. I am building a React/Vite app that loads a local WAV file with URL.createObjectURL and displays a waveform. Show me the correct WaveSurfer.create setup, load method, cleanup pattern, and events for finishing playback.
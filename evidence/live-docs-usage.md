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
```

## Live Docs Evidence

I used Context7 to look up the current wavesurfer.js documentation while building the waveform preview feature.

The live docs helped confirm that the app should create a WaveSurfer instance with `WaveSurfer.create()`, load an audio source with `.load()`, and clean up the instance with `.destroy()` when the component changes or unmounts.

## Evidence Screenshot / Transcript

Paste a screenshot or transcript of the Context7 query here.

Example transcript:

```txt
Context7 query: wavesurfer.js React Vite local audio file WaveSurfer.create load destroy finish event

Result summary:
- Use WaveSurfer.create({ container, waveColor, progressColor, height })
- Load audio with wavesurfer.load(audioUrl)
- Listen for playback events like "finish"
- Destroy the instance during cleanup to prevent duplicate waveforms or memory leaks
```

## Code Written From Live Docs

The Context7 results influenced this part of the implementation:

```jsx
const wavesurfer = WaveSurfer.create({
  container: waveformRef.current,
  waveColor: "#8b8bff",
  progressColor: "#4f46e5",
  cursorColor: "#111827",
  height: 120,
  barWidth: 2,
  barGap: 1,
  responsive: true
});

wavesurfer.load(audioUrl);

wavesurfer.on("finish", () => {
  setIsPlaying(false);
});

wavesurferRef.current = wavesurfer;

return () => {
  wavesurfer.destroy();
};
```

## How Live Docs Changed the Workflow

Without live docs, I would have been guessing based on old examples or model memory. Context7 made the implementation more reliable because it gave current information about the library API.

The biggest improvement was confirming the cleanup pattern. Destroying the WaveSurfer instance prevents duplicate waveforms from appearing when a user uploads a new file.

## Result

The WAV Vault app now uses wavesurfer.js to load an uploaded audio file and render a waveform preview in the browser.

# Hallucination Comparison

## Goal

Compare AI output with and without live docs for the same third-party API task.

## API Task

Build a React/Vite component that loads a local WAV/audio file and displays a waveform using wavesurfer.js.

---

## Without Live Docs

### Prompt

```txt
Build a React component using wavesurfer.js that loads a local WAV file and displays a waveform.
```

### Output Summary

Without live docs, the AI answer was more likely to rely on remembered examples. It could still produce a general React component, but the answer was less grounded in the current wavesurfer.js API.

### Problems Found

- The answer could skip cleanup.
- The answer might not clearly explain when to destroy the WaveSurfer instance.
- The answer might rely on older examples.
- The answer might not explain how to load a browser-created object URL.

---

## With Context7 Live Docs

### Prompt

```txt
Use Context7 to check current wavesurfer.js docs. Build a React/Vite component that loads a local WAV file through URL.createObjectURL and displays a waveform. Include cleanup and playback finish handling.
```

### Output Summary

With Context7, the answer was more specific and better connected to the current library API. The implementation used `WaveSurfer.create()`, loaded the selected audio URL, listened for the `finish` event, and destroyed the instance during cleanup.

### Improvements

- Confirmed the current WaveSurfer setup pattern.
- Used `wavesurfer.load(audioUrl)` for the selected file URL.
- Included cleanup with `destroy()`.
- Included playback finish handling.
- Reduced guessing around third-party library behavior.

---

## Conclusion

Using Context7 improved the reliability of the implementation because the agent could check current library documentation before generating code. The output with live docs was more specific, safer, and easier to test.

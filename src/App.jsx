import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./App.css";

function formatFileSize(bytes) {
  if (!bytes) return "Unknown size";
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
}

export default function App() {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  const [file, setFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  function handleFileChange(event) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    const url = URL.createObjectURL(selectedFile);
    setFile(selectedFile);
    setAudioUrl(url);
    setIsPlaying(false);
  }

  useEffect(() => {
    if (!audioUrl || !waveformRef.current) return;

    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
    }

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
  }, [audioUrl]);

  function togglePlay() {
    if (!wavesurferRef.current) return;

    wavesurferRef.current.playPause();
    setIsPlaying((current) => !current);
  }

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">Wiredup Project</p>
        <h1>WAV Vault</h1>
        <p className="subtitle">
          Upload a WAV or audio file, preview it, and inspect the waveform.
          This project uses live documentation and browser verification through MCP tools.
        </p>
      </section>

      <section className="panel">
        <label className="uploadBox">
          <span>Choose WAV / audio file</span>
          <input
            type="file"
            accept="audio/*,.wav"
            onChange={handleFileChange}
            aria-label="Choose audio file"
          />
        </label>

        {file ? (
          <div className="trackCard">
            <div>
              <h2>{file.name}</h2>
              <p>{file.type || "Audio file"} · {formatFileSize(file.size)}</p>
            </div>

            <div ref={waveformRef} className="waveform" data-testid="waveform" />

            <button className="playButton" onClick={togglePlay}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        ) : (
          <div className="emptyState">
            <h2>No file loaded yet</h2>
            <p>Add a WAV file to generate a waveform preview.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export { formatFileSize };
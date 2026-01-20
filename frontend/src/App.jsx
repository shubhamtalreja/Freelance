import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [files, setFiles] = useState(null);

  const generate = async () => {
    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setFiles(data.files);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>AI App Builder</h2>

      <textarea
        rows={5}
        style={{ width: "100%" }}
        placeholder="Describe your app..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />

      <button onClick={generate}>Generate</button>

      {files && (
        <div>
          <h3>Generated Files</h3>
          {Object.keys(files).map(f => (
            <pre key={f}>
              <strong>{f}</strong>
              <code>{files[f]}</code>
            </pre>
          ))}
        </div>
      )}
    </div>
  );
}

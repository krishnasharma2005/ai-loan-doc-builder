import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DocumentPreview() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [text, setText] = useState("Generating...");

  useEffect(() => {
    fetch("http://localhost:8000/generate-document", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => setText(data.ai_clauses))
      .catch(() => setText("Error generating document"));
  }, [state]);

  return (
    <div className="page">
      <h2>Document Preview</h2>

      <textarea value={text} readOnly />

      <button
        className="primary-btn"
        onClick={() => navigate("/validation", { state: { text } })}
      >
        Validate Document
      </button>

      <button
        className="secondary-btn"
        onClick={() => window.open("http://localhost:8000/download")}
      >
        Download Document
      </button>
    </div>
  );
}

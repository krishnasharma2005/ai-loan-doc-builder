import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ValidationReport() {
  const { state } = useLocation();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: state.text })
    })
      .then(res => res.json())
      .then(data => setIssues(data.issues));
  }, [state]);

  return (
    <div className="page">
      <h2>Validation Report</h2>

      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((i, idx) => (
            <tr key={idx}>
              <td>{i.issue}</td>
              <td>{i.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

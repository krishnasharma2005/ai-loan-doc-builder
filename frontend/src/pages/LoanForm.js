import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoanForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    borrower: "",
    amount: "",
    tenure: "",
    interest_rate: "",
    collateral: "",
    jurisdiction: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/preview", { state: form });
  }

  return (
    <div className="page">
      <h2>Create Loan Document</h2>

      {Object.keys(form).map((field) => (
        <div className="form-group" key={field}>
          <label>{field.replace("_", " ")}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={`Enter ${field.replace("_", " ")}`}
          />
        </div>
      ))}

      <button className="primary-btn" onClick={handleSubmit}>
        Generate Document
      </button>
    </div>
  );
}

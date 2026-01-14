import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoanForm from "./pages/LoanForm";
import DocumentPreview from "./pages/DocumentPreview";
import ValidationReport from "./pages/ValidationReport";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        AI-Powered Loan Document Builder
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoanForm />} />
          <Route path="/preview" element={<DocumentPreview />} />
          <Route path="/validation" element={<ValidationReport />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

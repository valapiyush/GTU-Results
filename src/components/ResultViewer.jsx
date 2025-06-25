import React, { useState } from "react";
import "../assets/styles/ResultViewer.css"; // Make sure this file styles the layout well

const ResultViewer = () => {
  const [session, setSession] = useState("Current");
  const [selectedExam, setSelectedExam] = useState("");
  const [showSubjectName, setShowSubjectName] = useState(false);
  const [searched, setSearched] = useState(false);

  const examOptions = [
    "ME SEM 1 - Regular (DEC 2024) [Except ME (MECH) Armament Engineering Branch Code 94]",
  ];

  const studentDetails = {
    name: "Kuldip Parmar",
    enrollment: "240280769017",
    declaredOn: "05 Mar 2025",
    exam: "ME SEM 1 - Regular (DEC 2024)[Except ME (MECH) Armament Engineering Engineering Branch Code 94]",
    branch: "Civil Engineering(Transportation ENGINEERING)",
  };

  const resultData = [
    {
      subjectCode: "ME01000011",
      subjectName: "Research Methodology and IPR",
      grade: "BB",
      intGrade: " - ",
      absent: " - ",
      backlog: { E: "N", M: "N", I: "N", V: "N" },
    },
    {
      subjectCode: "ME01000021",
      subjectName: "Technical Reporting Writing",
      grade: "PS",
      intGrade: " - ",
      absent: " - ",
      backlog: { E: "N", M: "N", I: "N", V: "N" },
    },
    {
      subjectCode: "ME01069011",
      subjectName: "Traffic Engineering",
      grade: "BC",
      intGrade: " - ",
      absent: " - ",
      backlog: { E: "N", M: "N", I: "N", V: "N" },
    },
    {
      subjectCode: "ME01069021",
      subjectName: "Urban Transportation System Planning",
      grade: "BB",
      intGrade: " - ",
      absent: " - ",
      backlog: { E: "N", M: "N", I: "N", V: "N" },
    },
    {
      subjectCode: "ME01069041",
      subjectName: "Statistical Techniques for Data Analysis",
      grade: "BB",
      intGrade: " - ",
      absent: " - ",
      backlog: { E: "N", M: "N", I: "N", V: "N" },
    },
    {
      subjectCode: "ME01069061",
      subjectName: "ADVANCES IN PAYMENTS MATERIALS",
      grade: "BC",
      intGrade: " - ",
      absent: " - ",
      backlog: { E: "N", M: "N", I: "N", V: "N" },
    },
  ];

  const summary = {
    currentSemBacklog: 0,
    totalBacklog: 0,
    spi: 7.65,
    cpi: 7.65,
  };

  const handleSearch = () => {
    if (selectedExam) {
      setSearched(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="result-container">
      {/* Session Selector */}
      <div className="session-selector">
        <label className="label-bold">Select Session:</label>
        <label>
          <input
            type="radio"
            value="Current"
            checked={session === "Current"}
            onChange={() => setSession("Current")}
          />
          Current (W2024)
        </label>
        <label>
          <input
            type="radio"
            value="Archive"
            checked={session === "Archive"}
            onChange={() => setSession("Archive")}
          />
          Archive
        </label>
      </div>

      {/* Exam Dropdown */}
      <div className="exam-search-wrapper">
        <div className="exam-dropdown">
          <label className="label-bold">Select Exam:</label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
          >
            <option value="">-- Select an exam --</option>
            {examOptions.map((exam, idx) => (
              <option key={idx} value={exam}>
                {exam}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button onClick={handleSearch} className="btn-search">
          Search
        </button>
      </div>

      {/* Student Info Fields (always shown) */}
      <div className="student-details">
        <p>
          <strong>Name </strong> {searched ? studentDetails.name : ""}
        </p>
        <p>
          <strong>Enrollment No. </strong>{" "}
          {searched ? studentDetails.enrollment : ""}
        </p>
        <p>
          <strong>Declared On </strong>{" "}
          {searched ? studentDetails.declaredOn : ""}
        </p>
        <p>
          <strong>Exam </strong> {searched ? studentDetails.exam : ""}
        </p>
        <p>
          <strong>Branch </strong> {searched ? studentDetails.branch : ""}
        </p>
      </div>

      {/* Instruction Box */}
      {!searched && (
        <p className="instruction-box">
          Enter search criteria and hit "Search" button.
        </p>
      )}

      {/* Show rest of data only after Search */}
      {searched && (
        <>
          {/* Checkbox */}
          <div className="checkbox-wrapper">
            <label>
              <input
                type="checkbox"
                checked={showSubjectName}
                onChange={() => setShowSubjectName(!showSubjectName)}
              />
              Show Subject Name
            </label>
          </div>

          {/* Result Table */}
          <div className="table-wrapper">
            <table className="result-table">
              <thead>
                <tr>
                  <th rowSpan={2}>SUBJECT CODE</th>
                  {showSubjectName && <th rowSpan={2}>SUBJECT NAME</th>}
                  <th rowSpan={2}>GRADE</th>
                  <th rowSpan={2}>INT. GRADE</th>
                  <th rowSpan={2}>ABSENT</th>
                  <th colSpan={4}>BACKLOG</th>
                </tr>
                <tr>
                  {/* Empty cells to align with colspan structure */}
                  <th>E</th>
                  <th>M</th>
                  <th>I</th>
                  <th>V</th>
                </tr>
              </thead>
              <tbody>
                {resultData.map((res, idx) => (
                  <tr key={idx}>
                    <td>{res.subjectCode}</td>
                    {showSubjectName && <td>{res.subjectName}</td>}
                    <td>{res.grade}</td>
                    <td>{res.intGrade}</td>
                    <td>{res.absent}</td>
                    <td>{res.backlog.E}</td>
                    <td>{res.backlog.M}</td>
                    <td>{res.backlog.I}</td>
                    <td>{res.backlog.V}</td>
                  </tr>
                ))}
                <tr style={{ height: "20px" }}></tr>
                <tr className="summary-row">
                  <td style={{width: "20%"}}>
                    <span>Current Backlog:</span> {summary.currentSemBacklog}
                  </td>
                  <td>
                    <span>Total Backlog:</span> {summary.totalBacklog}
                  </td>
                  <td>
                    <span>SPI:</span> {summary.spi}
                  </td>
                  <td >
                    <span>CPI:</span> {summary.cpi}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="success-message">
            Congratulations! You have passed this exam.
          </p>

          <button onClick={handlePrint} className="button-print">
            Print Result
          </button>
        </>
      )}
    </div>
  );
};

export default ResultViewer;

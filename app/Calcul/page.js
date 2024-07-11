'use client'
import { useState } from 'react';
import './style.css';

const subjects = {
  math: ['Math', 'Science', 'Physics', 'Philosophy', 'French', 'Arabic', 'English', 'Sport', 'Informatics', 'Optional'],
  sc: ['Math', 'Science', 'Physics', 'Philosophy', 'French', 'Arabic', 'English', 'Sport', 'Informatics', 'Optional'],
  tech: ['Math', 'Physics', 'Philosophy', 'French', 'Arabic', 'English', 'Sport', 'Informatics', 'Tech', 'Optional'],
  info: ['Math', 'Algorithms', 'STI', 'Philosophy', 'French', 'Arabic', 'English', 'Sport', 'Informatics', 'Optional'],
  lettres: ['Arabic', 'Philosophy', 'History', 'French', 'English', 'Islamic', 'Informatics', 'Sport', 'Optional'],
  eco: ['Economics', 'Gestion', 'Math', 'History', 'French', 'Arabic', 'English', 'Informatics', 'Sport', 'Optional', 'Philosophy']
};

const coefficients = {
  math: { Math: 4, Science: 3, Physics: 4, Philosophy: 1, French: 1, Arabic: 1, English: 1, Sport: 1, Informatics: 1, Optional: 1 },
  sc: { Math: 3, Science: 4, Physics: 4, Philosophy: 1, French: 1, Arabic: 1, English: 1, Sport: 1, Informatics: 1, Optional: 1 },
  tech: { Math: 3,  Physics: 4, Philosophy: 1, French: 1, Arabic: 1, English: 1, Sport: 1, Informatics: 1, Tech: 4, Optional: 1 },
  info: { Math: 4, Algorithms: 4, STI: 4, Philosophy: 2, French: 2, Arabic: 4, English: 2, Sport: 1, Informatics: 6, Optional: 1 },
  lettres: { Arabic: 4, Philosophy: 4, History: 3, French: 3, English: 2, Islamic: 1, Informatics: 1, Sport: 1, Optional: 1 },
  eco: { Economics: 4, Gestion: 4, Math: 1, History: 3, French: 1, Arabic: 1, English: 1, Informatics: 1, Sport: 1, Optional: 1, Philosophy: 1 }
};

export default function Home() {
  const [section, setSection] = useState('');
  const [grades, setGrades] = useState({});
  const [average, setAverage] = useState(null);
  const [fg, setFg] = useState(null);

  const handleSectionChange = (e) => {
    setSection(e.target.value);
    setGrades({});
    setAverage(null);
    setFg(null);
  };

  const handleGradeChange = (subject, value) => {
    setGrades({
      ...grades,
      [subject]: parseFloat(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let total = 0;
    let coefTotal = 0;

    for (const subject of subjects[section]) {
      if (grades[subject] !== undefined) {
        total += grades[subject] * coefficients[section][subject];
        coefTotal += coefficients[section][subject];
      }
    }

    const avg = total / coefTotal;
    setAverage(avg.toFixed(2));

    // Final grade (FG) calculation - this is just an example and may vary
    const fg = (avg * 2 + 0.3 * (grades['Optional'] || 0)) / 2.3;
    setFg(fg.toFixed(2));
  };

  return (
    <div className="containero">
      <h1 className="titlo">Bac Score Calculator</h1>
      <form className="formo" onSubmit={handleSubmit}>
        <label className="labelo">
          Section:
          <select className="selecto" value={section} onChange={handleSectionChange}>
            <option value="">Select a section</option>
            <option value="math">Math</option>
            <option value="sc">Science</option>
            <option value="tech">Tech</option>
            <option value="info">Informatics</option>
            <option value="lettres">Lettres</option>
            <option value="eco">Economics</option>
          </select>
        </label>
        <div className="subjectso">
          {section && subjects[section].map((subject) => (
            <div key={subject} className="subjecto-input">
              <label className="subjecto-label">{subject}:</label>
              <input
                className="subjecto-input-field"
                type="number"
                value={grades[subject] || ''}
                onChange={(e) => handleGradeChange(subject, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button className="submito-button" type="submit">Calculate Score</button>
      </form>
      {average !== null && (
        <div className="results">
          <h2 className="results-title">Results</h2>
          <p className="average">Average: {average}</p>
          <p className="final-grade">Final Grade (FG): {fg}</p>
        </div>
      )}
    </div>
  );
}

'use client';
import React, { useState, useEffect } from 'react';
import './style.css';
import FilterComponent from '../components/FilterComponent';

const Unis = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const res = await fetch('/universities.json');
      const data = await res.json();
      setUniversities(data);
      setFilteredUniversities(data);
    };
    fetchUniversities();
  }, []);

  const handleFilterChange = (filters) => {
    const filtered = universities.filter((uni) => {
      return (
        (filters.typeBac ? uni.critere.includes(filters.typeBac) : true) &&
        (filters.university ? uni.university.includes(filters.university) : true) &&
        (filters.etablissement ? uni.etablissement.includes(filters.etablissement) : true) &&
        (filters.filliere ? uni.filliere.includes(filters.filliere) : true) &&
        uni.score >= filters.scoreRange[0] &&
        uni.score <= filters.scoreRange[1]
      );
    });
    setFilteredUniversities(filtered);
  };

  return (
    <div>
      <h1>University List</h1>
      <FilterComponent onFilterChange={handleFilterChange} />
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Filliere</th>
            <th>University</th>
            <th>Etablissement</th>
            <th>Gouvernorat</th>
            <th>Critere</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredUniversities.map((uni) => (
            <tr key={uni.code}>
              <td>{uni.code}</td>
              <td>{uni.filliere}</td>
              <td>{uni.university}</td>
              <td>{uni.etablissement}</td>
              <td>{uni.gouvernorat}</td>
              <td>{uni.critere}</td>
              <td>{uni.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Unis;

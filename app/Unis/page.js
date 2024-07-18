// pages/unis.js
'use client'
import React, { useState, useEffect } from 'react';
import FilterComponent from '../components/FilterComponent';
import "./style.css"

const Unis = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await fetch('/api/unis');
        const data = await res.json();
        console.log('Fetched universities:', data); // Debugging log
        setUniversities(data);
        setFilteredUniversities(data); // Initialize filtered data
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
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
      <h1 className='page-title'>University List</h1>
      <FilterComponent onFilterChange={handleFilterChange} />
      <table className="unis-table">
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

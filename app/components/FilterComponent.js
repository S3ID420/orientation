import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Range } from 'react-range';
import './FilterComponent.css'; // Import your CSS file for custom styling

const FilterComponent = ({ onFilterChange }) => {
  const [typeBac, setTypeBac] = useState('');
  const [university, setUniversity] = useState('');
  const [etablissement, setEtablissement] = useState('');
  const [filliere, setFilliere] = useState('');
  const [scoreRange, setScoreRange] = useState([0, 100]);

  const handleFilterChange = () => {
    onFilterChange({ typeBac, university, etablissement, filliere, scoreRange });
  };

  return (
    <Form className="filter-form">
      <Row className="mb-3">
        <Col md={3}>
          <FormGroup className="mb-3">
            <Label for="typeBac">Type of Bac</Label>
            <Input
              type="select"
              name="typeBac"
              id="typeBac"
              value={typeBac}
              onChange={(e) => setTypeBac(e.target.value)}
              className="custom-input"
            >
              <option value="">Select Type of Bac</option>
              <option value="Bac Sc">Bac Sc</option>
              <option value="Bac Math">Bac Math</option>
              <option value="Bac Eco">Bac Eco</option>
              <option value="Bac Lettres">Bac Lettres</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup className="mb-3">
            <Label for="university">University</Label>
            <Input
              type="select"
              name="university"
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="custom-input"
            >
              <option value="">Select University</option>
              <option value="Uni of Carthage">Uni of Carthage</option>
              <option value="Uni of Tunis">Uni of Tunis</option>
              <option value="Uni of Monastir">Uni of Monastir</option>
              <option value="Uni of Sfax">Uni of Sfax</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup className="mb-3">
            <Label for="etablissement">Etablissement</Label>
            <Input
              type="text"
              name="etablissement"
              id="etablissement"
              value={etablissement}
              onChange={(e) => setEtablissement(e.target.value)}
              className="custom-input"
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup className="mb-3">
            <Label for="filliere">Filliere</Label>
            <Input
              type="text"
              name="filliere"
              id="filliere"
              value={filliere}
              onChange={(e) => setFilliere(e.target.value)}
              className="custom-input"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <FormGroup>
            <Label for="scoreRange">Score Range</Label>
            <Range
              step={1}
              min={0}
              max={100}
              values={scoreRange}
              onChange={(values) => setScoreRange(values)}
              renderTrack={({ props, children }) => (
                <div className="range-track" {...props}>
                  {children}
                  <div
                    className="range-highlight"
                    style={{
                      left: `${(100 * scoreRange[0]) / 100}%`,
                      width: `${(100 * (scoreRange[1] - scoreRange[0])) / 100}%`
                    }}
                  />
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className={`range-thumb ${isDragged ? 'is-dragged' : ''}`}
                />
              )}
            />
            <div className="range-values">
              <span className="range-label">{scoreRange[0]}</span> -{' '}
              <span className="range-label">{scoreRange[1]}</span>
            </div>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center">
          <Button color="primary" className="apply-button" onClick={handleFilterChange}>
            Apply Filters
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterComponent;

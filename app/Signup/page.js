'use client'
import React, { useState } from 'react';
import './style.css';
import Link from 'next/link';

const Signup = () => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    niveau: '',
    section: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleNiveauChange = (e) => {
    const niveau = e.target.value;
    setForm({
      ...form,
      niveau,
      section: '', // Reset section when niveau changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add your form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="niveau">Niveau scolaire</label>
            <select
              id="niveau"
              name="niveau"
              value={form.niveau}
              onChange={handleNiveauChange}
              required
            >
              <option value="">Sélectionnez le niveau</option>
              <option value="1ere">1ère</option>
              <option value="2eme">2ème</option>
              <option value="3eme">3ème</option>
              <option value="bac">Bac</option>
            </select>
          </div>
          {form.niveau && form.niveau !== '1ere' && (
            <div className="form-group">
              <label htmlFor="section">Section</label>
              <select
                id="section"
                name="section"
                value={form.section}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez la section</option>
                {form.niveau === '2eme' ? (
                  <>
                    <option value="info">Info</option>
                    <option value="eco">Eco</option>
                    <option value="lettre">Lettre</option>
                    <option value="sc">Sc</option>
                  </>
                ) : (
                  <>
                    <option value="math">Math</option>
                    <option value="sc">Sc</option>
                    <option value="info">Info</option>
                    <option value="tech">Tech</option>
                    <option value="lettre">Lettre</option>
                    <option value="eco">Eco</option>
                  </>
                )}
              </select>
            </div>
          )}
          <div className="button-container">
            <button type="submit" className="submit-button">Creer un compte</button>
          </div>
        </form>
        <div className="login-option">
          <p>Vous avez déjà un compte? <Link href="/Login">Connectez-vous ici</Link></p>
        </div>
      </div>
      <div className="image-container">
        <img src="/OBJECTS.png" alt="Objects" className="responsive-image" />
      </div>
    </div>
  );
};

export default Signup;

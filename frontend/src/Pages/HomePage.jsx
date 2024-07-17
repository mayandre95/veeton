import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function HomePage() {
    const url = "http://127.0.0.1:8000/";

  const navigate = useNavigate(); 

  const createSession = async () => {
    try {

      const response = await axios.post(url + 'create/');
      console.log('Session créée avec succès:', response.data);
      navigate('/session'); 
    } catch (error) {
      console.error('Erreur lors de la création de la session:', error);
    }
  };

  return (
    <div>
      <h1>Bienvenue sur VeetChat</h1>
      <div>
        <button onClick={createSession}>Créer une session</button>
      </div> 
    </div>
  );

}

export default HomePage;


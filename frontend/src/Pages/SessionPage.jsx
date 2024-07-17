import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SessionPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    try {
      // Envoyer le message à votre backend Django
      await axios.post('URL_de_votre_API_pour_envoyer_un_message', { message });
      // Réinitialiser le champ de saisie après l'envoi du message
      setMessage('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
    }
  };

  useEffect(() => {
    // Récupérer les messages de la session depuis votre backend Django
    const fetchMessages = async () => {
      try {
        const response = await axios.get('URL_de_votre_API_pour_récupérer_les_messages_de_la_session');
        setMessages(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des messages:', error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Session en cours</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </div>
  );
}

export default SessionPage;

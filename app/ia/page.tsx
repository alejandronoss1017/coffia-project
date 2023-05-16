'use client';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

const AIPage = () => {
  const makeAPICall = async (question: string) => {
    const response = await fetch('/api/coffia-gpt', {
      method: 'POST',
      body: JSON.stringify({ question: question })
    });

    const data = await response.json();
    
    setAnswer(data.iaResponse);
  };

  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Preguntale a nuestra IA</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Div de botones con preguntas */}
          <div className="flex flex-col space-y-4">
            <Button
              text="¿Qué café es más consumido?"
              onClick={() => makeAPICall('¿Qué café es más consumido?')}
            />
            <Button
              text="¿Cuáles son los beneficios del café?"
              onClick={() =>
                makeAPICall('¿Cuáles son los beneficios del café?')
              }
            />
            <Button
              text="¿Cómo se cosecha el café?"
              onClick={() => makeAPICall('¿Cómo se cosecha el café?')}
            />
            <Button
              text="¿Qué acompaña mejor el café?"
              onClick={() => makeAPICall('¿Qué acompaña mejor el café?')}
            />
            <Button
              text="¿Como puedo hacer un Latte?"
              onClick={() => makeAPICall('¿Como puedo hacer un Latte?')}
            />
          </div>
          {/* Div de poner tus propias preguntas */}
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={message}
              placeholder="Escribe tu pregunta"
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <Button text="Enviar" onClick={() => makeAPICall(message)} />
          </div>
          {/* Div de respuestas de la IA */}
          <div className="bg-gray-100 p-4 rounded">
            <p>Respuesta:</p>
            <div>
              <p>{answer}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIPage;

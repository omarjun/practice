import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Components/Card';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const getQuote = async () => {
    try {
      const response = await axios.get(
        `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
      );
      setQuote(response.data[0]);
    } catch (error) {
      console.log('Error while fetching the Quotes', error.message);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Random Quote</h1>
      <Card quote={quote} onSave={saveQuote} />
      <button
        onClick={getQuote}
        className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        New Quote
      </button>

      <h2 className="text-2xl font-semibold mt-10">Saved Quotes</h2>
      
      <ul className="mt-5 w-full max-w-md">
        {savedQuotes.map((savedQuote, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded p-3 mb-3 border-l-4 border-blue-500"
          >
            {savedQuote}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

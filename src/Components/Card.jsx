import React from 'react';

const Card = ({ quote, onSave }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 max-w-md mx-auto">
      <p className="text-xl font-medium text-gray-800 mb-4">{quote}</p>
      <button
        onClick={onSave}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Save to List
      </button>
    </div>
  );
}

export default Card;

import React from 'react';

const PersonCard = ({ person }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '200px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={person.image}
        alt={person.name}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <h3>{person.name}</h3>
      <p>{person.role}</p>
      <h4>Famous Movies:</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {person.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonCard;
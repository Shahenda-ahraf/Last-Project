import React, { useState, useEffect } from 'react';
import PersonCard from './Cardpepole';
import peopleData from './Pepole.json';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // استيراد البيانات من ملف JSON
    setPeople(peopleData);
  }, []);

  return (
    <div>
      <h1>Famous People in Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default People;
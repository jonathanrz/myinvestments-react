import React from 'react';

const isSearched = searchTerm => item => !searchTerm || item.name.includes(searchTerm);

const template = (investments, pattern) => (
  <div className="table">
    {investments.filter(isSearched(pattern)).map(item => (
      <div key={item._id} className="table-row">
        <span style={{ width: '40%' }}>{item.name}</span>
        <span style={{ width: '20%' }}>{item.type}</span>
        <span style={{ width: '20%' }}>{item.holder}</span>
        <span style={{ width: '20%' }}>{item.due_date}</span>
      </div>
    ))}
  </div>
);

export default template;

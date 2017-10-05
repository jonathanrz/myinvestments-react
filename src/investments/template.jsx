import React from 'react';
import { Route, Link } from 'react-router-dom';
import Investment from './investment';

const isSearched = searchTerm => item => !searchTerm || item.name.includes(searchTerm);

const template = (investments, pattern) => (
  <div>
    <div className="table">
      {investments.filter(isSearched(pattern)).map(item => (
        <div key={item._id} className="table-row">
          <span style={{ width: '40%' }}>
            <Link to={`/${item._id}`}>{item.name}</Link>
          </span>
          <span style={{ width: '20%' }}>{item.type}</span>
          <span style={{ width: '20%' }}>{item.holder}</span>
          <span style={{ width: '20%' }}>{item.due_date}</span>
        </div>
      ))}
    </div>

    <Route path={'/:investmentId'} component={Investment} />
  </div>
);

export default template;

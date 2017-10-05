import React from 'react';
import Search from '../common/search';
import Investments from '../investments';

const template = (searchTerm, investments, onSearchChange) => (
  <div className="page">
    <div className="interactions">
      <Search value={searchTerm} onChange={onSearchChange}>
        Search
      </Search>
    </div>
    {investments && (
      <Investments investments={investments} pattern={searchTerm} onDismiss={this.onDismiss} />
    )}
  </div>
);

export default template;

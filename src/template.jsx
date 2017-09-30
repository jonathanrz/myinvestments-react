import React from 'react';
import Search from './search';
import Table from './table';

const template = (searchTerm, investments) => (
  <div className="page">
    <div className="interactions">
      <Search value={searchTerm} onChange={this.onSearchChange}>
        Search
      </Search>
    </div>
    {investments && (
      <Table investments={investments} pattern={searchTerm} onDismiss={this.onDismiss} />
    )}
  </div>
);

export default template;

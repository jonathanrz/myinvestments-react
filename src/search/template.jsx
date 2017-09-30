import React from 'react';

const template = (value, onChange, children) => (
  <form>
    {children} <input type="text" value={value} onChange={onChange} />
  </form>
);

export default template;

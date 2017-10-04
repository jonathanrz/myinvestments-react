import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Table from './';

const investments = [
  {
    _id: '58f3e5c4524b280012157c09',
    holder: 'Bradesco',
    type: 'Tesouro Direto',
    name: 'Tesouro IPCA+ 2019 (NTNB Princ)',
    due_date: '2019-05-15T00:00:00.000Z',
  },
  {
    _id: '58f3f5956cd3fb0012769c75',
    holder: 'Bradesco',
    type: 'Tesouro Direto',
    name: 'Tesouro IPCA+ com Juros Semestrais 2026 (NTNB)',
    due_date: '2026-08-15T00:00:00.000Z',
  },
];

describe('App', () => {
  test('snapshots', () => {
    const component = renderer.create(<Table investments={investments} pattern={''} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(<Table investments={investments} pattern={''} />);
    expect(element.find('.table-row').length).toBe(2);
  });
});

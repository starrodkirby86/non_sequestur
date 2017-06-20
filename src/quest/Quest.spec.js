import React from 'react';
import Quest from './Quest';
import { render } from 'enzyme';

// Used as common boilerplate between all test cases
const setup = props => {
  const component = render(
    <Quest {...props} />
  );

  return {
    component: component
  };
};

describe('<Quest />', () => {
  it('Should render Quest and Difficulty properly', () => {
    const { component } = setup({
      id: '0',
      title: 'foo',
      type: 'Hunting',
      difficulty: 8,
    });
    expect(component.find('.questMeta').text()).toBe('Hunting Quest, Difficulty: 8');
  });
});
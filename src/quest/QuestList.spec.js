import React from 'react';
import QuestList from './QuestList';
import { render } from 'enzyme';

// Used as common boilerplate between all test cases
const setup = props => {
  const component = render(
    <QuestList {...props} />
  );

  return {
    component: component
  };
};

describe('<QuestList />', () => {
  it('Should render two quests', () => {
    const {component} = setup({
      quests: [{
        id: '0',
        title: 'foo',
      },
        {
          id: '1',
          title: 'baz',
        },
      ],
    });
    expect(component.find('.quest')).toHaveLength(2);
  });

  it('Should have some random amount of quests', () => {
    const maxQuests = Math.floor(Math.random() * 32) + 1;
    const quests = [];
    for (let i = 0; i < maxQuests; i++)
      quests.push({
        id: i.toString(),
        title: 'foo',
      });
    const {component} = setup({
      quests: quests,
    });
    expect(component.find('.quest')).toHaveLength(maxQuests);
  });

});
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ListComponent } from '../components/ListComponent/ListComponent';
import { seeder } from '../models/storage/seeder.storage';
import { screen } from '@testing-library/react';
import events from '../models/storage/events.storage';

Enzyme.configure({ adapter: new Adapter() });
beforeAll(() => {
  seeder();
});

describe('Test for text: <ListComponent/>', () => {
  it('should check if <ListComponent/> is rendered', () => {
    const wrapper = shallow(<ListComponent />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should have a length of 10 seeded list items', async () => {
    const wrapper = shallow(<ListComponent />);
    expect(wrapper.find('ListItem').length).toBe(10);
  });
});

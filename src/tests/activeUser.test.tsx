import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ActiveUser } from '../components/ActiveUser/ActiveUser';
import { seeder } from '../database/seeder.database';

Enzyme.configure({ adapter: new Adapter() });
beforeAll(() => {
  seeder();
});

describe('Test for <ActiveUser/>', () => {
  it('should exist an active user component', async () => {
    const wrapper = shallow(<ActiveUser />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should have a name text', async () => {
    const wrapper = mount(<ActiveUser />);
    expect(/You: [\S\s]+/gi.test(wrapper.find('h3').text())).toBe(true);
  });
  it('should have an email text', async () => {
    const wrapper = mount(<ActiveUser />);
    expect(/Email: [\S\s]+/gi.test(wrapper.find('h4').text())).toBe(true);
  });
});

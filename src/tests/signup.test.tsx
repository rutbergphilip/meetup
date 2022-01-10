import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { List } from '../components/List/List';
import { seeder } from '../database/seeder.database';
import events from '../database/events.database';
import { getActiveUser } from '../utils/misc.utils';

Enzyme.configure({ adapter: new Adapter() });
beforeAll(() => {
  seeder();
});

describe('Test signup button functionality', () => {
  it('should be false as the user is not yet signed up', async () => {
    const wrapper = mount(<List />);
    const signupButton = wrapper.find('button').first();
    const activeUser = getActiveUser();
    const eventId = signupButton.props().id;

    expect(events.get(eventId as string)?.isSignedUp(activeUser)).toBe(false);
  });
  it('should first be false, then sign up the user and be true', async () => {
    const wrapper = mount(<List />);
    const signupButton = wrapper.find('button').first();
    const activeUser = getActiveUser();
    const eventId = signupButton.props().id;

    expect(events.get(eventId as string)?.isSignedUp(activeUser)).toBe(false);
    signupButton.simulate('click');
    expect(events.get(eventId as string)?.isSignedUp(activeUser)).toBe(true);
  });
});

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ListComponent } from '../components/ListComponent/ListComponent';
import { seeder } from '../database/seeder.database';
import { ExpandModal } from '../components/ListComponent/ExpandModal/ExpandModal';
import { IEventCard } from '../interfaces/eventcomponent.interface';
import Modal from 'react-modal';

Enzyme.configure({ adapter: new Adapter() });
beforeAll(() => {
  seeder();
});

describe('Test modal rendering', () => {
  it('should exist', async () => {
    const listItem = mount(<ListComponent />)
      .find('ListItem')
      .first();
    const { id, title, date, signups, comments } =
      listItem.props() as IEventCard;
    const wrapper = shallow(
      <ExpandModal
        id={id}
        title={title}
        date={date}
        signups={signups}
        comments={comments}
      />
    );
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
  it('should open when link is clicked', async () => {
    const listItem = mount(<ListComponent />)
      .find('ListItem')
      .first();
    const { id, title, date, signups, comments } =
      listItem.props() as IEventCard;
    const wrapper = shallow(
      <ExpandModal
        id={id}
        title={title}
        date={date}
        signups={signups}
        comments={comments}
      />
    );

    expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
    wrapper.find('p').first().simulate('click');
    expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
  });
  it('should close when close button is clicked', async () => {
    const listItem = mount(<ListComponent />)
      .find('ListItem')
      .first();
    const { id, title, date, signups, comments } =
      listItem.props() as IEventCard;
    const wrapper = shallow(
      <ExpandModal
        id={id}
        title={title}
        date={date}
        signups={signups}
        comments={comments}
      />
    );

    expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
    wrapper.find('p').first().simulate('click');
    expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
    wrapper.find('button').first().simulate('click');
    expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
  });
});

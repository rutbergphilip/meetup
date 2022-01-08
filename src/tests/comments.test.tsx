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
  it('should have no comments', async () => {
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

    expect(wrapper.find('#comments').children()).toHaveLength(0);
  });
  it('should have one comment after posted', async () => {
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

    wrapper.find('p').first().simulate('click');

    expect(wrapper.find('#comments').children()).toHaveLength(0);

    wrapper.find('input').simulate('change', { target: { value: 'test' } });
    const sendButton = wrapper.find('button').last();

    sendButton.simulate('click');

    expect(wrapper.find('#comments').children()).toHaveLength(1);
    expect(
      wrapper.find('#comments').children().first().text().endsWith('test')
    ).toBe(true);
  });
});

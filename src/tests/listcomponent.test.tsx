import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ListComponent } from '../components/ListComponent/ListComponent';
import { screen } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

describe('Test for text: <ListComponent/>', () => {
  it('should check if <ListComponent/> is rendered', () => {
    const wrapper = shallow(<ListComponent />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should have a length of 10 seeded list items', async () => {
    const wrapper = mount(<ListComponent />);
    // await wrapper.instance().componentDidMount();
    expect(wrapper.find('li').length).toBe(10);
  });
});

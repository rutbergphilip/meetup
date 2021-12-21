import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ListComponent } from '../components/ListComponent/ListComponent';
import { seeder } from '../models/storage/seeder.storage';
import { findByText, getByText, render, screen } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });
beforeAll(() => {
  seeder();
});

describe('Test for <ListComponent/>', () => {
  it('should check if <ListComponent/> is rendered', () => {
    const wrapper = shallow(<ListComponent />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should have a length of 10 seeded list items', async () => {
    const wrapper = shallow(<ListComponent />);
    expect(wrapper.find('ListItem').length).toBe(10);
  });
  it('should have buttons for signups', async () => {
    render(<ListComponent />);
    const buttons = screen.getAllByRole('button', {
      name: /signup-button/gi,
    });
    expect(buttons).toBeTruthy();
  });
  it('should have a title', async () => {
    render(<ListComponent />);
    const titles = screen.getAllByRole('heading', { name: /\s\S/gi });
    expect(titles).toBeTruthy();
  });
  //   it('should have dates in chronological order', async () => {
  //     const wrapper = shallow(<ListComponent />);
  //     const dates = wrapper.find('ListItem').map((item) => item.prop('date'));
  //     expect(dates).toEqual(
  //       expect.arrayContaining([
  //         expect.objectContaining({
  //           getTime: expect.any(Function),
  //         }),
  //       ])
  //     );
  //   });
});

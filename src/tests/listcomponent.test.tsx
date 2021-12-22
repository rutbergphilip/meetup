import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ListComponent } from '../components/ListComponent/ListComponent';
import { seeder } from '../database/seeder.database';
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
  it('should be in chronological order', async () => {
    render(<ListComponent />);
    const dates = screen.getAllByText(/\d\d\d\d-\d\d-\d\d/i);
    const dateValues = dates.map(
      (date) => new Date(date.textContent as string)
    );
    const isSorted = (array: Date[]) =>
      array.every(
        (_, index: number) =>
          index === array.length - 1 || array[index] < array[index + 1]
      );

    expect(isSorted(dateValues)).toBe(true);
  });
});

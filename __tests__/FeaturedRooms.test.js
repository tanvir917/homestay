import React from 'react'
import TestRenderer from 'react-test-renderer';
import FeaturedRooms from '../src/Components/FeaturedRooms/FeaturedRooms';


it('renders correctly', () => {
  const tree = TestRenderer
    .create(<FeaturedRooms />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react'
import TestRenderer from 'react-test-renderer';
import Hero from '../src/Components/Hero/Hero';


it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Hero />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
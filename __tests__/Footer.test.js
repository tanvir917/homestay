import React from 'react'
import TestRenderer from 'react-test-renderer';
import Footer from '../src/Components/Footer/Footer';


it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Footer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react'
import TestRenderer from 'react-test-renderer';
import Services from '../src/Components/Services/Services';


it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Services />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
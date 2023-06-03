import React from 'react'
import TestRenderer from 'react-test-renderer';
import Link from '../src/Components/Link/Link';

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
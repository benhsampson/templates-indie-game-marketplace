import React from 'react';
import { render } from 'react-dom';

import App from '../../ui/layout/App';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});

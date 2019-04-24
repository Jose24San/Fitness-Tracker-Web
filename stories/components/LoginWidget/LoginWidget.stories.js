import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginWidget from '../../../src/containers/Authentication/LoginWidget';


storiesOf( 'Login Widget', module )
  .add( 'standard', () => <LoginWidget /> );

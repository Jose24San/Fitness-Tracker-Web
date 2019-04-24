import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '../../../src/components/TextField/TextField';


storiesOf( 'Text Field', module )
  .add( 'standard', () => (
    <TextField
      label="My Label"
      value="test"
    />
  ) )
  .add( 'password', () => (
    <TextField
      label="My Label"
      value="test"
      type="password"
      onChange={ value => console.log( value ) }
    />
  ) );

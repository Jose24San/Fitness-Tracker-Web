import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryButton from '../../../src/components/Buttons/PrimaryButton';


storiesOf( 'Buttons', module )
  .add( 'standard', () => (
    <PrimaryButton>
      Primary
    </PrimaryButton>
  ) )
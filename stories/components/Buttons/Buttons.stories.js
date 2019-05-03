import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryButton from '../../../src/components/Buttons/PrimaryButton';
import withLoading from '../../../src/components/Loading/Loading';

const WrappedButton = withLoading( PrimaryButton );

storiesOf( 'Buttons', module )
  .add( 'standard', () => (
    <PrimaryButton>
      Primary
    </PrimaryButton>
  ) )
  .add( 'HOC example', () => (
    <WrappedButton loading={ false } test="test prop"> Button </WrappedButton>
  ) )
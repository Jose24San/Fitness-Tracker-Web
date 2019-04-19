import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Header } from '../../../src/components/Header';

storiesOf( 'Header', module )
  .addDecorator( StoryRouter() )
  .add( 'standard', () => <Header /> );

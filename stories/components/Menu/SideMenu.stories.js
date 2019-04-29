import React from 'react';
import { storiesOf } from '@storybook/react';
import SideMenu from '../../../src/components/Menu/SideMenu';

storiesOf( 'Menu', module )
  .add( 'side menu', () => (
    <SideMenu />
  ) )
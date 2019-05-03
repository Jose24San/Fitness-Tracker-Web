import React from 'react';
import { storiesOf } from '@storybook/react';
import DashboardCard from '../../../src/components/Cards/DashboardCard';
import globalTheme from '../../../src/config/theme';

storiesOf( 'Cards', module )
  .add( 'Dashboard card', () => (
    <div
      style={ {
        background: globalTheme.GREY_BACKGROUND,
        height: 500,
        padding: 60,
      } }
    >
      <DashboardCard>
        <p>My content</p>
      </DashboardCard>
    </div>
  ) );

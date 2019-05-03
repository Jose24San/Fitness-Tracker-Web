import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from '../../../src/components/Accordion/Accordion';
import globalTheme from '../../../src/config/theme';


storiesOf( 'Accordion', module )
  .add( 'standard', () => (
    <div
      style={ {
        background: globalTheme.MIDDLE_DARK_BACKGROUND,
        height: 500,
        padding: 60,
      } }
    >
      <Accordion title="Accordion title">
        <p>Standard accordion</p>
      </Accordion>
    </div>

  ) );

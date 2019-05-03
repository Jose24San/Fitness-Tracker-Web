import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../../../src/components/Table/Table';
import globalTheme from '../../../src/config/theme';
import { rowHeaders, rowData } from '../../../src/config/volumeRecommendation';


storiesOf( 'Table', module )
  .add( 'standard', () => (
    <div
      style={ {
        background: globalTheme.GREY_BACKGROUND,
        // height: 500,
        padding: 60,
      } }
    >
      <Table rowHeaders={ rowHeaders } rowData={ rowData } hightLightColor={ globalTheme.ACCENT_BLUE } />
    </div>
  ) );

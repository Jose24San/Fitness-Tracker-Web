import React from 'react';
import { storiesOf } from '@storybook/react';
import globalTheme from '../../../src/config/theme';
import DashboardCard from '../../../src/components/Cards/DashboardCard';
import LineChart from '../../../src/components/Charts/LineChart';


storiesOf( 'Charts', module )
  .add( 'Line Chart', () => (
    <div
      style={ {
        background: globalTheme.GREY_BACKGROUND,
        padding: 60,
      } }
    >
      <div>
        <DashboardCard>
          <LineChart
            containerStyling={ { backgroundColor: globalTheme.ACCENT_BLUE } }
            data={ [
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ] }
            // horizontalLabel="Body Weight"
            // verticalLabel="Time"
          />
        </DashboardCard>
      </div>
    </div>
  ) );

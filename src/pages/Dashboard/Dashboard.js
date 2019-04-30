import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAuthenticaton, getPreferredWeightMeasurement, getUser } from '../../selectors/user';
import { showRedirectMessage } from '../../actions/routing';
import SideMenu from '../../components/Menu/SideMenu';
import { DashboardCard } from '../../components/Cards';
import globalTheme from '../../config/theme';
import LineChart from '../../components/Charts/LineChart';
import { getSpecifiedBodyLogs } from '../../selectors/bodyLogs';
import { CHART_FORMATS } from '../../constants/bodyLogs';

const styles = {
  mainArea: {
    width: '100%',
    background: globalTheme.MIDDLE_DARK_BACKGROUND,
    padding: 40,
  },
  white: {
    color: globalTheme.LIGHT_FONT,
  },
  header: {
    color: globalTheme.LIGHT_FONT,
    marginBottom: '-15',
  },
};


class Dashboard extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    console.log('Dashboard props: ', this.props);
    const { bodyLogs, measurement } = this.props;
    // if ( !this.props.isLoggedIn ) {
    //   // console.warn('redirect from dashboard to login page');
    //   this.props.redirected( 'Dashboard' );
    //   return <Redirect to="/login" />;
    // }

    return (
      <div style={ { display: 'flex' } }>
        <SideMenu />
        <div style={ styles.mainArea }>
          <p style={ styles.white }>Dashboard Control Panel</p>
          <DashboardCard>
            <h2 style={ styles.header }>
              Weight Over Time in { measurement }
            </h2>
            <LineChart
              containerStyling={ { height: 330 } }
              // data={ [
              //   { x: 1, y: 2 },
              //   { x: 2, y: 3 },
              //   { x: 3, y: 5 },
              //   { x: 4, y: 4 },
              //   { x: 5, y: 7 },
              // ] }
              data={ bodyLogs.data }
              horizontalLabel=""
              verticalLabel=""
              maxDomain={ bodyLogs.maxDomainValue }
              minDomain={ bodyLogs.minDomainValue }
            />
          </DashboardCard>
        </div>
      </div>

    );
  }
}


Dashboard.propTypes = {
  isLoggedIn: PropTypes.bool,
  redirected: PropTypes.func,
  bodyLogs: PropTypes.array,
};

const mapStatetoProps = state => {
  return {
    isLoggedIn: getAuthenticaton( state ),
    user: getUser( state ),
    // bodyLogs: getBodyLogsByAmount( state, 10 ),
    bodyLogs: getSpecifiedBodyLogs( state, { amount: 10, metric: 'weight', format: CHART_FORMATS.LINE_CHART } ),
    measurement: getPreferredWeightMeasurement( state ),
  };
};

const mapDispatchToProps = dispatch => ( {
  redirected: page => dispatch( showRedirectMessage( page ) ),
} );

export default connect( mapStatetoProps, mapDispatchToProps )( Dashboard );

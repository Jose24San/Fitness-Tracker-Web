import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import globalTheme from '../../config/theme';
import Accordion from '../../components/Accordion/Accordion';
import { rowHeaders, rowData } from '../../config/volumeRecommendation';
import Table from '../../components/Table/Table';

const styles = {
  mainArea: {
    width: '100%',
    background: globalTheme.GREY_BACKGROUND,
    padding: 40,
  },
};

class Build extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  query = () => {
    firebase.firestore().collection( 'completedExercises' )
      .where( 'userId', '==', 'JbdTa6ILGLRLecFAoWUB3sp9Stu1' )
      .where( 'exercise', '==', 'Barbell Curl' )
      // .where( 'names', 'array-contains', 'Barbell Curl' )
      // .orderBy( 'created', 'desc' )
      .get()
      .then( querySnapshot => {
        const data = [];

        querySnapshot.forEach( doc => {
          // console.log( 'doc: ', doc );
          // console.log( 'data', doc.data() );

          data.push(
            {
              id: doc.id,
              ...doc.data(),
            },
          );
        } );

        console.log( 'data results: ', data );
      } );

  };

  render() {
    return (
      <div style={ styles.mainArea }>
        <p>Build page</p>
        <button onClick={ this.query }>Fire</button>
        <Accordion title="Volume Recommendations Per Week">
          <Table rowData={ rowData } rowHeaders={ rowHeaders } />
        </Accordion>
      </div>
    );
  }
}

Build.propTypes = {};

export default Build;

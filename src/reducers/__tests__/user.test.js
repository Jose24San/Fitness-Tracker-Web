import user from '../user';
import { createUserSuccessAction, loginSuccessAction } from '../../actions/authentication';
import { receivedUserDocumentAction } from '../../actions/user';


const initialState = {
  preferredWeightMeasurement: 'lbs',
};

describe( 'user reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( user( initialState, {} ) ).toEqual( initialState );
  } );

  it( 'should store user info in respone to LOGIN_SUCCESS event', () => {
    const action = loginSuccessAction( {
      email: 'test',
      id: 1,
    } );
    const expectedState = { email: 'test', id: 1, preferredWeightMeasurement: 'lbs' };

    expect( user( initialState, action ) ).toEqual( expectedState );
  } );

  it( 'should store user info in response to CREATE_USER_SUCCESS event', () => {
    const action = createUserSuccessAction( { email: 1, uid: 2 } );
    const expectedState = {
      email: 1, uid: 2, preferredWeightMeasurement: 'lbs',
    };

    expect( user( initialState, action ) ).toEqual( expectedState );
  } );

  it( 'should store user document information in response to RECEIVED_USER_DOCUMENT event', () => {
    const action = receivedUserDocumentAction( { test: 1, testing: 2 } );
    const expectedState = {
      preferredWeightMeasurement: 'lbs',
      test: 1,
      testing: 2,
    };

    expect( user( initialState, action ) ).toEqual( expectedState );
  } );

} );

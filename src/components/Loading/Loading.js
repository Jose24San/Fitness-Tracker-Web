import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const withLoading = WrappedComponent => {
  return class wrapper extends React.Component {

    render() {
      console.log('with loading working');
      console.log('props: ', this.props);
      if ( this.props.loading ) {
        return <CircularProgress />
      }

      return <WrappedComponent>{ this.props.children }</WrappedComponent>;
    }
  };
};

export default withLoading;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, StatusBar} from 'react-native';
// import {theme} from '../styles/core.styles';
import OverlayModal from '../components/OverlayModal/OverlayModal.component';
import {setNetworkStatus, resetNetworkBar} from '../state/actions/index';
import {ConnectedRoutes} from '../routes/router';
import OfflineBar from '../components/OfflineBar/OfflineBar.component';
// import {setCurrentLanguage} from '../state/thunks/common.thunks.js';
// import {get, storageKeys} from '../utils/storage.util';
import SplashScreen from 'react-native-splash-screen';

const mapStateToProps = (state) => {
  const {showSpinner, networkStatus, highlightText} = state;
  return {
    showSpinner,
    networkStatus,
    // currentLanguage,
    highlightText
  };
};

const mapDispatchToProps = (dispatch) => ({
  // initializeLanguage: () => get(storageKeys['LANGUAGE']).
  //   then((currentLanguageId) => {
  //     dispatch(setCurrentLanguage(currentLanguageId || 'id'));
  //   }),
  resetNetworkBar: () => dispatch(resetNetworkBar()),
  setNetworkStatus: (isConnected) => dispatch(setNetworkStatus(isConnected))
});

class App extends React.Component {

  static propTypes = {
    // currentLanguage: PropTypes.object,
    highlightText: PropTypes.bool,
    // initializeLanguage: PropTypes.func,
    networkStatus: PropTypes.object,
    resetNetworkBar: PropTypes.func,
    setNetworkStatus: PropTypes.func,
    showSpinner: PropTypes.bool
  }

  componentWillMount () {
    // this.props.initializeLanguage();
  }

  componentDidMount () {
    SplashScreen.hide();
  }

  render () {
    const {highlightText, networkStatus, resetNetworkBar, setNetworkStatus, showSpinner} = this.props;
    return (
      <View style={{flexGrow: 1}}>
        <OfflineBar
          highlightText={highlightText}
          networkStatus={networkStatus}
          resetNetworkBar={resetNetworkBar}
          setNetworkStatus={setNetworkStatus}
        />
        <StatusBar barStyle={'dark-content'} backgroundColor={'#CCC'} />
        <ConnectedRoutes />
        <OverlayModal showSpinner={showSpinner} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import {NavigationActions} from 'react-navigation';

export function goBack () {
  return (dispatch) => dispatch(NavigationActions.back());
}

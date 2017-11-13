import {connect} from 'react-redux';
import Boarding from '../pages/Boarding/Boarding.page';
import {getLeaderBoard as getLeaderBoardThunk} from '../state/thunks/leaderBoard.thunk';

const mapDispatchToProps = (dispatch) => ({
  getLeaderBoard: () => dispatch(getLeaderBoardThunk()),
  closeModal: () => dispatch({type: 'HIDE_SPINNER'})
});

export default connect(null, mapDispatchToProps)(Boarding);

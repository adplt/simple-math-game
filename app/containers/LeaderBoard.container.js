import {connect} from 'react-redux';
import LeaderBoard from '../pages/LeaderBoard/LeaderBoard.page';
import {goBack as goBackThunk} from '../state/thunks/common.thunk';
import {getLeaderBoard as getLeaderBoardThunk} from '../state/thunks/leaderBoard.thunk';

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBackThunk()),
  getLeaderBoard: () => dispatch(getLeaderBoardThunk())
});

export default connect(null, mapDispatchToProps)(LeaderBoard);

import {connect} from 'react-redux';
import LeaderBoard from '../pages/LeaderBoard/LeaderBoard.page';
import {goBack as goBackThunk} from '../state/thunks/common.thunk';

const mapStateToProps = (state) => ({
  leaderBoard: state.leaderBoard,
  showSpinner: state.spinner,
});

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBackThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

import {connect} from 'react-redux';
import Game from '../pages/Game/Game.page';
import {updateScore as updateScoreThunk, resetToBoard as resetToBoardThunk} from '../state/thunks/game.thunk';

const mapStateToProps = (state) => ({
  score: state.score,
  highScore: state.highScore,
  showSpinner: state.spinner,
  showModal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  updateScore: (score) => dispatch(updateScoreThunk(score)),
  resetToBoard: () => dispatch(resetToBoardThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

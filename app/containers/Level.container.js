import {connect} from 'react-redux';
import Level from '../pages/Level/Level.page';
import {goBack as goBackThunk} from '../state/thunks/common.thunk';

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBackThunk())
});

export default connect(null, mapDispatchToProps)(Level);

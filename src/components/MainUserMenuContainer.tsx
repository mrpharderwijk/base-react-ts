import * as React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../AppState.model';
import MainUserMenu from './MainUserMenu';
import { MainUserMenuContainerProps } from './MainUserMenuContainer.model';
import { FIXME } from '../models/FixMe.model';
import { getLoggedInState } from '../redux/AuthActions';

class MainUserMenuContainer extends React.Component<MainUserMenuContainerProps, { isSubMenuActive: boolean }> {
  componentDidMount() {
    const { getLoggedInStateConnect } = this.props;
    getLoggedInStateConnect();
  }

  public render() {
    const { isLoggedIn } = this.props;
    return <MainUserMenu isLoggedIn={isLoggedIn} />;
  }
}

/**
 * Grab the characters from the store and make them availabel on props
 */
const mapStateToProps = (store: AppState) => {
  return {
    isLoggedIn: store.authState.isLoggedIn,
  };
};

/**
 * Sets dispatcher
 */
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, FIXME, AnyAction>) => {
  return {
    getLoggedInStateConnect: () => {
      dispatch(getLoggedInState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainUserMenuContainer);

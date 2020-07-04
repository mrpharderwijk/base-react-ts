import * as React from 'react';
import { connect } from 'react-redux';
import MainHeader from './MainHeader';
import { AppStateInterface } from '../AppStateInterface';
import { FIXME } from '../models/FixMe.model';
import { getAllNavigationItems } from '../redux/UiActions';
import { MainHeaderContainerPropsInterface } from './MainHeaderContainerPropsInterface';
import { getLoggedInState } from '../redux/AuthActions';

class MainHeaderContainer extends React.Component<MainHeaderContainerPropsInterface> {
  componentDidMount() {
    const { getLoggedInStateConnect, getNavigationItems } = this.props;
    getNavigationItems();
    getLoggedInStateConnect();
  }

  public render() {
    const { navItems, isLoggedIn } = this.props;
    return <MainHeader fixedAfter={1} isLoggedIn={isLoggedIn} navItems={navItems} />;
  }
}

/**
 * Grab the characters from the store and make them availabel on props
 */
const mapStateToProps = (store: AppStateInterface) => {
  return {
    isLoggedIn: store.authState.isLoggedIn,
    navItems: store.uiState.navItems,
  };
};

/**
 * Sets dispatcher
 * FIXME: dispatch type was ThunkDispatch<IAppState, FIXME, AnyAction>
 */
const mapDispatchToProps = (dispatch: FIXME) => {
  return {
    getLoggedInStateConnect: () => dispatch(getLoggedInState()),
    getNavigationItems: () => dispatch(getAllNavigationItems(dispatch)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer);
/* eslint-enable */

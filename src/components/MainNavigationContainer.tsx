import * as React from 'react';
import { connect } from 'react-redux';
import MainNavigation from './MainNavigation';
import { MainNavigationContainerProps } from './MainNavigationContainer.model';
import { getAllNavigationItems } from '../redux/UiActions';
import { FIXME } from '../models/FixMe.model';
import { AppState } from '../AppState.model';

class MainNavigationContainer extends React.Component<MainNavigationContainerProps> {
  componentDidMount() {
    const { getNavigationItems } = this.props;
    getNavigationItems();
  }

  public render() {
    const { navItems } = this.props;
    return <MainNavigation navItems={navItems} />;
  }
}

/**
 * Grab the characters from the store and make them availabel on props
 */
const mapStateToProps = (store: AppState) => {
  return {
    navItems: store.uiState.navItems,
  };
};

/**
 * Sets dispatcher
 * FIXME: dispatch type was ThunkDispatch<IAppState, FIXME, AnyAction>
 */
const mapDispatchToProps = (dispatch: FIXME) => {
  return {
    getNavigationItems: () => dispatch(getAllNavigationItems(dispatch)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigationContainer);

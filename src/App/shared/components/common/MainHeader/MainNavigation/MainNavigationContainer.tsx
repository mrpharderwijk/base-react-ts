import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import MainNavigation from './MainNavigation';
import { IMainNavigationContainerProps } from './IMainNavigationContainerProps';
import { IAppState } from '../../../../models/IAppState';
import getAllNavigationItems from '../../../../redux/actions/UiActions';
import { FIXME } from '../../../../models/TFixMe';

class MainNavigationContainer extends React.Component<IMainNavigationContainerProps> {
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
const mapStateToProps = (store: IAppState) => {
  return {
    navItems: store.uiState.navItems,
  };
};

/**
 * Sets dispatcher
 */
const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, FIXME, AnyAction>) => {
  return {
    getNavigationItems: () => {
      dispatch(getAllNavigationItems());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigationContainer);

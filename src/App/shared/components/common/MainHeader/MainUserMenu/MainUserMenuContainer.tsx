import * as React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { IAppState } from '../../../../models/IAppState';
import MainUserMenu from './MainUserMenu';
import { IMainUserMenuContainerProps } from './IMainUserMenuContainerProps';
import { FIXME } from '../../../../models/TFixMe';
import getLoggedInState from '../../../../redux/actions/AuthActionTypes';

class MainUserMenuContainer extends React.Component<IMainUserMenuContainerProps, { isSubMenuActive: boolean }> {
  constructor(props: IMainUserMenuContainerProps) {
    super(props);

    this.state = {
      isSubMenuActive: false,
    };
  }

  componentDidMount() {
    const { getLoggedInStateConnect } = this.props;
    getLoggedInStateConnect();
  }

  /**
   * Toggles the submenu
   */
  toggleSubMenu() {
    this.setState((prevState) => ({
      isSubMenuActive: !prevState.isSubMenuActive,
    }));
  }

  public render() {
    const { isLoggedIn } = this.props;
    const { isSubMenuActive } = this.state;
    return (
      <MainUserMenu isLoggedIn={isLoggedIn} isSubMenuActive={isSubMenuActive} toggleSubMenu={this.toggleSubMenu} />
    );
  }
}

/**
 * Grab the characters from the store and make them availabel on props
 */
const mapStateToProps = (store: IAppState) => {
  return {
    isLoggedIn: store.authState.isLoggedIn,
  };
};

/**
 * Sets dispatcher
 */
const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, FIXME, AnyAction>) => {
  return {
    getLoggedInStateConnect: () => {
      dispatch(getLoggedInState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainUserMenuContainer);

import * as React from 'react';
import MainHeader from './MainHeader';

class MainHeaderContainer extends React.Component<{ fixedAfter?: number }, { isFixed: boolean }> {
  constructor(props: { fixedAfter?: number }) {
    super(props);

    const { fixedAfter } = this.props;

    this.state = { isFixed: window.pageYOffset >= (fixedAfter || 0) };
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  /**
   * Update state when scrolling
   */
  listenToScroll = (): void => {
    const { fixedAfter } = this.props;
    this.setState({
      isFixed: window.pageYOffset >= (fixedAfter || 0),
    });
  };

  public render(): React.ReactElement {
    const { isFixed } = this.state;
    return <MainHeader isFixed={isFixed} />;
  }
}

export default MainHeaderContainer;

import React, { Component } from 'react';

interface ScrollToTopState {
  is_visible: boolean;
}

export default class ScrollToTop extends Component<{}, ScrollToTopState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.toggleVisibility.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.toggleVisibility.bind(this));
  }

  toggleVisibility() {
    const { is_visible } = this.state;
    if (window.pageYOffset > 600 && !is_visible) {
      this.setState({ is_visible: true });
    } else if (window.pageYOffset <= 600 && is_visible) {
      this.setState({ is_visible: false });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div id='scroll-to-top' className={is_visible ? 'init' : ''}>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <i className=""></i>
          </div>
        )}
      </div>
    );
  }
}

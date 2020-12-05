/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from "react";
import ReactGA from "react-ga";

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      const {
        location: { pathname: page },
      } = this.props;
      trackPage(page);
    }

    // eslint-disable-next-line camelcase
    componentDidUpdate(nextProps) {
      const {
        location: { pathname: currentPage },
      } = this.props;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
}

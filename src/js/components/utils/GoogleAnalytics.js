import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { Route, useLocation } from 'react-router-dom'

import env from '../../constants';

if (env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(env.REACT_APP_GA_TRACKING_ID)
}

const GoogleAnalytics = () => {
  let routerLocation = useLocation();

  useEffect(() => {
    const page = routerLocation.pathname + routerLocation.search
    const { location } = window;
    ReactGA.set({
      page,
      location: `${location.origin}${page}`,
      ...this.props.options
    })
    ReactGA.pageview(page)
  }, [routerLocation])
}

export default GoogleAnalytics;

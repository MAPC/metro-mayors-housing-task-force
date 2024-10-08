const env = {
  development: {},

  production: {
    REACT_APP_GA_TRACKING_ID: "UA-5547782-37",
  },
};

export default env[process.env.NODE_ENV];

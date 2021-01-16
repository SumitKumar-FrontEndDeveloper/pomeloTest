const config = {
  dev: process.env.LOCAL,
  stage: process.env.STAGE,
  production: process.env.PRODUCTION,
  gaTrackingCode: process.env.GA_TRACKING_CODE,
  gaAddress: process.env.GA_SCRIPT_URL,
  loginRedirect: {
    dev: process.env.REDIRECT_LOGIN_DEV,
    stage: process.env.REDIRECT_LOGIN_STAGE,
    production: process.env.REDIRECT_LOGIN_PRODUCTION,
  },
  endpoint: {
    API_END_POINT: "https://api.nytimes.com/svc/news/v3/content/",
    GET_ARTICLE_LIST: "all/all.json",
  },
  defaultDelivery: {},
  serviceList: [],
};
module.exports = config;

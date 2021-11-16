const config = {
  s3: {
    REGION: process.env.REACT_APP_AWS_S3_REGION,
    BUCKET: process.env.REACT_APP_AWS_S3_BUCKET
  },
  apiGateway: {
    REGION: process.env.REACT_APP_AWS_APIGATEWAY_REGION,
    URL: process.env.REACT_APP_AWS_APIGATEWAY_URL
  },
  cognito: {
    REGION: process.env.REACT_APP_AWS_COGNITO_REGION,
    USER_POOL_ID: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_AWS_COGNITO_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID
  },
  social: {
    FB: {
      APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID,
      APP_SECRET: process.env.REACT_APP_FACEBOOK_APP_SECRET,
      API_VERSION: process.env.REACT_APP_FACEBOOK_API_VERSION
    }
  }
}

export default config

/**
 *
 * aws cognito-idp sign-up --region us-east-1 --client-id 7pomsjd06121c11ivdknnc3ern --username guardian2093@gmail.com --password password123
    aws cognito-idp admin-confirm-sign-up --region us-east-1 --user-pool-id us-east-1_OBg5w0Ds8 --username guardian2093@gmail.com
 */

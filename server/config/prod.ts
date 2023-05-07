// production environment credentials

interface Config {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
  cookieKey: string;
}

const config: Config = {
  googleClientID: '',
  googleClientSecret: '',
  mongoURI: '',
  cookieKey: '',
};

export default config;

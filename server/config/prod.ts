// production environment credentials

interface Config {
  googleClientID: string;
  googleClientSecret: string;
  mongoURI: string;
}

const config: Config = {
  googleClientID: '',
  googleClientSecret: '',
  mongoURI: '',
};

export default config;

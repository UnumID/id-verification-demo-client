import { SaasEnvironment } from '@unumid/web-sdk-react';

interface Config {
  verifierServerUrl: string;
  issuerServerUrl: string;
  backendServerUrl: string;
  deeplinkServerUrl: string;
  proveAuthUrl: string;
  proveIssuerDid: string;
  proveEnabled: boolean;
  hvIssuerDid: string;
  env: SaasEnvironment;
  apiKey: string;
  logRocketId: string;
  holderAppUuid: string;
}

const {
  REACT_APP_VERIFIER_SERVER_URL = '',
  REACT_APP_ISSUER_SERVER_URL = '',
  REACT_APP_BACKEND_SERVER_URL = '',
  REACT_APP_DEEPLINK_SERVER_URL = '',
  REACT_APP_PROVE_AUTH_URL = '',
  REACT_APP_PROVE_ISSUER_DID = '',
  REACT_APP_PROVE_ENABLED = '',
  REACT_APP_HV_ISSUER_DID = '',
  REACT_APP_ENV = 'development',
  REACT_APP_API_KEY = '',
  REACT_APP_LOG_ROCKET_ID = '',
  REACT_APP_HOLDER_APP_UUID = ''
} = process.env;

export const config: Config = {
  verifierServerUrl: REACT_APP_VERIFIER_SERVER_URL,
  issuerServerUrl: REACT_APP_ISSUER_SERVER_URL,
  backendServerUrl: REACT_APP_BACKEND_SERVER_URL,
  deeplinkServerUrl: REACT_APP_DEEPLINK_SERVER_URL,
  proveAuthUrl: REACT_APP_PROVE_AUTH_URL,
  proveIssuerDid: REACT_APP_PROVE_ISSUER_DID,
  proveEnabled: REACT_APP_PROVE_ENABLED === 'true',
  hvIssuerDid: REACT_APP_HV_ISSUER_DID,
  env: REACT_APP_ENV as SaasEnvironment,
  apiKey: REACT_APP_API_KEY,
  logRocketId: REACT_APP_LOG_ROCKET_ID,
  holderAppUuid: REACT_APP_HOLDER_APP_UUID
};

console.log('config', config);

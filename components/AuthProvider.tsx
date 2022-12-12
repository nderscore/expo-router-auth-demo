import {
  makeRedirectUri,
  useAuthRequest
} from 'expo-auth-session';
import { Platform } from 'expo-modules-core';
import * as WebBrowser from 'expo-web-browser';
import {
  createContext,
  useContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

WebBrowser.maybeCompleteAuthSession();

const useProxy = Platform.select({ web: false, default: true });

const redirectUri = makeRedirectUri({
  path: '/callback',
  scheme: 'acme',
  preferLocalhost: true,
  useProxy,
});

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/settings/connections/applications/${
    process.env.GITHUB_OAUTH_CLIENTID}`,
};

export type AuthenticationState = {
  credentials: string | null;
  isAuthenticated: boolean;
  login: () => void;
};

const ctx = createContext<AuthenticationState | undefined>(undefined);
ctx.displayName = 'AuthenticationContext';

export const useAuthentication = () => {
  const c = useContext(ctx);
  if (c === undefined) {
    throw new Error(
      'useAuthentication was called before context value was initialized.'
    );
  }
  return c;
};

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [credentials, setCredentials] =
    useState<string | null>(null);
  const [_request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.GITHUB_OAUTH_CLIENTID,
      scopes: ['identity'],
      redirectUri,
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      setCredentials(response.params.code);
    }
  }, [response]);

  return (
    <ctx.Provider
      value={{
        credentials,
        get isAuthenticated() {
          return credentials !== null;
        },
        login: () => {
          promptAsync({ useProxy });
        },
      }}
    >
      {children}
    </ctx.Provider>
  );
};

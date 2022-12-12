# Expo Router + Expo Auth Session

This repository demonstrates a bug that occurs when using Expo Router
with Expo Auth Session.

On Android devices, the user is sent to a 404 page after successfully completing
authentication.

## Steps

1. Clone repo, install deps (`yarn`)
1. Copy `.env.example` to `.env` and fill in a valid GitHub OAuth app client ID
(or rewrite `components/AuthProvider.tsx` to use a different OAuth provider)
1. Start dev server `yarn start`
1. Test auth flow on Android emulator/device

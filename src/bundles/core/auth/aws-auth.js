import { Auth } from 'aws-amplify';

export const doSignIn = (username, password) => Auth.signIn(username, password);

export const doSingUp = (username, password, attributes) => Auth.signUp(username, password, attributes);

export const doSignOut = () => Auth.signOut();
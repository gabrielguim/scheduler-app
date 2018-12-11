import { auth } from './FirebaseInit'
import StoreService from '../store/StoreService';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => {
  StoreService.clearTokenAndUID();
  return auth.signOut();
}

// Delete
export const doDeleteUser = () => {
  return auth.currentUser.delete()
}
  
// Sign Up
export const doCheckToken = () =>
  auth.currentUser.getIdToken();
import config from './FirebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';

if (!firebase.apps.length) {
  firebase.initializeApp(config.firKey);
}

const auth = firebase.auth();

export {
  auth
};
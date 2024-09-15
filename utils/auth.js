import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const imageId = document.querySelector('#landing-image');
  const loginBtn = document.querySelector('#login-form-container');
  loginBtn.innerHTML = '';
  imageId.parentNode.removeChild(imageId);
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
  window.location.reload();
};
export { signIn, signOut };

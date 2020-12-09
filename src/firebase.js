
import firebase from 'firebase/app';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
	// Your web app's Firebase configuration

	apiKey: "AIzaSyC4wyBOPPIKL0Lf6gchxefNgeax7qjQ6PU",
	authDomain: "gardenexchange-c6440.firebaseapp.com",
	projectId: "gardenexchange-c6440",
	storageBucket: "gardenexchange-c6440.appspot.com",
	messagingSenderId: "698544724268",
	appId: "1:698544724268:web:ecdc576100b9a755a53489"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

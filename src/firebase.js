
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




	//apiKey: "AIzaSyDosUAKULgC77M3jOuZSfH8lTZRmBjEAqo",
	//authDomain: "plant-exchange-c0d9e.firebaseapp.com",
	//projectId: "plant-exchange-c0d9e",
	//storageBucket: "plant-exchange-c0d9e.appspot.com",
	//messagingSenderId: "944562513318",
	//appId: "1:944562513318:web:caa8937db83c6d624e9b67"



};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

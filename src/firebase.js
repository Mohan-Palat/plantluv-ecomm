
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


	//apiKey: "AIzaSyAA-U9si_nYrhGsDDhNumAqySIIBCgA7qs",
	//authDomain: "plantexchangeinc-3f590.firebaseapp.com",
	//projectId: "plantexchangeinc-3f590",
	//storageBucket: "plantexchangeinc-3f590.appspot.com",
	//messagingSenderId: "984048944294",
	//appId: "1:984048944294:web:818af334c3b5af898be067"
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

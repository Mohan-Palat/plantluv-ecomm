import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import posts from './posts';
const rootReducer = combineReducers( {
	user: userReducer,
	search: searchReducer,
	cart: cartReducer,
	drawer: drawerReducer,
	posts
} );

export default rootReducer;

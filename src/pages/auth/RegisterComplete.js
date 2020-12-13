import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { createOrUpdateUser } from "../../functions/auth";
import { useDispatch, useSelector } from "react-redux";

const RegisterComplete = ( { history } ) => {
	const [ email, setEmail ] = useState( "" );
	const [ password, setPassword ] = useState( "" );
	let dispatch = useDispatch();
	const { user } = useSelector( ( state ) => ( { ...state } ) );

	useEffect( () => {
		setEmail( window.localStorage.getItem( "emailForRegistration" ) );
	}, [] );

	const handleSubmit = async ( e ) => {
		e.preventDefault();
		if ( !email || !password )
		{
			toast.error( "Email and password required" )
			return;
		}
		if ( password.length < 6 )
		{
			toast.error( "password must be at least 6 characters long" )
			return;
		}
		try
		{
			const result = await auth.signInWithEmailLink( email, window.location.href )
			console.log( 'result', result )
			if ( result.user.emailVerified )
			{
				//remove email from local storage
				//get userid
				// remove user email fom local storage
				window.localStorage.removeItem( "emailForRegistration" );
				// get user id token
				let user = auth.currentUser;
				await user.updatePassword( password );
				const idTokenResult = await user.getIdTokenResult();
				// redux store
				console.log( "user", user, "idTokenResult", idTokenResult );
				// redirect

				createOrUpdateUser( idTokenResult.token )
					.then( ( res ) => {
						dispatch( {
							type: "LOGGED_IN_USER",
							payload: {
								name: res.data.name,
								email: res.data.email,
								token: idTokenResult.token,
								role: res.data.role,
								_id: res.data._id,
							},
						} );
					} )
					.catch();

				// redirect
				history.push( "/" );
			}
		}

		catch ( e )
		{
			console.log( 'error--->', e )
			toast.error( e.message )
		}
	};

	const completeRegistrationForm = () => (
		<form onSubmit={handleSubmit}>
			<input type="email" className="form-control" value={email} disabled />

			<input
				type="password"
				className="form-control"
				value={password}
				onChange={( e ) => setPassword( e.target.value )}
				placeholder="Password"
				autoFocus
			/>
			<br />
			<button type="submit" className="btn btn-raised">
				Complete Registration
      </button>
		</form>
	);

	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h4>Register Complete</h4>
					{completeRegistrationForm()}
				</div>
			</div>
		</div>
	);
};

export default RegisterComplete;

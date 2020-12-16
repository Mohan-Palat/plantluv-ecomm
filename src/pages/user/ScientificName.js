//
//import React, { Fragment, useState, useEffect } from 'react'
//import axios from 'axios'
//import UserNav from "../../components/nav/UserNav";
//import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
//import { useSelector } from "react-redux";
//import { getScientificName } from "../../functions/category";
//import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//import { getPosts } from '../../actions/posts';
//import { useDispatch } from 'react-redux';
//import Posts from '../../components/Posts/Posts';
//import Form from '../../components/Form/Form'
//import plants from '../../images/bg1.png'
//import useSytles from '../../styles';
//import { auth, googleAuthProvider } from "../../firebase";
////const fetch = require( 'node-fetch' );
////
////( async () => {
////	const response = await fetch( 'https://trefle.io/api/v1/genus?token=YOUR_TREFLE_TOKEN' );
////	const json = await response.json();
////	console.log( json );
////} )();
//
////http://trefle.io/api/v1/species/search?q=Abies alba&limit=3&token=LjvAtPqIaG3zUxPaLOgnE_DwuUU4X-8Erj3B7WUch08
//
//const initialState = {
//	pname: "",
//
//
//};
//
//const Sname = ( { history } ) => {
//	const [ email, setEmail ] = useState( " " );
//	const [ password, setPassword ] = useState( " " );
//	const [ loading, setLoading ] = useState( false );
//
//	const { user } = useSelector( ( state ) => ( { ...state } ) );
//
//	const [ currentId, setCurrentId ] = useState( null );
//	const classes = useSytles();
//	const dispatch = useDispatch();
//	const result = auth.signInWithEmailAndPassword( email, password );
//	// console.log(result);
//	const { user_s } = result;
//	const idTokenResult = user_s.getIdTokenResult();
//
//
//	useEffect( () => {
//		dispatch( getPosts() );
//	}, [ idTokenResult, dispatch ] );
//
//	return (
//		<Container maxidth="lg">
//			<AppBar className={classes.appBar} position="static" color="inherit">
//				<img className={classes.image} src={plants} alt="garden" height="60" />
//				<Typography className={classes.heading} variant="h2" align="center">My Garden</Typography>
//				<img className={classes.image} src={plants} alt="garden" height="60" />
//			</AppBar>
//			<Grow in>
//				<Container>
//					<Grid container justify="space-between" alignItems="stretch" spacing={3}>
//						<Grid item xs={12} sm={7}>
//							<Posts />
//						</Grid>
//						<Grid item xs={12} sm={4}>
//							<Form />
//						</Grid>
//					</Grid>
//				</Container>
//			</Grow>
//
//
//		</Container>
//
//	)
//}
//
////const Sname = ( { history } ) => {
////	const [ pname, setPname ] = useState( "" );
////
////
////
////
////	const handleSubmit = async ( e ) => {
////		e.preventDefault();
////		// validation
////
////
////		try
////		{
////
////			getScientificName( pname )
////
////		} catch ( error )
////		{
////			console.log( error );
////			toast.error( error.message );
////		}
////	};
////
////	const completeRegistrationForm = () => (
////		<form onSubmit={handleSubmit}>
////
////			<input
////				type="text"
////				value={pname}
////				onChange={event => setPname( event.target.value )}
////			/>
////			<br />
////			<button type="submit" className="btn btn-raised">
////				Complete Registration
////      </button>
////		</form>
////	);
////
////	return (
////		<div className="container p-5">
////			<div className="row">
////				<div className="col-md-6 offset-md-3">
////					<h4>Get Names</h4>
////					{completeRegistrationForm()}
////				</div>
////			</div>
////		</div>
////	);
////};
//
//
//export default Sname;
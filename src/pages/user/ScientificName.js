
import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UserNav from "../../components/nav/UserNav";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getScientificName } from "../../functions/category";

//const fetch = require( 'node-fetch' );
//
//( async () => {
//	const response = await fetch( 'https://trefle.io/api/v1/genus?token=YOUR_TREFLE_TOKEN' );
//	const json = await response.json();
//	console.log( json );
//} )();

//http://trefle.io/api/v1/species/search?q=Abies alba&limit=3&token=LjvAtPqIaG3zUxPaLOgnE_DwuUU4X-8Erj3B7WUch08

const initialState = {
	pname: "",


};



const Sname = ( { history } ) => {
	const [ pname, setPname ] = useState( "" );




	const handleSubmit = async ( e ) => {
		e.preventDefault();
		// validation


		try
		{

			getScientificName( pname )

		} catch ( error )
		{
			console.log( error );
			toast.error( error.message );
		}
	};

	const completeRegistrationForm = () => (
		<form onSubmit={handleSubmit}>

			<input
				type="text"
				value={pname}
				onChange={event => setPname( event.target.value )}
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
					<h4>Get Names</h4>
					{completeRegistrationForm()}
				</div>
			</div>
		</div>
	);
};


export default Sname;
import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import GradenCreateForm from "../../../components/forms/GardenCreateForm";

import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";

const initialState = {
	title: "",
	description: " ",

	images: [
		// {
		//   public_id: "jwrzeubemmypod99e8lz",
		//   url:
		//     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480909/jwrzeubemmypod99e8lz.jpg",
		// },
		// {
		//   public_id: "j7uerlvhog1eic0oyize",
		//   url:
		//     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480912/j7uerlvhog1eic0oyize.jpg",
		// },
		// {
		//   public_id: "ho6wnp7sugyemnmtoogf",
		//   url:
		//     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480913/ho6wnp7sugyemnmtoogf.jpg",
		// },
	],

};

const GardenCreate = () => {
	const [ values, setValues ] = useState( initialState );
	const [ subOptions, setSubOptions ] = useState( [] );
	const [ showSub, setShowSub ] = useState( false );
	const [ loading, setLoading ] = useState( false );

	// redux
	const { user } = useSelector( ( state ) => ( { ...state } ) );

	useEffect( () => {
		loadCategories();
	}, [] );

	const loadCategories = () =>
		getCategories().then( ( c ) => setValues( { ...values, categories: c.data } ) );

	const handleSubmit = ( e ) => {
		e.preventDefault();
		createGarden( values, user.token )
			.then( ( res ) => {
				console.log( res );
				window.alert( `"${ res.data.title }" is created` );
				window.location.reload();
			} )
			.catch( ( err ) => {
				console.log( err );
				// if (err.response.status === 400) toast.error(err.response.data);
				toast.error( err.response.data.err );
			} );
	};

	const handleChange = ( e ) => {
		setValues( { ...values, [ e.target.name ]: e.target.value } );
		console.log( e.target.name, " ----- ", e.target.value );
	};


	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<AdminNav />
				</div>

				<div className="col-md-10">
					{loading ? (
						<LoadingOutlined className="text-danger h1" />
					) : (
							<h4>Product create</h4>
						)}
					<hr />

					{/* {JSON.stringify(values.images)} */}

					<div className="p-3">
						<FileUpload
							values={values}
							setValues={setValues}
							setLoading={setLoading}
						/>
					</div>

					<GardenCreateForm
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						setValues={setValues}
						values={values}


					/>
				</div>
			</div>
		</div>
	);
};

export default GardenCreate;

import axios from "axios";




export const getCategories = async () =>
	await axios.get( `${ process.env.REACT_APP_API }/categories` );

export const getCategory = async ( slug ) =>
	await axios.get( `${ process.env.REACT_APP_API }/category/${ slug }` );

export const removeCategory = async ( slug, authtoken ) =>
	await axios.delete( `${ process.env.REACT_APP_API }/category/${ slug }`, {
		headers: {
			authtoken,
		},
	} );

export const updateCategory = async ( slug, category, authtoken ) =>
	await axios.put( `${ process.env.REACT_APP_API }/category/${ slug }`, category, {
		headers: {
			authtoken,
		},
	} );

export const createCategory = async ( category, authtoken ) =>
	await axios.post( `${ process.env.REACT_APP_API }/category`, category, {
		headers: {
			authtoken,
		},
	} );

export const getCategorySubs = async ( _id ) =>
	await axios.get( `${ process.env.REACT_APP_API }/category/subs/${ _id }` );

//http://trefle.io/api/v1/species/search?q=Abies alba&limit=3&token=LjvAtPqIaG3zUxPaLOgnE_DwuUU4X-8Erj3B7WUch08

export const getScientificName = ( pname ) => {
	axios.defaults.headers.post[ 'Content-Type' ] = 'application/json;charset=utf-8';
	axios.defaults.headers.post[ 'Access-Control-Allow-Origin' ] = '*';
	return axios.get( `${ process.env.REACT_APP_SNAME_URL }`, {
		params: {
			q: pname,

			key: process.env.REACT_APP_API_KEY,

		}
	} )
}


//export const getScientificName = ( pname ) =>
//
//	axios.get( `${ process.env.REACT_APP_SNAME_URL }/?q=${ pname }&token=LjvAtPqIaG3zUxPaLOgnE_DwuUU4X-8Erj3B7WUch08` );
//

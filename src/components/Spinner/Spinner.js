import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Spinner.css";


const Spinner = () => {
	return (
		<div className='circular'>
			<p>Cargando . . . . </p>
		<Box>
		<CircularProgress/>
		</Box>
		</div>
	);
};

export default Spinner;

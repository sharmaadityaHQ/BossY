import React from 'react'
import image from '../image.jpg';
import '../style.css'

const Error = () => {
	return (
		<div className="container">
			<img className="image" src={image} />
			<p>The link you followed probably broken or the page has been removed.</p>
			<a href="#!">Go Home </a>
		</div>
        )
    }
export default Error;

import React from "react";
import '../assets/css/contactUs.scss'

const ContactUs = () => (
	<div className="wrapper">
		<div className="center-div">
			<div className="heading">
				<h2>Contact us now</h2>
				<h2>and step into</h2>
			</div>
				<form className="form-content">
					<div className="form-input">
						<div className="form-input-group">
							<input name="firstName" placeholder ="FIRST NAME" />
							<label for="firstName" className="placeholder-label">First Name</label>							
						</div>
						<div className="form-input-group">
							<input name="lastName" placeholder ="LAST NAME" />
							<label for="firstName" className="placeholder-label">Last Name</label>							

						</div>
					</div>
					<div className="form-input">
						<input name="email" placeholder ="EMAIL" />
						<label for="email" className="placeholder-label">Email</label>							

					</div>
					<div className="form-input">
						<textarea rows="8" name="message" placeholder="YOUR MESSAGE"></textarea>
						<label for="message" className="placeholder-label">Your Message</label>							

					</div>
					<button className="btn">Send</button>
				</form>
		</div>
	</div>
);

export default ContactUs;

import React from 'react'
import './functionComp2.scss'
import { HeadphoneIcon, LikeIcon, ChatIcon2, PieChartIcon } from '../assets/svgIcons'
export default function FunctionComp2() {
	return (
		<div>
			<div className="flexRow">
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<LikeIcon color="blue" />
						</div>
						<h2 className="card-heading">Pro Support</h2>
						<p className="card-description">
							Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
					</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<ChatIcon2 color="blue" />
						</div>
						<h4 className="card-heading">Great Advices</h4>
						<p className="card-description">
							Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
					</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<LikeIcon color="blue" />
						</div>
						<h4 className="card-heading">Pro Support</h4>
						<p className="card-description">
							Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
					</p>
					</div>
				</div>

			</div>
			<div className="flexRow bg-lgt-blue">
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<ChatIcon2 color="blue" />
						</div>
						<h2 className="card-heading">Pro Support</h2>
						<p className="card-description">Lorem ipsum is
						placeholder text
					</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<HeadphoneIcon color="blue" />
						</div>
						<h4 className="card-heading">Great Advices</h4>
						<p className="card-description">Lorem ipsum is
						placeholder text
					</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<LikeIcon color="blue" />
						</div>
						<h4 className="card-heading">Optimal</h4>
						<p className="card-description">Lorem ipsum is
						placeholder text
					</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<PieChartIcon color="blue" />
						</div>
						<h4 className="card-heading">Great Advices</h4>
						<p className="card-description">Lorem ipsum is
						placeholder text
					</p>
					</div>
				</div>
			</div>
		</div>
	)
}

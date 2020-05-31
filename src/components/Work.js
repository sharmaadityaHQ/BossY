import React, { useState } from "react";
import { connect } from "react-redux";

import SingleWorkRow from "./SingleWorkRow";

import { updateWorkThunk, createWorkThunk } from "../store/work";

const Work = ({ createWork, selectedMinion, work, updateWork }) => {
	const [editNewWork, editNewWorkState] = useState(false);

	const saveNewWork = work => {
		createWork(work);
		editNewWorkState(false);
	};
	const defaultWork = {
		title: "New Work",
		description: "",
		hours: 0,
		minionId: selectedMinion.id
	};
	const workRows = work.map((work, idx) => {
		return (
			<SingleWorkRow updateWork={updateWork} work={work} key={work.id} idx={idx} />
		);
	});

	const nextIdx = workRows.length + 1;

	return (
		<div id="work-container">
			<div id="work-label" className="label meetings-label">
				Work
			</div>
			<table className="work-table">
				<thead>
					<tr>
						<th className="work-x"></th>
						<th className="work-title">Title</th>
						<th className="work-desc">Descr.</th>
						<th className="work-hours">Hrs.</th>
						<th className="work-save"></th>
					</tr>
				</thead>
				<tbody>
					{workRows}
					{editNewWork ? (
						<SingleWorkRow
							saveNewWork={saveNewWork}
							newWork={true}
							editing={true}
							work={defaultWork}
							idx={nextIdx}
						/>
					) : null}
					<tr>
						<td />
						<td />
						<td>
							<div onClick={() => editNewWorkState(!editNewWork)} className="button add-work-button">
								{editNewWork ? "Cancel" : "Add Work"}
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const mapState = ({ work, selectedMinion }) => ({ work, selectedMinion });

const mapDispatch = dispatch => ({
	updateWork: work => {
		dispatch(updateWorkThunk(work));
	},
	createWork: work => {
		dispatch(createWorkThunk(work));
	}
});

export default connect(mapState, mapDispatch)(Work);

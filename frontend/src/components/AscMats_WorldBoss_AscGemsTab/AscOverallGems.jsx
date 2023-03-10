// import React, { useState } from "react";

// Creates HTML code for the Gem table - Check
// functional class
// Create the class
// HTML table.

const AscOverallGems = () => {
	return (
		<div className="output-table">
			<table className="comp-overall-asc-gem-table">
				<thead>
					<tr>
						<th>Level</th>
						<th>Per Character</th>
						<th>Overall</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Level 1:</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
					</tr>
					<tr>
						<td>Level 2:</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
					</tr>
					<tr>
						<td>Level 3:</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
					</tr>
					<tr>
						<td>Level 4:</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
						<td>
							<input type="number" className="asc-num-input" placeholder="0" min="0" readOnly />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default AscOverallGems;

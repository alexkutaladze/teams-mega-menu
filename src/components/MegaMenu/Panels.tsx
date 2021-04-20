import React from "react";

const panel1 = [
	<div className="panel-top">
		<div>
			<h3 className="panel-title">My Career Benefits</h3>
			<ul className="panel-ul">
				<li>
					<a href="https://solutions2share.com">HRweb</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Benefits</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Learning Portal</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Internal Jobs</a>
				</li>
			</ul>
		</div>
		<div>
			<h3 className="panel-title">My Career Benefits</h3>
			<ul className="panel-ul">
				<li>
					<a href="https://solutions2share.com">HRweb</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Benefits</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Learning Portal</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Internal Jobs</a>
				</li>
			</ul>
		</div>
	</div>,
];

const panel2 = [
	<div className="panel-top">
		<div>
			<h3 className="panel-title">Travel and Expenses</h3>
			<ul className="panel-ul">
				<li>
					<a href="https://solutions2share.com">Travel</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Expenses</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Payments</a>
				</li>
				<li>
					<a href="https://solutions2share.com">
						US Immigrations Travel
					</a>
				</li>
			</ul>
		</div>
		<div>
			<h3 className="panel-title">Travel and Expenses</h3>
			<ul className="panel-ul">
				<li>
					<a href="https://solutions2share.com">Travel</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Expenses</a>
				</li>
				<li>
					<a href="https://solutions2share.com">Payments</a>
				</li>
				<li>
					<a href="https://solutions2share.com">
						US Immigrations Travel
					</a>
				</li>
			</ul>
		</div>
	</div>,
];

const Panels = (number) => [
	// React.createElement("p", { className: "title" }, `Panel ${number}`),
	React.createElement("div", { className: "panel1" }, panel1),
	React.createElement("div", { className: "panel2" }, panel2),
];

export default Panels;

import React from "react";
import { Input } from "./Input";

//create your first component
export function Home() {
	return (
		<div className="container md flex justify-content-center mt-5 mb-5">
			<div className="row card p-3">
				<div className="col-12">
					<h1 className="mt-3">todo&#39;s</h1>
				</div>
				<div className="col-12">
					<Input />
				</div>
			</div>
		</div>
	);
}

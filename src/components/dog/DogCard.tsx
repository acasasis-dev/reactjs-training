import DogDetails from "../../interfaces/dog/details";
import { PropsWithChildren } from "react";


function DogCard({ name, size, description, children }: PropsWithChildren<DogDetails>) {
	if(!children) {
		return (
			<>
				<ul>
					<li>Name: { name }</li>
					<li>Size: { size }</li>
					<li>Description: { description }</li>
				</ul>
			</>
		)
	} else {
		return (
			<>
				<ul>
					<li>Name: { name }</li>
					<li>Size: { size }</li>
					<li>Description: { description }</li>
				</ul>
				<div>This doggo is too { children } to exist.</div>
			</>
		)
	}
}

export default DogCard;
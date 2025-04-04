import { useState } from "react";

import DogDetails from "../../interfaces/dog/details";
import DogCard from "./DogCard";
import DogButton from "./DogButton";

function DogContainer() {
	const [dynamicContent, setDynamicContent] = useState<DogDetails | null>(null);

	function handleClick(dogDetails: DogDetails) {
		setDynamicContent(dogDetails)
	}

	const dogs: DogDetails[] = [
		{
			"name": "Pitbull",
			"size": "Large",
			"description": "A very cuddly doggo."
		},
		{
			"name": "Shi Tzu",
			"size": "Small",
			"description": "Small but terrible."
		},
		{
			"name": "Beagle",
			"size": "Medium",
			"description": "A very nosy dog."
		}
	]

	return (
		<>
			<menu>
				{ dogs.map(dog => {
					return (
						<DogButton 
							isSelected={dynamicContent?.name === dog.name} 
							onClick={() => handleClick(dog)}>
							{ dog.name }
						</DogButton>
					)
				}) }
			</menu>
			<div>
				{ !dynamicContent ? "Please select a doggo": <DogCard {...dynamicContent} /> }
			</div>
		</>
	)
}

export default DogContainer;
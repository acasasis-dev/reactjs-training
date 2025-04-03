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
				<DogButton isSelected={dynamicContent?.name === dogs[0].name} onClick={() => handleClick(dogs[0])}>{ dogs[0].name }</DogButton>
				<DogButton isSelected={dynamicContent?.name === dogs[1].name} onClick={() => handleClick(dogs[1])}>{ dogs[1].name }</DogButton>
				<DogButton isSelected={dynamicContent?.name === dogs[2].name} onClick={() => handleClick(dogs[2])}>{ dogs[2].name }</DogButton>
			</menu>
			<div>
				{ !dynamicContent ? "Please select a doggo": <DogCard {...dynamicContent} /> }
			</div>
		</>
	)
}

export default DogContainer;
import { useState } from "react";

import DogDetails from "../../interfaces/dog/details";
import DogCard from "./DogCard";
import DogButton from "./DogButton";
import DogTabs from "./DogTabs";

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
			<DogTabs
				tabContainer="menu"
				buttons={
					dogs.map(dog => {
						return (
							<DogButton 
								isSelected={dynamicContent?.name === dog.name} 
								onClick={() => handleClick(dog)}>
								{ dog.name }
							</DogButton>
						)
					})
				}
			>{ !dynamicContent ? "Please select a doggo": <DogCard {...dynamicContent} /> }</DogTabs>
		</>
	)
}

export default DogContainer;
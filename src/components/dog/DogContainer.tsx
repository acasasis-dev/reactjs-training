import DogDetails from "../../interfaces/dog/details";
import DogCard from "./DogCard";

function DogContainer() {
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
			<div>
				<DogCard 
					name={ dogs[0]["name"] } 
					size={ dogs[0]["size"] }
					description={ dogs[0]["description"]}
				/>
			</div>
		</>
	)
}

export default DogContainer;
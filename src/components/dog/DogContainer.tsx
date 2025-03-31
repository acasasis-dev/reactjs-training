import DogDetails from "../../interfaces/dog/details";
import DogCard from "./DogCard";
import DogButton from "./DogButton";

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
			<menu>
				<DogButton>{ dogs[0].name }</DogButton>
				<DogButton>{ dogs[1].name }</DogButton>
				<DogButton>{ dogs[2].name }</DogButton>
			</menu>
		</>
	)
}

export default DogContainer;
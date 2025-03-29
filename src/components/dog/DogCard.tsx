import DogDetails from "../../interfaces/dog/details";


function DogCard({ name, size, description }: DogDetails) {
	return (
		<>
			<ul>
				<li>Name: { name }</li>
				<li>Size: { size }</li>
				<li>Description: { description }</li>
			</ul>
		</>
	)
}

export default DogCard;
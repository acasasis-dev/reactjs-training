import { PropsWithChildren } from "react";


export default function DogButton({ children, onClick }: PropsWithChildren<any>) {
	return (
		<li>
			<button onClick={onClick}>{ children }</button>
		</li>
	)
}
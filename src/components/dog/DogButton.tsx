import { PropsWithChildren } from "react";


export default function DogButton({ children }: PropsWithChildren<any>) {
	return (
		<li>
			<button>{ children }</button>
		</li>
	)
}
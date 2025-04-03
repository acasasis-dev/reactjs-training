import { PropsWithChildren } from "react";


export default function DogButton({ children, onClick, isSelected }: PropsWithChildren<any>) {
	return (
		<li>
			<button className={`btn btn-primary ${ isSelected? 'active': '' }`} onClick={onClick}>{ children }</button>
		</li>
	)
}
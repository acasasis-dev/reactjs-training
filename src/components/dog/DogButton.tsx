import { PropsWithChildren } from "react";


export default function DogButton({ children, isSelected, ...props }: PropsWithChildren<any>) {
	return (
		<li>
			<button className={`btn btn-primary ${ isSelected? 'active': '' }`} {...props}>{ children }</button>
		</li>
	)
}
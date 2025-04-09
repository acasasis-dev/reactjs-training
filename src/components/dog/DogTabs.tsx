import { PropsWithChildren } from "react";
import DogTabDetails from "../../interfaces/dog/tab";


export default function DogTabs({ buttons, tabContainer: TabContainer, children }: PropsWithChildren<DogTabDetails>) {
	return (
		<>
			<TabContainer>{ buttons }</TabContainer>
			{ children }
		</>
	);
}
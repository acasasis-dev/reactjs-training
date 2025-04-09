import { PropsWithChildren } from "react";
import DogTabDetails from "../../interfaces/dog/tab";


export default function DogTabs({ buttons, tabContainer: TabContainer = "menu", children }: PropsWithChildren<DogTabDetails>) {
	return (
		<>
			<TabContainer>{ buttons }</TabContainer>
			{ children }
		</>
	);
}
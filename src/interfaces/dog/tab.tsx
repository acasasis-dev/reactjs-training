import { ReactElement, ComponentType } from "react";


export default interface DogTabDetails {
	buttons: ReactElement[],
	tabContainer: string | ComponentType
}
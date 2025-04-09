import { ReactElement, ComponentType, JSX } from "react";


export default interface DogTabDetails {
	buttons: ReactElement[],
	tabContainer?: keyof JSX.IntrinsicElements | ComponentType;
}
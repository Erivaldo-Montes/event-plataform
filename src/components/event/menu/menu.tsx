import { List, X } from "phosphor-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { toggleReducer } from "../../../redux/sidebarSlice";


export function Menu() {
	const dispatch = useAppDispatch()
	const isOpen = useAppSelector(state => state.toggleIsOpen.value)
	return (
		<button
			onClick={() => dispatch(toggleReducer())}
			className="md:hidden">
			{
				!isOpen ? (<List size={24} />) : (<X size={24} />)
			}


		</button>
	)
}
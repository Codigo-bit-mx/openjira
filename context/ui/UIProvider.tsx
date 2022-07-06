import React, {FC, useReducer} from 'react'
import {UIContext, UIReducer} from './'

interface Props {
    children: React.ReactNode;
}

export  interface UIState {
    sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false, 
}

export const UIProvider: FC<Props> = ({ children })  => {

const [state, dispatch] = useReducer( UIReducer, UI_INITIAL_STATE);
 

    const openMenuSidebar = () => {
        dispatch({
            type: 'UI - Open Sidebar' 
        })
    }

    const closeMenuSidebar = () => {
        dispatch({
            type: 'UI - Close Sidebar'
        })
    }


return (
    <UIContext.Provider value={{
        ...state,
        openMenuSidebar,
        closeMenuSidebar
    }}>
        {children}
    </UIContext.Provider>
)
}
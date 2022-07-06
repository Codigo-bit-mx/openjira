import { createContext } from 'react';

interface ContextProps {
 sideMenuOpen: boolean;
//metodos
 openMenuSidebar: () => void;
 closeMenuSidebar: () => void;

}

export const UIContext = createContext({} as ContextProps)
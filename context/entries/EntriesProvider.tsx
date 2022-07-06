import {FC, useReducer} from 'react'
import {EntriesContext, entriesReducer} from './'
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';

interface Props {
    children: React.ReactNode;
}

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Realizar el Front-end de la aplicacion open jira',
            status: 'pending',
            createAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Realizar el Back-end de la aplicacion open jira',
            status: 'finished',
            createAt: Date.now() - 100000
        },
        {
            _id: uuidv4(),
            description: 'Creacion de la base de datos de la aplicacion open jira',
            status: 'in-progress',
            createAt: Date.now() - 10000
        }
    ]
}

export const EntriesProvider: FC<Props> = ({ children })  => {

const [state, dispatch] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE);

return (
    <EntriesContext.Provider value={{
        ...state, 
    }}>
        {children}
    </EntriesContext.Provider>
)
}
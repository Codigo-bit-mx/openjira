import { EntriesState } from './';

type entriesActionType = 
| {type: 'name1'}

export const entriesReducer = ( state: EntriesState, action: entriesActionType  ): EntriesState => {

switch(action.type){
    case '': 
        return {
        ...state,
        }

    default:
        return state;
    }
}

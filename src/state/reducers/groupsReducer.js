import { v4 as uuidv4 } from 'uuid';
import {
    ADD_GROUP,
    REMOVE_GROUP,
    ADD_VALUE_TO_GROUP,
    REMOVE_VALUE_FROM_GROUP,
    UPDATE_VALUE_FROM_GROUP
} from '../actions/actionTypes';


const groupsReducer = (state = { groups: [] }, action) => {
    let groupIndex = 0;
    let newGroups = [];
    let group = {};
    switch (action.type) {
        case ADD_GROUP:
            return {
                ...state,
                groups: [...state.groups, { id: uuidv4(), name: action.payload.name, values: [] }]
            }
        case REMOVE_GROUP:
            newGroups = [...state.groups.filter(group => group.id !== action.payload.id)]
            console.log(newGroups)
            return {
                groups: newGroups
            }
        case ADD_VALUE_TO_GROUP:

            groupIndex = state.groups.findIndex((group) => group.id === action.payload.groupId)
            newGroups = [...state.groups]
            group = newGroups[groupIndex]
            if (group) {
                group.values.push({ id: uuidv4(), value: action.payload.value })
                return {
                    ...state,
                    groups: newGroups
                }
            }
            return state;

        case REMOVE_VALUE_FROM_GROUP:

            groupIndex = state.groups.findIndex((group) => group.id === action.payload.groupId)
            newGroups = [...state.groups]
            group = newGroups[groupIndex]
            if (group) {
                group.values = [...group.values.filter(value => value.id !== action.payload.valueId)]
                return {
                    ...state,
                    groups: newGroups
                }
            }
            return state;
        case UPDATE_VALUE_FROM_GROUP:
            groupIndex = state.groups.findIndex((group) => group.id === action.payload.groupId)
            newGroups = [...state.groups]
            group = newGroups[groupIndex]
            if (group) {
                let valueIndex = group.values.findIndex(value => value.id === action.payload.valueId)
                const value = group.values[valueIndex]
                value.value = action.payload.value
                return {
                    ...state,
                    groups: newGroups
                }
            }
            return state;
        default:
            return state
    }

}

export default groupsReducer;
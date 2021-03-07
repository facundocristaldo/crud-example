import {
    ADD_GROUP,
    REMOVE_GROUP,
    ADD_VALUE_TO_GROUP,
    REMOVE_VALUE_FROM_GROUP,
    UPDATE_VALUE_FROM_GROUP,
} from '../actions/actionTypes';

export const addGroup = (name = "") => {
    return {
        type: ADD_GROUP,
        payload: {
            name
        }
    }
}
export const removeGroup = (id = "") => {
    return {
        type: REMOVE_GROUP,
        payload: {
            id
        }
    }
}
export const addValueToGroup = (groupId = "", value = "") => {
    return {
        type: ADD_VALUE_TO_GROUP,
        payload: {
            groupId,
            value
        }
    }
}
export const removeValueFromGroup = (groupId = "", valueId = "") => {
    return {
        type: REMOVE_VALUE_FROM_GROUP,
        payload: {
            groupId,
            valueId
        }
    }
}

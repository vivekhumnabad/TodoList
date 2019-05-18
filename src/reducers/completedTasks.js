import * as actionTypes from '../actions/actionTypes';


const completionTasks = (state = [], action) => {
    switch (action.type) {
        case actionTypes.DONE_TODO:
            const final = [...state]
            final.push(action.data)
            return final;
        case actionTypes.REMOVE_TODO:
            if (action.section == 1) {
                const finalTODO = [...state];
                finalTODO.splice(action.index, 1)
                return finalTODO;
            } else {
                return state;
            }
        case actionTypes.UNDONE_TODO:
            const finalTasks = [...state];
            finalTasks.splice(action.index, 1)
            return finalTasks;
        default:
            return state
    }
}

export default completionTasks
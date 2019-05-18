import * as actionTypes from '../actions/actionTypes';



const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
        case actionTypes.UNDONE_TODO:
            const final = [...state]
            final.push(action.data)
            return final;
        case actionTypes.DONE_TODO:
            const finalTODO = [...state];
            finalTODO.splice(action.index, 1)
            return finalTODO;
        case actionTypes.REMOVE_TODO:
            if (action.section == 0) {
                const finalTODO = [...state];
                finalTODO.splice(action.index, 1)
                return finalTODO;
            } else {
                return state;
            }
        default:
            return state
    }
}

export default todos
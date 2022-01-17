
let initialState = {
    task: false
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DONE':
            return {
                ...state,
                task: state.task = action.value
            }
        default:
            return state
    }
}

export default taskReducer
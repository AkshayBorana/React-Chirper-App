// Logger middlware function, to log action.type and the state.
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('the action is', action.type)
        const returnedValue = next(action) // dispatch the action
        console.log('The new State is', store.getState())
    console.groupEnd()

    return returnedValue
}

export default logger;
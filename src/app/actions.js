// helper methods to create action object

// all actions creators defined in actions.js

export function increment(value) {
    return {
        type: 'INCREMENT',
        payload: {
            value
        }
    }
}

export function decrement(value) {
    return {
        type: 'DECREMENT',
        payload: {
            value
        }
    }
}
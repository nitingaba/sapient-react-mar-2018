// helper methods to create action object

// all actions creators defined in actions.js

export function increment(value) {
    console.log("Increment Value action ", value);

    return {
        type: 'INCREMENT',
        payload: {
            value
        }
    }
}

export function decrement(value) {
    console.log("Decrement Value action ", value);
    
    return {
        type: 'DECREMENT',
        payload: {
            value
        }
    }
}
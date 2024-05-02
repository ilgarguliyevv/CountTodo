import React, { useReducer } from 'react'

const firstState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            if (state.count > 0) {
                return { count: state.count - 1 }
            } else {
                return { count: 0 }
            }

        default:
            break;
    }
}

function Count() {
    const [state, dispatch] = useReducer(reducer, firstState)



    return (
        <div>
            <h3>Count {state.count}</h3>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    )
}

export default Count;
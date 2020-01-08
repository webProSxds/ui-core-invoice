import React, { Fragment, useReducer } from 'react';
import Dude from './dude';
const INC = "INC";
const DEC = "DEC";

const initialState = {
    cnt: 0
}

const reducerFn = (payload, action) => {
    console.log(payload)
    if (action.type == INC) {
        return { cnt: payload.cnt + 1 };
    } else if (action.type == DEC) {
        return { cnt: payload.cnt - 1 };
    }

    return payload
}

export default () => {
    const [state, dispatch] = useReducer(reducerFn, initialState)

    return (
        <Fragment>
            <p>Take choc to College {state.cnt}</p>
            <p>No of Freidns College {state.cnt}</p>
            <button
                onClick={
                    () => {
                        dispatch({ type: INC });
                    }
                }
            >ince</button>
            <button
                onClick={
                    () => {
                        dispatch({ type: DEC });


                    }
                }>dec</button>

            <Dude handleDisp={dispatch} />
        </Fragment>
    )
}
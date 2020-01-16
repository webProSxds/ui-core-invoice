import React, { useState, createRef, useRef } from 'react';
import { faPlus, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import FontAwsm from './FontAwsm';
import AddModel from './AddModel';


const initState = {

    isVisible: !false,
    list: []


}

export default () => {
    const [state, updateState] = useState(initState);
    const [inputState, updateInputState] = useState('');

    const clickHandler = () => {


        console.log("clickHandler", clickHandler);

        updateState({ ...state, isVisible: true })
    }

    const cliclClose = () => {
        updateState({ ...state, isVisible: false })

    }
    const inputRef = useRef(null);
    return (<div>

        <div className="container">

            <FontAwsm label={faPlus} handler={() => clickHandler()} />

        </div>
        <div className="modelVeiw">
            {

                <AddModel
                    title="Welcom"
                    content={() => <input type="text" ref={inputRef} />
                    }
                    footer={() => <div><button onClick={() => {
                        // console.log("we", inputRef.current.value)

                        updateState({ ...state, isVisible: false, list: [...state.list, inputRef.current.value] })
                        inputRef.current.value = '';
                    }} >Go</button></div>}
                    isVisible={state.isVisible}
                />
            }
            {
                // <pre>{JSON.stringify(state.list, null, 2)}</pre>
                state.list.map(item => <div>{item}</div>)
            }
        </div>




    </div>)

}
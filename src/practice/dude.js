import React from 'react';
const INC = "INC";
const DEC = "DEC";

export default ({ handleDisp }) => {
    return (
        <div>
            Dude
            <button
                onClick={
                    () => {
                        handleDisp({ type: DEC });


                    }
                }>dec</button>
        </div>
    )
}
import React, { useState } from 'react';


const Counter = () => {

    const [cnt, setcnt] = useState(0);

    return (
        <div>
            <p>Hello :::{cnt}</p>
            <button onClick={() => setcnt(cnt + 1)}>increase</button>
            <button onClick={() => {
                if (cnt <= 0) {
                    setcnt(0)
                }
                else {
                    setcnt(cnt - 1)
                }
            }}>decrease</button>

        </div>
    )
}
export default Counter;
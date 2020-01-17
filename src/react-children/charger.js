import React, { Children } from 'react';

export default (props) => {

    const [selectedNumber, updateSelectedNumber] = React.useState(0);

    const myHandler = (a) => {

        console.log("myHandler", a);
        updateSelectedNumber(st => {
            return st == a ? null : a;

        });
    }

    const myChildren = React.Children.map(props.children, (child, i) => {

        return React.cloneElement(child, {
            active: selectedNumber == i,
            handler: () => myHandler(i)
        })
    })

    return (
        <div>
            {
                <p>selecteNum {selectedNumber}</p>
            }

            {
                myChildren
            }
        </div>)
}

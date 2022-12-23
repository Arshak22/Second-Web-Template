import React, { useState } from "react";
import useHandle from "../../Hooks";
import "./style.css";

export const Hook = () => {
    const list = useState(true);

    // const handler = () => {
    //     setList(!list);
    // }

    return (
        <div>
            {list ? <ul>
                <li>List1</li>
                <li>List2</li>
                <li>List3</li>
            </ul>: null}
            <button>Click</button>
        </div>
    );
}
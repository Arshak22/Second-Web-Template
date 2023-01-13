import React from "react";
import { useState, useMemo } from "react";
import "./style.css";

const Enter = (e) => {
    let a = 0;
    while(a < 1000000000) ++a;
    return e*2;
}

export const Memo = () => {
    const [value, setValue] = useState(50);
    const [flag, setFlag] = useState(false);
    const styles = {
        color: flag ? "red" : "black"
    }

    const Entering = useMemo(() => Enter(value), [value])

    return (
        <div>
            <p style={styles}>{value}{Entering}</p>
            <button onClick={() => setValue(prev => prev + 1)}>Plus</button>
            <button onClick={() => setValue(prev => prev - 1)}>Minus</button>
            <button onClick={() => setFlag(prev => !prev)}>Click</button>
        </div>
    );
}
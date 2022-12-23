import {useState} from "react";

const useHandle = (a) => {
    const[b, setb] = useState(a);
    setb(!b);

    return b
}

export default useHandle
import React from 'react';
import {BsCheckCircle, BsCircle} from "react-icons/bs";

const Check = ({todo}) => {
    return (
        < >
            {todo.isFinish ? <BsCheckCircle/> : <BsCircle/>}
        </ >
    );
};

export default Check;
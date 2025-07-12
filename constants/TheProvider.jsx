import React, { useState } from "react";
import TheContext from "./TheContext";

const TheProvider = (props) => {
    const [cart, setCart] = useState([])

    return (
        <TheContext.Provider
            value={{ cart, setCart }}
        >
            {props.children}
        </TheContext.Provider>
    );
};

export default TheProvider;
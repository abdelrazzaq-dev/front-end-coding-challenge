import React, { createContext, useState } from "react";

export const RepositoryContext = createContext();

export const RepositoryProvider = (props) => {
    const  [repositories, setRepositories] = useState([]);

    return (
        <RepositoryContext.Provider value={[repositories, setRepositories]}>
            {props.children}
        </RepositoryContext.Provider>
    )
}
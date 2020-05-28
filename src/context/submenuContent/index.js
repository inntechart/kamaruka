import React, { useState } from 'react';

// context
import SubmenuContentContext from './context';

const SubmenuContentProvider = ({ children }) => {

    const [content, setContent] = useState(null);


    return <SubmenuContentContext.Provider value={{
        content,
        setContent,
    }}>
        { children }
    </SubmenuContentContext.Provider>;
};

export default SubmenuContentProvider;
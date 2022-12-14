
import React, { createContext, useState } from 'react';
export const BurgerBarContext = createContext({});

// const BurgerBarContextProvider = ({ children}) => {
//     const [open, setOpen ]= useState(false);
//     console.log("context")
    
//     return (
//         <BurgerBarContext.Provider value={{open, setOpen}}>
//             {children}
//         </BurgerBarContext.Provider>
//     );
// };



// export default BurgerBarContextProvider;

export const BurgerBarContextProvider = ({ children}) => {
        const [open, setOpen ]= useState(false);
        console.log("context")
        
        return (
            <BurgerBarContext.Provider value={{open, setOpen}}>
                {children}
            </BurgerBarContext.Provider>
        );
    };
    
    
    

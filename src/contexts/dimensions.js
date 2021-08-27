import { createContext, useState, useEffect } from "react"  

export const DimensionContext = createContext() 

const DimensionProvider = ({children}) => {  
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight})
     
    useEffect(() => { 
        window.addEventListener("resize", () => {   
            setDimensions({width: window.innerWidth, height: window.innerHeight})
        })
        console.log("hello2")
        return () => {
            window.removeEventListener("resize") 
        }
        
    },[]) 
    console.log(dimensions)
    return (                       
        <DimensionContext.Provider value={{dimensions, isDeskTop: dimensions.width >= 768, isMobile: dimensions.width < 768}}>
            {children}
        </DimensionContext.Provider>
    )
}

export default DimensionProvider

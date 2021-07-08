import { createContext, useState, useEffect } from "react"  //createContext is a built in function from React 
//that creates a new instance of context. Context is used to store values that we want to share throughout the project



export const DimensionContext = createContext()  //DimensionContext is a context instance and is an object
//DimensionContext is capitalized because it will be used as a component 
const DimensionProvider = ({children}) => {  //children is a special prop, because you don't pass it like a normal prop((previous === 0) ? 
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight})
     
    //whenever state variables change the page rerenders which means that all the functions inside of that page will
    //be executed again 
    useEffect(() => { //the useEffect hook is needed here because we only want to execute the event listener one time
        // the declaration from the window doesn't need to repeated 
        window.addEventListener("resize", () => {   //resize is an example of a listener like submit or click 
            //the resize listener is monitoring for when the user resizes the page
            setDimensions({width: window.innerWidth, height: window.innerHeight})
        })
        console.log("hello2")
        return () => {
            window.removeEventListener("resize") //when you declare a listener you have to clean it, remove it 
            //it's similar to unmounting so that the resize doesn't continue when the user leaves the page. This helps
            //with performance
        }
        
    },[]) //the empty (dependency) array tells React that we only want to trigger the function inside of the useEffect once 
    console.log(dimensions)
    return (                       //return needs parenthesis if there is going to be more than one line
        <DimensionContext.Provider value={{dimensions, isDeskTop: dimensions.width >= 768, isMobile: dimensions.width < 768}}>
                                            {/* same as dimensions: dimensions  */}
                                             {/* the first set of curly brackets is because we are writing JS 
                                               inside of HTML. The second set of brackets  is because it's an object */}
            {children}
        </DimensionContext.Provider>
    )
}
// Provider is used to provide dimension context values to other components
export default DimensionProvider
//default is used to export the reference of something. By exporting the reference we 
// can rename it 
import { createContext, useState, useEffect } from "react";

export const DimensionContext = createContext();

const DimensionProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    });

    return () => {
      window.removeEventListener("resize");
    };
  }, []);
  console.log(dimensions);
  return (
    <DimensionContext.Provider
      value={{
        dimensions,
        isDeskTop: dimensions.width >= 968,
        isMobile: dimensions.width < 968,
      }}
    >
      {children}
    </DimensionContext.Provider>
  );
};

export default DimensionProvider;

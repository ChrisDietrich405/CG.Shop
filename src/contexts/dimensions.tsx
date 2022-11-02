import { createContext, useState, useEffect } from "react";

import { IDimension } from "../models/dimension";

interface IDimensionContext {
  dimensions: IDimension;
  isDeskTop: boolean;
  isMobile: boolean;
}

interface IDimensionProvider {
  children: JSX.Element;
}

export const DimensionContext = createContext<IDimensionContext>(
  {} as IDimensionContext
);


const DimensionProvider = ({ children }: IDimensionProvider) => {
  const [dimensions, setDimensions] = useState<IDimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeWindow = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

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

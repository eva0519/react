import React from "react";
import ColorBox from "./conponents/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColor from "./conponents/SelectColor";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;

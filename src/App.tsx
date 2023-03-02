import Home from "./pages/Home";
import SelectedPost from "./pages/SelectedPost";
import React, {useState} from "react";

import Card from "./components/Card/Card";
import {CardSize} from "./components/Card/types";
import ThemeProvider from "./context/Theme/Provider";
import {Theme} from "./context/Theme/Context";




const App = () => {

    const [inputText, setInputText] = useState('')
    const onChange = (value: string) => setInputText(value)

    const [theme, setTheme] = useState(Theme.Light)
    const onChangeTheme = (value: Theme) => {
        setTheme(value);
    };

  return (
      <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
          <div>
              {/*<Home />*/}
              <SelectedPost />
          </div>
      </ThemeProvider>
  );
};

export default App;

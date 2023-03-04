import Home from "./pages/Home";
import SelectedPost from "./pages/SelectedPost";
import React, {useState} from "react";

import ThemeProvider from "./context/Theme/Provider";
import {Theme} from "./context/Theme/Context";
import SignIn from "./pages/SignIn";
import Success from "./pages/Success";




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
              {/*<SelectedPost />*/}
              <SignIn />
              <Success/>
          </div>
      </ThemeProvider>
  );
};

export default App;

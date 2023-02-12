import "./App.css";
import Button from "./components/Button";
import {ButtonType} from "./components/Button/Button";

const App = () => {
  return (
    <div>
          <Button title={'Primary'} type={ButtonType.Primary} onClick={() => {}}/>
          <Button title={'Secondary'} type={ButtonType.Secondary} onClick={() => {}}/>
          <Button title={'Error'} type={ButtonType.Error} onClick={() => {}}/>
    </div>
  );
};

export default App;

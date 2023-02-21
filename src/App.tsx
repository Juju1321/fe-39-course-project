import "./App.css";
import Button from "./components/Button";
import {ButtonType} from "./components/Button/Button";
import User from "./components/User"
import Title from "./components/Title"

const App = () => {
  return (
    <div>
        <header>
            <User userName={'Artem Malkin'}/>
        </header>
        <Title title={'Blog'}/>
        <Button title={'Primary'} type={ButtonType.Primary} onClick={() => {}}/>
        <Button title={'Secondary'} type={ButtonType.Secondary} onClick={() => {}}/>
        <Button title={'Error'} type={ButtonType.Error} onClick={() => {}}/>
    </div>
  );
};

export default App;

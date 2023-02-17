import Button, {ButtonType} from "./components/Button";
import User from "./components/User"
import Title from "./components/Title"
import Tabs from "./components/Tabs";
import BurgerButton from "./components/BurgerButton";

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
        <Tabs />
        <BurgerButton />
    </div>
  );
};

export default App;

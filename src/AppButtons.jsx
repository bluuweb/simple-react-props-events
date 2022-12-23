import { useState } from "react";
import Button from "./components/Button";

const App = () => {
    const [counter, setCounter] = useState(10);

    const handleClickIncrement = () => {
        setCounter(counter + 1);
    };

    const handleClickDecrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="container mt-5">
            <h1>Counter: {counter}</h1>
            <Button
                id="btn"
                className="btn btn-primary"
                onClick={handleClickIncrement}
            >
                Increment
            </Button>
            <Button className="btn btn-danger" onClick={handleClickDecrement}>
                Decrement
            </Button>
        </div>
    );
};

export default App;

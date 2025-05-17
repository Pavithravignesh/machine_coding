import { useEffect, useRef, useState } from "react";
import OtpInput from "./component/OtpInput.jsx";
const App = () => {

    const otpLength = 6;

    // create input field
    const [inputArr, setInputArr] = useState(new Array(otpLength).fill(""));

    // console.log(inputArr);

    const inputRef = useRef([]);

    const handleInput = (value, i) => {
        // let's trim it
        const newValue = value.trim();
        // check for isNaN
        if (isNaN(newValue)) return;
        // have a Arr copy
        const newArr = [...inputArr];
        newArr[i] = newValue.slice(-1); // only one digit can pass
        setInputArr(newArr);

        // automatically switch the focus to next field && move to previous field if current field is Backspaced
        value && inputRef.current[i + 1]?.focus();
    };

    const handleRemovingInput = (e, i) => {
        // console.log("hi")
        // check the field is empty && e.key.backspace
        // console.log(e);
        if (!e.target.value && e.key === "Backspace") {
            inputRef.current[i - 1]?.focus();
        }
    };

    useEffect(() => {
        inputRef.current[0]?.focus();
    }, []);

    return <div className="">
        <h1>App</h1>
        {inputArr.map((e, i) => {
            return <OtpInput
                key={i}
                i={i}
                e={e}
                inputArr={inputArr}
                handleInput={handleInput}
                inputRef={inputRef}
                handleRemovingInput={handleRemovingInput}
            />
            // return <input
            //     type="number"
            //     key={i}
            //     value={inputArr[i]}
            //     onChange={(e) => handleInput(e.target.value, i)}
            //     ref={(input) => (inputRef.current[i] = input)}
            // />
        }
        )}
    </div>
};

export default App;
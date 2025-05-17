const OtpInput = ({ e, i, inputArr, handleInput, inputRef, handleRemovingInput }) => {
    return (<>
        <input
            type="number"
            key={i}
            value={inputArr[i]}
            onChange={(e) => handleInput(e.target.value, i)}
            ref={(input) => (inputRef.current[i] = input)}
            onKeyDown={(e) => handleRemovingInput(e, i)}
        />    </>)
};

export default OtpInput;
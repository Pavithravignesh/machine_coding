import { useState } from "react";
import Accordion from "./component/Accordion.jsx";
import './index.css'
import { renderData } from "./constant/data.js";

const App = () => {

    const [data, setData] = useState(renderData);

    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    console.log(data.length);

    return data.length < 1 ? (
        <>
            <div className="text-2xl font-bold">App</div>
            <div className="text-2xl font-bold">nothing's here</div>
        </>) : (
        <>
            <h1>App</h1>
            <div className="text-2xl font-bold mb-4 w-52 h-54 rounded-lg border-black border-2 m-2">
                {data.map((e, i) => (
                    <Accordion key={i} i={i} data={e} handleClick={handleClick} openIndex={openIndex} />
                ))}
            </div>

        </>
    )
};

export default App;
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ i, data, handleClick, openIndex }) => {
    console.log(data)
    return (<>
        <div className="rounded-lg w-48 p-4 border-black border-2 m-2" onClick={() => handleClick(i)}>
            <h1 className="text-lg font-bold text-black">
                {data?.title}
                {openIndex === i ? <FaChevronDown /> : <FaChevronUp />}
            </h1>
            {openIndex === i &&
                <h3 className="text-sm text-gray-600">
                    {data?.description}
                </h3>}
        </div>
    </>);
}

export default Accordion;
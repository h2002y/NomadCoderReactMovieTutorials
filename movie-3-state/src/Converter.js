import React from "react";
import ClockApp from "./Clock";
import DistanceApp from "./Distance";

function ConverterApp() {
    const [index, setIndex] = React.useState("0");
    const onSelect = (event) => setIndex(event.target.value);
    
    return (
        <>
            <h1>Converter by User</h1>
            <select value={index} onChange={onSelect}>
                <option value="0">Minutes & Hours</option>
                <option value="1">Kilos & Miles</option>
            </select>
            {index === "0" ? <ClockApp /> : null}
            {index === "1" ? <DistanceApp /> : null}
        </>
    );
};

export default ConverterApp;
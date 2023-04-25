import React from "react";

function DistanceApp() {
    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState();

    const onChange = (event) => setAmount(event.target.value);
    const reset = () => setAmount(0);
    const onFlip = () => setFlipped((current) => !current);

    const Distance = () => (
        <>
            <h1 className="distance">Distance Converter</h1>
            <div>
                <label htmlFor="kilos">Kilos</label>
                <input value={flipped ? amount / 1.609344 : amount} disabled={flipped} onChange={onChange} id="kilos" type="number" placeholder="Kilos"></input>
            </div>
            <div>
                <label htmlFor="miles">Miles</label>
                <input value={flipped ? amount : amount * 1.609344} disabled={!flipped} onChange={onChange} id="miles" type="number" placeholder="Miles"></input>
            </div>
            <button onClick={onFlip}>Flip</button>
            <button onClick={reset}>Reset</button>
        </>
    );
    return (<Distance />);
};

export default DistanceApp;
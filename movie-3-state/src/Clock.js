import React from "react";

function ClockApp(){
    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState();
    const onChange = (event) => {
        setAmount(event.target.value);
    };

    const reset = () => setAmount(0);
    const onFlip = () => setFlipped((current) => !current);

    const Clock = () => (
        <>
            <h1 className="clock">Clock Converter</h1>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input disabled={flipped} onChange={onChange} value={flipped ? amount * 60 : amount} id="minutes" placeholder="Minutes" type="number"></input>
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input disabled={!flipped} onChange={onChange} value={flipped ? amount : Math.floor(amount / 60)} id="hours" placeholder="Hours" type="number"></input>
            </div>
            <button onClick={onFlip}>Flip</button>
            <button onClick={reset}>Reset</button>
        </>
    );
    return (<Clock/>);
}

export default ClockApp;
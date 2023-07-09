import React from "react";

/** props에 Event Listener 함수 전달 시 주의사항!
 * HTML 태그의 onclick과 JSX Component 선언 부분의 onCLick은
 * Event Listener지만
 * Component 호출 부분의 props 속성 onClick은
 * Event Listener가 아닌
 * props의 속성명 중 하나이다.
 * 
 * props의 onClick에 함수를 전달한다고 해도
 * 실제 Event Listener가 생성되지 않는다.
 * 
 * 반드시 Component 선언 부분에서
 * props를 받아서 연동을 해줘야한다.
 * 
 * 연동 방법 
 * Event Listener={props에 전달한 함수의 속성명}
 * ex) 위의 Button Component 안의 onClick={onClick}
 * ex) 아래 return문의 onClick은 props 속성명
 *      
 */

function PropsFunction(){
    const [value, setValue] = React.useState("Save Changes");
    const [counter, setCounter] = React.useState(0);
    
    const changeValue = () => setValue("Revert Changes");
    const changeCounter = () => setCounter((curr) => curr + 1);

    const Button = ({onClick, text}) => {
        console.log(text,"was rendered");
        return (<button
            onClick={onClick}
        >{text}</button>);
    };


    return(
        <>
            <hr/>
            <h4>Passing props function and useState!</h4>
            <h5>Using same Button Component</h5>
            <h5>See console to check re-rendering</h5>
            <Button onClick={changeValue} text={value} />
            <Button onClick={changeCounter} text={counter} />
        </>
    );
}

export default PropsFunction;
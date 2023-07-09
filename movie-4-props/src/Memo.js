import React from "react";

/** React Memo
 * 
 * React Component에서 부모의 속성(state)이 변경되어 리렌더링 될 때 
 * 모든 자식들도 자신의 속성 변화와 상관없이 리렌더링된다.
 * 
 * ex) PropsFunction에서 자식인 counter Button을 클릭하여
 *     Counter의 수를 증가시키면
 *     변화가 일어나지 않은 다른 자식인 Save-Revert Button도 
 *     같이 리렌더링이 된다.
 * 
 * 이러한 불필요한 리렌더링을 방지하기 위해
 * React Memo를 사용한다.
 * 
 * React.Memo
 * 자식의 props가 변경되지 않았다면 리렌더링 하지 않는다.
 * 
 * 단 props로 콜백 함수를 전달할 경우
 * props가 바뀔때마다 콜백 함수들도 새로 만들어져서
 * 결과적으로 Memo를 통해서 리렌더링을 방지할 수 없다.
 * 따라서 콜백 함수의 리렌더링을 막기 위해서는 useCallback 훅을 사용해야 한다.
 * 
 * 또한 memo를 사용할 컴포넌트는 반드시 함수 외부에 선언해야 한다.
 * 함수 내부에 선언할 경우 함수(function Memo)가 호출될 때 마다 
 * 새로운 컴포넌트로 생성되어 매번 다른 컴포넌트로 인식하게 된다.
 * 
 * memo Component 선언 위치의 경우 
 * 해당 Component를 다양한 파일에서 사용할 예정이라면 전역으로 선언한다.
*/

const Button = React.memo(({onClick, text}) => {
    console.log("Memo",text, "was rendered");
    return (<button onClick={onClick}>{text}</button>);
});

function Memo(){
    const [value, setValue] = React.useState("Save Changes");
    const [counter, setCounter] = React.useState(0);
    
    const changeValue = React.useCallback(() => setValue("Revert Changes"), []);
    const changeCounter = React.useCallback(() => setCounter(curr => curr + 1), []);

    return (
        <>
            <h4>Using React Memo to prevent children Re-Render</h4>
            <Button text={value} onClick={changeValue} />
            <Button text={counter} onClick={changeCounter} />
            <Button text="Continue" />
        </>
    );
}

export default Memo;
import React, { useCallback } from "react";

/** props에 Event Listener 함수 전달 시 주의사항1 !
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
 * 연동 방법 Event Listener={props에 전달한 함수의 속성명}
 * ex) 위의 Button Component 안의 onClick={onClick}
 * ex) 아래 return문의 onClick은 props 속성명
 *
 */

/** 부모로 자식 Component 여러개 렌더링 시 주의사항2 !
 * useState 사용시 부모가 변경되면 모든 자식 Component가 리렌더링된다.
 * counter 버튼을 누르면 counter 버튼만 리렌더링 되어야 하지만 value 버튼도 리렌더링 된다.
 * 원하는 Component만 리렌더링 하기 위해서 react memo를 사용한다.
 *
 * 주의할 점은 memo에 사용될 JSX Component는 전역이어야 한다.
 * Button과 MemorizedBtn이 PropsFunction(){} 안에 있으면
 * memo가 작동하지 않는다.
 *
 * 또한 props로 함수를 전달할 경우
 * useState로 인한 렌더링이 일어날때마다
 * 새로운 함수가 생성되어 MemorizedBtn에 전달되기 때문에
 * memo가 작동하지 않는디ㅏ.
 *
 * 버튼 클릭 시 동작하는 함수 changeValue와 changeCounter에
 * useCallback을 사용해서 첫렌더링 때만 유일한 함수를 생성하고 계속 사용하게 해야
 * 함수를 props로 전달받는 Component가 리렌더링이 일어나지 않는다.
 */

const Button = ({ onClick, text }) => {
  console.log(text, "was rendered");
  return <button onClick={onClick}>{text}</button>;
};
const MemorizedBtn = React.memo(Button);

function PropsFunction() {
  const [value, setValue] = React.useState("Save Changes");
  const [counter, setCounter] = React.useState(0);

  const changeValue = React.useCallback(() => setValue("Revert Changes"), []);
  const changeCounter = React.useCallback(() => setCounter((curr) => curr + 1), []);

  return (
    <>
      <hr />
      <h4>Passing props function and useState!</h4>
      <h5>Using same Button Component</h5>
      <h5>See console to check re-rendering</h5>
      {/* <Button onClick={changeValue} text={value} />
      <Button onClick={changeCounter} text={counter} /> */}
      <h4>Below are the React.memo with useCallback</h4>
      <MemorizedBtn onClick={changeValue} text={value} />
      <MemorizedBtn text="Continue" />
      <MemorizedBtn onClick={changeCounter} text={counter} />
    </>
  );
}

export default PropsFunction;

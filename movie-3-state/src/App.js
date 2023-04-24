import React from 'react';
import ReactDOM from 'react-dom/client';

/** React manual render by data change
 * 수동으로 상태(data)를 변경하면 화면이 갱신되지 않는다.
 * useState를 사용하지 않을 경우 root.render(컴포넌트)로 직접 리렌더링해줘야한다.
 * 또한 리렌더링 대상 말고도 그 상태가 속한 모든 컴포넌트도 리렌더링이 된다.
 * 따라서 불필요한 컴포넌트들까지 리렌더링이 되기 때문에 비효율적이다.
 */

let counter = 0;

function countUp(){
  counter++;
  const root = ReactDOM.createRoot(document.getElementById('manual'));
  root.render(
      <AppOne />
  );
}

const Button = () => (
  <button onClick={countUp}>Click me!</button>
);

const Span = () => (
  <h3>I am clicked {counter} times</h3>
);

function AppOne() {
  return (
    <div className="AppOne">
      <Span />
      <Button />
    </div>
  );
}

/** React useState render by data change 
 * 
 * useState는 React function component 또는  
 * custom React hook function 안에서만 사용이 가능하다.
 * 따라서 function 안에 넣으면 정상작동 하지 않는
 * manual code와는 반대로 함수 안에 넣어줘야 한다.
*/

function AppTwo(){
  /** React Hook useState 
   * let [변수명, 변수조정자] = React.useState(변수초기값);
   * 변수명으로 직접 값을 조정하는 
   * 대신 변수조정자로 값을 전달해야
   * 변수조정자(새로운 값);
   * useState가 자동으로 화면을 리렌더링 해준다.
   * 
   * 리렌더링이 일어날때는 오직 useState의 변수명만 리렌더링된다.
   * <h3>I am clicked {counterTwo} times by useState</h3> 코드의
   * I am clicked ... times by useState 부분은 리렌더링 되지 않는다.
   * 
   * useState의 상태가 변경되면 useState의 변수를 사용하는 
   * <h2>{counterTwo}</h2> 부분도 리렌더링된다.
   * useState는 그 변수에 해당하는 모든 화면의 요소를 리렌더링한다
  */
  let [counterTwo, setCounterTwo] = React.useState(0);
  
  function countUpTwo(){
    /**직접 할당 방법
     * setCounterTwo(counterTwo + 1);
     * useState의 modifier는 비동기적이라서
     * 리렌더링 할 시 전부 다 모아서 한번에 값을 갱신한다
     * 따라서 위의 방법으로는 modifier를 여러번 실행시 값이 제대로 반영되지 않을 수 있다.
     * 
     * ex)
     * function onClick(){
     * setCounter(counter + 1);
     * setCounter(counter + 1);
     * }
     * 을 실행할 경우 결과는 + 2가 되어야하지만 +1이 된다.
    */

    // 둘다 로직은 똑같지만 아래의 코드가 더 안전한 방법
    // 기존 값을 토대로 새 useState 값을 변경할 때
    // useState modifier함수 안에
    // 변수 대신 함수를 사용하면 react는 current값이 현재 값이라는 것을 보장해준다.
    setCounterTwo((current) => current + 1);
  }
  
  const ButtonTwo = () => (
    <button onClick={countUpTwo}>Click me! by useState</button>
  );
  
  const SpanTwo = () => (
    <h3>I am clicked {counterTwo} times by useState</h3>
  );
  return (
    <div className='AppTwo'>
      <SpanTwo />
      <ButtonTwo />
      <h2>{counterTwo}</h2>
    </div>
  );
}

export {AppOne, AppTwo};

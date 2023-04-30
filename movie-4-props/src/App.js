/** React props
 * Component에게 속성을 전달할 수 있다.
 * props(properties)을 Component에 넘겨줌으로써
 * Component가 html/css 속성을 가지게 할 수 있다.
 * 또한 사용자가 직접 새로운 속성명을 생성하고 전달해서
 * custom props로 사용할 수도 있다.
 * 
 * props에는 Number, Boolean, String, Function 등
 * 다양한 타입의 데이터들을 넘겨줄 수 있다.
 * 
 * 동일한 Component에 각자 다른 props 값을 전달해서
 * Component의 재사용성을 높일 수 있다.
 * ex) 웹사이트 내 button의 스타일과 기능
 * 
 * ReactJS는 Component 호출 시
 * Component 안에 넣는 모든 property들을 Object에 넣는다.
 * 이 Object는 Component 선언단에서 첫번째 인자(Parameter)로 들어온다.
 * props Object는 Component의 첫번째이자 유일한 인자다.
 * 
 * Component 내에서 속성에 접근할 시
 * props.속성명 으로 접근할 수 있다.
 * 
 */

function App() {
  const Button = (props) => (
    <button style={{
      width: props.width,
      height: "50px",
      border: "none",
      borderRadius: "25px",
      backgroundColor: props.bgColor,
    }}>
      {props.name}
    </button>
  );


  /**
   * props는 고정된 명령어가 아닌 사용자가 명시한 이름이기 때문에
   * props 대신 다른 이름으로도 사용이 가능하다.
   * ex) Button2 Component 의 amIProps
   */

  const Button2 = (amIProps) => (
    <button style={{
      width: amIProps.width,
      height: "50px",
      border: "none",
      borderRadius: "25px",
      backgroundColor: amIProps.bgColor,
    }}>
      {amIProps.name}
    </button>
  );


/**
 * props는 Object이기 때문에
 * 인자값으로 props를 사용하는 대신 
 * {}를 사용해서 바로 속성에 접근할 수 있다.
 * ex) ShortCut Component
 */
  const ShortCut = ({fruitName, bgColor}) => (
    <h5 style={{
      backgroundColor: bgColor,
    }}>I am {fruitName}!</h5>
    );
      
  return (
    <>
      <>
        <Button bgColor="salmon" width="200px" name="Salmon Button" />
        <Button2 bgColor="beige" width="300px" name="Beige Button" />
      </>
      <>
        <ShortCut fruitName="Peach" bgColor="pink"/>      
        <ShortCut fruitName="Apple" bgColor="red" />      
        <ShortCut fruitName="Mango" bgColor="yellow" />      
        <ShortCut fruitName="Melon" bgColor="lightgreen" />      
      </>
    </>
  );
};

export default App;

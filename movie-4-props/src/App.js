
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

  // const Div = () => (
  //   <>
  //     <h4>props는 props 변수를 사용하는 대신</h4>
  //     <h4>컴포넌트 파라미터 () 안에</h4>
  //     <h4>중괄호 {'{'}속성명{'}'} 으로 속성명을 그대로 사용할 수 있다. </h4>
  //   </>
  // );

  const Direct = ({fruitName}) => (
    <h5>I am {fruitName}!</h5>
  );

  return (
    <>
      <Button bgColor="salmon" width="200px" name="Salmon Button" />
      <Button bgColor="beige" width="300px" name="Beige Button" />
      <Direct fruitName="Peach" />      
      <Direct fruitName="Apple" />      
      <Direct fruitName="Mango" />      
      <Direct fruitName="Melon" />      
    </>
  );
};

export default App;

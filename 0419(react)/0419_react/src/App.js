import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import HiComponent from "./HiComponent";
import ClassComponentEx from "./ClassComponentEx";
import FunctionComponentEx from "./FunctionComponentEx";
import HiComponentEx from "./HiComponentEx";
import Hello from "./Hello";

function App() {
  const test = () => {
    console.log("콘솔체크");
  };
  return (
    <>
      {/*<ClassComponent name={"홍길동"} age={13} func={test} />*/}
      {/*/!* <ClassComponent name="성춘향" age="11" /> *!/*/}
      {/*<ClassComponent />*/}
      {/*<FunctionComponent name="둘리" age="300" />*/}
      {/*<FunctionComponent />*/}
      {/*<HiComponent />*/}
      <ClassComponentEx func={test} />
      <FunctionComponentEx />
      <HiComponentEx />
      <hr />
      <Hello />
    </>
  );
}
export default App;

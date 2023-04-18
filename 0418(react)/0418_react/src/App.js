import Larva from './Larva'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'

function App() {
  return <>
      <ClassComponent name="홍길동" age="13"/>
      <ClassComponent name="성춘향" age="11"/>
      <ClassComponent />
     <FunctionComponent name="둘리" age="100"/>
    <FunctionComponent />

  </>
}

export default App;

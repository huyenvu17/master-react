import './App.css'
import ComponentWillUnmountTest from './ComponentWillUnmountTest'
import Header from './Header'
import Test from './Test'
import 'bootstrap/dist/css/bootstrap.css'
import { UseContextComponent } from './UseContextComponent'
import StudentManagement from './pages/StudentManagement'
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Test />
      <ComponentWillUnmountTest /> */}
      {/* <UseContextComponent /> */}
      <StudentManagement />
    </div>
  )
}

export default App

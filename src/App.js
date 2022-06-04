import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Courses from './Component/Courses/Courses';
function App() {
  return (
    <div className="App">

      <h1>Welcome to ProDev</h1>
      <a href="/home">Home</a><br />
      <a href="/courses">Courses</a>
      <Router>
        <Routes>
          
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/courses' element={<Courses></Courses>}></Route>

        </Routes>


      </Router>




    </div>
  );
}

export default App;

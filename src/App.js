
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Technology from './Technology.js';
import Food from "./Food.js";
import {ProvideData} from "./ContextApi.js";
import Bollywood from './Bollywood.js';
import Hollywood from "./Hollywood.js";
import Fitness from "./Fitness.js"
import Article from "./Article.js";


// import {decrementCounter,incrementCounter} from "./Redux/Action/counterAction.js";
// import {useDispatch,useSelector} from "react-redux";



    //  <button onClick={()=>dispatch(decrementCounter())}>MINUS</button>
    //   <input value={myState} />
    //   <button onClick={()=>dispatch(incrementCounter())}>PLUS</button>

     // const myState= useSelector((state)=>state.handleMyCounter);
  // const dispatch=useDispatch();

function App() {
 
  return (
    <Router>
      <ProvideData>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/food" element={<Food />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
      <Route path="/food" element={<Food />} />
      <Route path="/article/:path" element={<Article />} />
      </Routes>
      </ProvideData>
    </Router>






  



    
  );
}

export default App;

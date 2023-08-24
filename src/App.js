import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Classcomponent from './Classcomponent';
function App() {
  function InsideFunctionalComponent(){
    return(
      <h3>Insider Functional Component</h3>
    )
  }
  return (
    <div>
        <Navbar />
        <Detail />
        <Classcomponent />
        {/* {InsideFunctionalComponent()} */}
        <InsideFunctionalComponent />
    </div>
   
  );
}

//We can use differet functions in same file
function Detail(){
  return(
      <> 
      You can use different functions in same file
      <h2>We can use another function inside a functioinal component but we cannot use that component outside</h2>
      </>
      
  )
}

// We can create anohter function in same file
export default App;

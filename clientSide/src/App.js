import {Signup} from './Components/Signup';
import {Login} from './Components/Login';
import {Forgotpassword} from './Components/Forgotpassword';
import {Homepage} from './Components/Homepage';


function App() {
  return (
    <div className="App">
    <Signup/>
    <Login />
    <Forgotpassword />
    <Homepage />

    </div>
  );
}

export default App;

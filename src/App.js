import "./App.css";
import  "bulma/css/bulma.css";


import SignupForm from "./components/SignupForm.js";
import CoolButton from "./components/CoolButton.js";
import Message from "./components/Message.js";

function App() {
  return (
    <div className="App">
      <SignupForm />
       <br></br>
      <CoolButton isSuccess>Button 1</CoolButton>&nbsp;&nbsp;&nbsp;&nbsp;
      <CoolButton> Button 2 </CoolButton>&nbsp;&nbsp;&nbsp;
      <CoolButton  isSmall  isDanger  isRounded>Button 1</CoolButton>&nbsp;&nbsp;
      <CoolButton  isSmall  isSuccess>Button 2</CoolButton>
      
      <Message  isInfo  title="Hello World">
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	      <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
import {useState} from "react";
import './App.css';
import { BtnArea } from './components/BtnArea';
import {Display} from "./components/Display";

const operators = ["%", "/","*", "-","+"];

const App = () => {

const [strToDisplay, setStrToDisplay] = useState ("");
const [lastOperator, setlastOperator] = useState ("");

const  handleOnButtonClick = (val) => {
  console.log(val);
  if (val === "C"){
    return setStrToDisplay(strToDisplay.slice (0,-1));
  }


  if (val === "AC"){
    return setStrToDisplay("");
  }

  if (val === "="){

    const lastChar = strToDisplay [strToDisplay.length -1];

    let temStr =strToDisplay
    if (operators.includes (lastChar)){
      temStr=strToDisplay.slice (0,-1);

    }
    return setStrToDisplay(eval(temStr).toString());
  
    
  }

 if (operators.includes(val)) {
  console.log("you clicked operators");
  if (!strToDisplay) {
    return;
  }
 let temStr = strToDisplay
  const lastChar = strToDisplay[strToDisplay.length -1];

  if (operators.includes (lastChar)){
    temStr = strToDisplay.slice (0, -1);

  }
  setStrToDisplay(temStr +val);
  setlastOperator(val);
  return;
 }


//  dot 

if (val === "."){
if (lastOperator){

  const operatorIndex = strToDisplay.lastIndexOf
  (lastOperator)

  const numbeAfterlastOperator = strToDisplay.slice
  (operatorIndex);

  if(numbeAfterlastOperator.includes (".")){
    return;
  }
}
if (!lastOperator && strToDisplay.includes(".")){
  return;
}


}
 setStrToDisplay(strToDisplay+val);
  // if (val === "lastChar"){
  //   return setStrToDisplay(strToDisplay.slice (0,-1));
  // }

  setStrToDisplay (strToDisplay+val);
};

  return (
    <div>
      <div className="wrapper">
   
    
        <div className="calculator">
           
           
            {/* <div className="display">0.00 </div> */}

         <Display strToDisplay = {strToDisplay}/>
         <BtnArea handleOnButtonClick={handleOnButtonClick}/>
        
    </div>
   
      

    </div>  
    </div>
  );
}

export default App;

import { useEffect, useState } from "react"

function ShowAge(){
  
  let [age,setAge] = useState(23);
  let [sibling,setSibling] = useState(10);

  let changeAge = ()=>{
    setAge(age+1);
    document.getElementById("age").innerHTML = "Today I am "+age+" Years of Age"; 
  }

  let changeSibling = ()=>{
    setSibling(sibling+1);
    document.getElementById("showsiblings").innerHTML = "I have "+sibling+" siblings";
  }

  let [count,setCount] = useState(0);
  
  useEffect(()=>{
    document.title = "You are "+age+" Years of Age";
  })




  return <>
  <p id="showage">Today I am {age} Years of Age </p>
  <button id="buttonage" onClick={changeAge}>Get older!</button>
  <p id="showsiblings">I have {sibling} siblings </p>
  <button id="buttonsib" onClick={changeSibling}>More siblings!</button>
  <p id="count">Count value is: {count}</p>
  <button class="buttoncount" onClick={()=> setCount(0)}>Reset</button><br/>
  <button class="buttoncount" onClick={()=> setCount(count+1)}>Plus(+)</button><br/>
  <button class="buttoncount" onClick={()=> setCount(count-1)}>Minus(-)</button>
  
  
  </>
}

export {ShowAge}
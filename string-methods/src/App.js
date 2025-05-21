
import './App.css';

function App() {
  let string = "hi therre this is shivakumar "
  let string2 = "HI THERRE THIS IS SHIVAKUMAR "
  return (
    <div className="App">
      <h1> String Methods</h1>
    <button type='button' onClick={()=>{
      console.log(string.toUpperCase())
      console.log(string2.toLocaleLowerCase)
    }}>To upper case</button> 
    <button type='button' onClick={()=>{
      let string1 = "shiva"
      let string2 = "kumar"
      let name = string1.concat(string2)
      console.log(name)
    }}>string Concate</button> 
     <button type='button' onClick={()=>{
      let string1 = "1    shiva kumar               1"
     
      console.log(string1.trim());
      console.log(string1.trimStart())
      console.log(string1.trimEnd())
     }}>Trim</button>
     <button type='button' onClick={()=>{
      let string = "hi there hava a lunch"
      console.log(string.padStart(29,"S"))
      console.log(string.padEnd(29,"S"))
     }}>Pad String End / padStart</button> 
     <button type='button' onClick={()=>{
      let string = "shiva"
      console.log(string.repeat(100))
     }}>Repeat</button> 
     <button type='button' onClick={()=>{
      let string = "India is My country all India ns are my relatives "
      console.log(string.replace("India","bharat"))
      console.log(string.replaceAll("India","bharat"))
     }}>Replace / replace All</button> 
     <button type='button' onClick={()=>{
      let string = "very good, morning ,my world"
      console.log(string.split(" "))
     }}> Split</button> 
     <button type='button' onClick={()=>{
      let alphabets = " abcdefghijklmnopqrstuvwxyz"
      console.log(alphabets.slice(15,21))
      console.log(alphabets.substring(15,21))
     }}>Slic Substring</button> 
     <button type='button' onClick={()=>{
      let alphabets = "abcdefghijklmnopqrstuvwxyz"
      console.log(alphabets.length)
      console.log(alphabets[18])
      console.log(alphabets.at(10))
      console.log(alphabets.charAt(7))
     }}>length / charat/at</button> 
     <button type='button' onClick={()=>{
      let codeString = "vtfcdijsbvydijmo"
      for(let i = 0;i<codeString.length; i++){
        console.log(codeString.charCodeAt(i))
      }
      console.log(codeString.charCodeAt("s"))
     }}>CharCode At</button>
     <button type='button' onClick={()=>{
      for(let i =3077; i<= 3100;i++){
        console.log(String.fromCharCode(i))
      }
      console.log(String.fromCharCode(3077))
     }}>FromCharCode</button>        
    </div>
  );
}

export default App;

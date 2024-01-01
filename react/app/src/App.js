import './App.css';

function handleClick() { 
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt('type a number'); 
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}
function App() {
  return (
    <div className = "App">
      <button onClick = {handleClick}>
        Guess the number between 1 and 3
      </button>
    </div>
  )
}

export default App;

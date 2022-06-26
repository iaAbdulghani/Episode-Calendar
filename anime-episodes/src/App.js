import logo from './logo.svg';
import './App.css';

function App() {

  async function submitName(event) {
    event.preventDefault()
    console.log("test")
    console.log(event.target.name.value)
    let CLIENT_ID = '9451f3be2c55beba0078200b53b2be46'
    const response = await fetch(`https://api.myanimelist.net/v2/users/Hydra849/animelist`,{
      headers:{
        'X-MAL-CLIENT-ID' : `9451f3be2c55beba0078200b53b2be46`
      }
    }
    )
    const json = await response.json()
  }



  return (
    <div className="App">
        <form onSubmit = {submitName}>
          <input id="name" type = "text" placeholder = "MAL Username" required/>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;

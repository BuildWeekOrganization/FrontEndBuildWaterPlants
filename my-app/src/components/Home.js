
import { Link} from 'react-router-dom';
function Home(){
return (

    <div className="App">
      <div id='Header'>
        <h1>Water My Plants!</h1>

        <Link to='/login'>Log In</Link>
      </div>
    </div>

  );
}

export default Home;

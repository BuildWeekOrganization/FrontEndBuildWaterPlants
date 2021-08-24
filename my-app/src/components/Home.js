
import { Link} from 'react-router-dom';
function Home(){
return (

    <div className="App">
      <div id='Header'>

        <Link to='/login'> Log In </Link>
        <Link to='/signup'> Sign up </Link>
      </div>
    </div>

  );
}

export default Home;

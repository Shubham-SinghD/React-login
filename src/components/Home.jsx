// import LoginPage from "./LoginPage";
// import Register from "./Register";
import {Link} from 'react-router-dom'

function Home(){
    return(
        <>
     <Link to="/Register">Registration</Link>
     <br />
     <Link to="/login">Login here</Link>
   
     
        </>
    );
}

export default Home
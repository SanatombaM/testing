import './navbar.css';
import logo from './logo.svg';


function Navbar(){
    return(
        <div className="Navbar">
            <img src={logo} className="Navlogo" alt="logo" />            
            <ul >
               <a className="active" href="#Home">Home</a>
                <a href="#News">News</a>
                <a href="#About">About</a>
                <a href="#Contact">Contact</a>
            </ul>
            
        </div>
        
    );
}

export default Navbar;
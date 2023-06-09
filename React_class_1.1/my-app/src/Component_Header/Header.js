
import "./Header.css";

const Header = () => {

    const welcomeMessage = "website title";
    const navlinks = ["Home", "About", "Contact"];

    return (
        <header>
        <nav className='navigation'>
          <h3>{welcomeMessage}</h3>
          <ul className='navlinks'>
            {
              navlinks.map((link) => {
                return (
                  <li key={link}>{link}</li>
                )
              })
            }
          </ul>
        </nav>
      </header>

    )
}

export default  Header;
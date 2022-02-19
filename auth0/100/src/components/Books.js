
import logo from '../book.png';
import '../App.css';

// import components
import LogoutButton from './LogoutButton';

function Books() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reack is Amazingly Awesome!
        </p>
        <LogoutButton />
      </header>
    </div>
  );
}

export default Books;

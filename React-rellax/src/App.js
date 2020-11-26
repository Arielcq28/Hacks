import './App.css';

// Material UI
import Button from '@material-ui/core/Button';

// Illustration
import Illustration from './components/illustration'

// Rellax
import Parallax from 'react-rellax'
// Negative go down and looks has 3D effect, postive moves up and disappear

function App() {
  return (
    <>
    <div className="app">
      <div className="left-side">
        <Parallax speed={ -10 }> 
        <h1>React Rellax App</h1>
        </Parallax>
        <Parallax speed={ 5 }>
        <p className='paragraphs'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
        </Parallax>
        <Parallax speed={ 3 }>
        <p className='paragraphs'> Nunc id cursus metus aliquam eleifend mi in nulla posuere.</p>
        </Parallax>
        <Parallax speed={ 1 }>
        <p className='paragraphs'> Leo duis ut diam quam nulla. </p>
        </Parallax>
        <Button variant="contained" color="primary" style={{'margin-top': '50px'}}> Learn more... </Button>
      </div>

      <div className="right-side">
        <Parallax speed={ -3 } style={{'padding-top': '25VH'}} > 
          <Illustration />
        </Parallax>        
      </div>
    </div>

    <div className="red-section">
      <h2> Enjoy! </h2>
    </div>
    </>
  );
}

export default App;

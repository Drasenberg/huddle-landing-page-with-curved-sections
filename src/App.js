import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import classes from './Styles/App.module.scss';

function App() {
  return (
    <div className={classes.App}> 
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

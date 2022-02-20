
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Coinpage from './pages/Coinpage';
import Homepage from './pages/Homepage';

function App() {

  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor: "#525252",
      color: "white",
      minHeight: "100vh"
    },
  }))

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route path='/coins/:id' element={<Coinpage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

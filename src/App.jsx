// import { Outlet } from 'react-router-dom'
import './index.css'
import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <Header />
      <Homepage /> {/*Renders the current route's component */}
    </div>
  );
}

export default App;

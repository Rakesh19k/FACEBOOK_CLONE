import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import LogIn from './components/LogIn';
import Sidebar from './components/Sidebar';
import SideBarRight from './components/SideBarRight';
import { useStateValue } from './components/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <LogIn />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <SideBarRight />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

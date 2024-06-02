import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { AppProvider } from './Context/AppContext';
function App() {

  return (
    <div
      className='App'
    >
      <AppProvider>
        <Header  />
        <Content  />
        <Sidebar />
      </AppProvider>

      
    </div>
  );
}

export default App;

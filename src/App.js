import logo from './logo.svg';
import './App.css';
import Address from './Component/profil/Address'
import ProfilePhoto from './Component/profil/ProfilePhoto';
import FullName from './Component/profil/FullName';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      
    </div>
  );
}

export default App;

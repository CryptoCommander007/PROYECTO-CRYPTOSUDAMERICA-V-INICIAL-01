import logo from './logo.svg';
import './App.css';
import BannerPage from './components/BannerPage/BannerPage';
import HomepageCover from './components/HomepageCover/HomepageCover';
import CardSection from './components/CardSection/CardSection';
import MenuPage from './components/MenuPage/MenuPage';
import SocialNetwork from './components/SocialNetwork/SocialNetwork';
import FooterSection from './components/FooterSection';
import SearchBar from './components/SearchBar/SearchBar';
import NotificationSubscriptionForm from './components/NotificationSubscriptionForm/NotificationSubscriptionForm';
function App() {
  return (
    <div className="App">
      <BannerPage />
      <SearchBar />
      <MenuPage />
      <HomepageCover />
      <CardSection/>
      <SocialNetwork/>
      <NotificationSubscriptionForm/>
      <FooterSection/>
      {/* Aquí puedes agregar más componentes o contenido según sea necesario */}
    </div>
  );
}

export default App;

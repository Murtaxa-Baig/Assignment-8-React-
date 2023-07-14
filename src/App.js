import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
import './assets/css/swiper-bundle.min.css'
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

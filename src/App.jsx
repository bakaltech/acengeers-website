import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BackgroundBubbles from './components/BackgroundBubbles';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="flex flex-col min-h-screen relative">
          <BackgroundBubbles />
          <Header />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;

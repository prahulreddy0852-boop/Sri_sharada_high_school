import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Seo from './components/Seo';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import AchievementsPage from './pages/AchievementsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import { useRoute } from './lib/router';

function App() {
  const [route, navigate] = useRoute();

  const page = (() => {
    switch (route) {
      case 'home': return <HomePage navigate={navigate} />;
      case 'about': return <AboutPage navigate={navigate} />;
      case 'academics': return <AcademicsPage navigate={navigate} />;
      case 'admissions': return <AdmissionsPage navigate={navigate} />;
      case 'facilities': return <FacilitiesPage navigate={navigate} />;
      case 'gallery': return <GalleryPage navigate={navigate} />;
      case 'achievements': return <AchievementsPage navigate={navigate} />;
      case 'news': return <NewsPage navigate={navigate} />;
      case 'contact': return <ContactPage navigate={navigate} />;
      default: return <HomePage navigate={navigate} />;
    }
  })();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Seo page={route} />
      <Navbar route={route} navigate={navigate} />
      <main className="flex-1">{page}</main>
      <Footer navigate={navigate} />
      <FloatingButtons />
    </div>
  );
}

export default App;


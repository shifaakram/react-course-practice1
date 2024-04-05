import { Route, Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/layout';
function App() {
  return (
    
      <Layout>
  
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/newmeetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      </Layout>
    
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Assuming the file is named Home.js
import SignIn from './pages/SignIn'; // Assuming the file is named SignIn.js
import SignUp from './pages/SignUp'; // Assuming the file is named SignUp.js
import About from './pages/About'; // Assuming the file is named About.js
import Profile from './pages/Profile'; // Assuming the file is named Profile.js
import Header from './components/Header';
export default function App() {
  return (
    <BrowserRouter>
    <Header />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

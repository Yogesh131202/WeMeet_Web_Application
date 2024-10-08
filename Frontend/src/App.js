import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/landing.jsx';
import Authentication from './pages/authentication.jsx';
import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import VideoMeetComponent from './pages/videoMeet.jsx';
import HomeComponent from './pages/home.jsx';
import History from './pages/history.jsx';

function App() {
  return (
    <div className="App">
     <Router>
      <AuthProvider>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
        </Routes>
        </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
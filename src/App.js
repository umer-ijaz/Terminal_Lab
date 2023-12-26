import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsApi } from 'https://api.spacexdata.com/v3/missions';
import { fetchRocketsApi } from 'https://api.spacexdanpm ta.com/v4/rockets';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile'; 
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionsApi());
    dispatch(fetchRocketsApi());
  }, [dispatch]);

  const missions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketReducer);
  return (
    <Router>
      <div style={{ maxWidth: '100%' }}>
        <Routes>
          <Route path="/Rockets" element={<Rockets rockets={rockets} />} />
          <Route path="/Missions" element={<Missions missions={missions} />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
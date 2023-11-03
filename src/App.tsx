import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Routes, Route } from 'react-router-dom';

import { db } from './firebase';
import PrintCards from './components/PrintCards';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  const fetchPost = async () => {
    await getDocs(collection(db, 'cards')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log({ newData });
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/print" element={<PrintCards />} />
      </Routes>
    </>
  );
};

export default App;

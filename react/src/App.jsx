import UserInterface from './views/UserInterface'
import React, { useState, useEffect } from 'react';
import LoaderScreen from './views/components/LoaderScreen';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  return (
    <div className="relative w-full h-screen">
      {loading ? (
        <LoaderScreen />

      ) : (

          <UserInterface />
      )}
    </div>
  )
}

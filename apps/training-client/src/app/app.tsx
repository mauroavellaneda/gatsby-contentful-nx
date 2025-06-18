import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data: { message: string }) => setMessage(data.message));
  }, []);

  return <h1>{message || 'Loading...'}</h1>;
}

export default App;

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(() => {
    async function fetchdata() {
      const body = {
        "id": "Username",
        "userid": "kainez"
      };
      const data = JSON.stringify(body);

      try {
        const response = await fetch('https://be-liard-phi.vercel.app/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data,
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData);

      } catch (error) {
        console.error('Error:', error);
      }


      const body2 = {
        "id": "Username",
        "userid": "kainez"
      };
      const data2 = JSON.stringify(body2);

      try {
        const response2 = await fetch('https://be-liard-phi.vercel.app/api/feed/content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data2,
          credentials: 'include',
        });

        if (!response2.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData2 = await response2.json();
        console.log(responseData2);

      } catch (error2) {
        console.error('Error:', error2);
      }
    }



    fetchdata()


  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          count
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

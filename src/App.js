import { BrowserRouter, Route, Routes, Redirect, Navigate, useParams } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home';
import User from './components/User';

function App() {

  const [users, setUsers] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const fetchusers = async () => {
    try {
      setLoading(true)
      const res = await fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
      const json = await res.json()
      setUsers(json)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchusers()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/users" />} />
          <Route exact path="users" element={<Home users={users} loading={loading} setLoading={setLoading} />} />
          <Route exact path="users/:id" element={<User users={users} loading={loading} setLoading={setLoading} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

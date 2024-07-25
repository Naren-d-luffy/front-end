import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './nav';
import '../assets/style/dash.css'
import Foot from './footer'

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dash');
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("Deleting item with id:", id); 
      await axios.post('http://localhost:5000/delete', { id });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item) => {
    navigate(`/edit/${item._id}`); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data){

  return (
    <div className='main'>
        <div className='dash'>
            <Nav />
        {data.map((item, index) => (
          <div key={index} className='data-item'>
            <div>
            <h2 className='na'>Name: {item.name}</h2>
            <p className='em'>Email: {item.email}</p>
            <p className='em'>Subject: {item.subject}</p>
            <p className='em'>Message: {item.message}</p>
            </div>
            <div>
            <button className='edi' onClick={() => handleEdit(item)}>Edit</button>
            <button className='del' onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
        </div>
        <div>
            <Foot />
        </div>
    </div>
  )}
}

  export default Dashboard;
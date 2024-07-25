  import React, { useState, useEffect } from 'react';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import axios from 'axios';
  import '../assets/style/App.css';
  import leftimg from '../assets/images/Left.png';
  import ContactForm from './ContactForm';
  import Dashboard from './Dashboard'
  import Nav from './nav';
  import Foot from './footer';
  import Edit from './Edit';

  const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/landing');
          setData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="App">
              {data.length > 0 && (
                <>
                  <div className='head'>
                    <Nav />

                    <div className='body1'>
                      <h1 className='bh1'>{data[1].bh1}</h1>
                      <p className='ph1'>{data[1].ph1}</p>
                      <p className='ph1'>{data[1].ph12}</p>
                      <div className='btd'>
                        <Link to='#' className='b1tn-1'>{data[1].b1tn_1}</Link>
                        <Link to='#' className='b1tn-2'>{data[1].b1tn_2}</Link>
                      </div>
                    </div>
                  </div>

                  <div className='part-2'>
                    <div className='word2'> 
                      <h1 className='p2h1'>
                        {data[3].p2h1}
                      </h1>
                      <p className='p2p1'>
                        {data[3].p2p1}
                      </p>
                      <p className='p2p1'>
                        {data[3].p2p2}
                      </p>
                    </div>
                    <div className='eleft'>
                      <div className='left1'>
                        <img src={leftimg} alt='Left Image' />
                        <h2 className='lh2'>{data[3].lh2}</h2>
                        <p className='lp2'>{data[3].lp2}</p>
                      </div>
                      
                      <div className='left2'>
                        <img src={leftimg} alt='Left Image' />
                        <h2 className='lh2'>{data[3].lh2}</h2>
                        <p className='lp2'>{data[3].lp2}</p>
                      </div>
                    </div>
                  </div>

                  <div className='part-3'>
                    <div className='word3'> 
                      <h1 className='p2h1'>
                        {data[3].p2h1}
                      </h1>
                      <p className='p2p1'>
                        {data[3].p2p1}
                      </p>
                      <p className='p2p1'>
                        {data[3].p2p2}
                      </p>
                    </div>
                  </div>

                  <div className='part-4'>
                    <div className='word3'> 
                      <h1 className='p2h1'>
                        {data[3].p2h1}
                      </h1>
                      <p className='p2p1'>
                        {data[3].p2p1}
                      </p>
                      <p className='p2p1'>
                        {data[3].p2p2}
                      </p>
                    </div>
                  </div>

                  <div className='part-5'>
                    <div className='word3'> 
                      <h1 className='p2h1'>
                        {data[3].p2h1}
                      </h1>
                      <p className='p2p1'>
                        {data[3].p2p1}
                      </p>
                      <p className='p2p1'>
                        {data[3].p2p2}
                      </p>
                    </div>
                  </div>

                  <div className='price'>
                    <h2 className='ph2'>{data[4].ph2}</h2>
                    <p className='p1'>{data[4].p1}</p>
                    <p className='p2'>{data[4].p2}</p>
                    <p className='p3'>{data[4].p3}</p>
                    <p className='p4'>{data[4].p4}</p>
                    <Link to='#' className='b1tn-3'>{data[4].b1tn3}</Link>
                  </div>

                  <Foot />
                  
                </>
              )}
            </div>
          } />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/:id" element={<Edit />} /> 
        </Routes>
      </Router>
    );
  }

  export default App;

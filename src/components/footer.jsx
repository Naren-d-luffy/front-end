import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/style/App.css';
import instagram from '../assets/images/Instagram.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';

const Foot = () => {
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
    <div className='fo'>
      <div className='foot'>
                    <div className='foot1'>
                      <p className='fp1'>{data[5].cop}</p>
                      <p className='flan'>{data[5].flan}</p>
                      <Link to='#' className='b1tn-3'>{data[5].b1tn3}</Link>
                    </div>
                    <hr className='footer-divider' />
                  </div>

                  <div className='footer'>
                    <div className='footad'>
                      <Link className='hm' to='#'>{data[6].hm1}</Link>
                      <Link className='hm' to='#'>{data[6].hm2}</Link>
                      <Link className='hm' to='/contact'>{data[6].hm3}</Link>
                      <Link className='hm' to='/dashboard'>{data[6].das}</Link>
                    </div>
                    <div className='footlo'>
                      <Link to='#'><img src={facebook} alt='Facebook' /></Link>
                      <Link to='#'><img src={twitter} alt='Twitter' /></Link>
                      <Link to='#'><img src={instagram} alt='Instagram' /></Link>
                      <Link to='#'><img src={linkedin} alt='LinkedIn' /></Link>
                      <Link to='#'><img src={youtube} alt='YouTube' /></Link>
                    </div>
                  </div>
    </div>
  );
};

export default Foot;

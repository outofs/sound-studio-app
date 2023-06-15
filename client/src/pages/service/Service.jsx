import React, { useContext } from 'react';
import './service.css';
import { Button } from '../../components/button/Button';
import { AuthContext } from '../../context/AuthContext';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Service = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch('');

  return (
    <div className='service'>
      {!data || data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div
          className='banner'
          style={{
            backgroundImage: `url(${data.bannerImg})`,
          }}
        ></div>
      )}

      <div className='mb-3 service-content container'>
        <div className='service-content__poster'>
          {!data || data.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div
              className='service-content__poster__img'
              style={{
                backgroundImage: `url(${data.posterImg})`,
              }}
            ></div>
          )}
        </div>
        {!data || data.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className='service-content__info'>
            <h1 className='title'>{data.title}</h1>
            {data.desc.split('\br').map((p) => (
              <p className='overview'>{p}</p>
            ))}

            <div className='status-episodes'>
              <div className='status'></div>
              <div className='episodes'>
                <h3>Price: {data.price}$/hour</h3>
              </div>
            </div>

            {user ? (
              <Button
                to='/'
                buttonStyle='btn--outline'
              >
                Try It
              </Button>
            ) : (
              <Button
                to='/login'
                buttonStyle='btn--outline'
              >
                Login
              </Button>
            )}
          </div>
        )}
      </div>
      {!data || data.length === 0 ? (
        <div>Loading...</div>
      ) : data.videos.length === 0 ? (
        ''
      ) : (
        <div className='video'>
          <h2 className='video__title'>Our works:</h2>
          {data.videos.map((video) => (
            <ReactPlayer
              controls
              url={video}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;

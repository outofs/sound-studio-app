import React from 'react';
import './services.css';
import CardItem from '../../components/card-item/CardItem';
import { Button } from '../../components/button/Button';
import useFetch from '../../hooks/useFetch';

const Service = () => {
  const { data, loading, error } = useFetch('');
  console.log(data);

  return data.length === 0 || !data ? (
    <div>"Loading..."</div>
  ) : (
    <div className='cards'>
      <h1>We provide the following Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {data.map((item) => (
            <ul className='cards__items'>
              <CardItem item={item} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

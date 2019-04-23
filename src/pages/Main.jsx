import React, { useEffect, useState } from 'react';
import List from '../component/list/List';
import Author from '../component/author/Author';
import Header from '../header';
import fetchData from '../component/fetchData';

const getUserData = async () => {
  const fetchedData = await fetchData(
    `${process.env.REACT_APP_SERVER_URL}/main/users`,
    'POST',
  );
  return fetchedData;
};

const MainPage = () => {
  const [authorData, setAuthorData] = useState('');

  useEffect(() => {
    const fetchedData = getUserData();
    fetchedData.then(user => {
      setAuthorData(user);
    });
  }, []);

  return (
    <>
      <Header />
      <Author authors={authorData} />
      <List />
    </>
  );
};

export default MainPage;

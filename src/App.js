import React, { useState, useEffect } from 'react';
import { Slider, Switch } from 'antd';
import useFetch from './states/useFetch';
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';
import { Input, Card, Row, Col, Layout, Menu, Breadcrumb } from 'antd';
import SearchResults from './components/SearchResults/SearchResults';

const { Header, Content, Footer } = Layout;



function App() {
  const [moviesData, SetMoviesData] = useState([{}, {}])
  const [searchQ, setSearchQ] = useState('avengers');
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US&query=${searchQ}&page=1&include_adult=false`).then(response => response.json())
      .then(data => {
        console.log(data.results)
        SetMoviesData(data.results);
      });
  }, [searchQ]);
  const handleSearch = (event) => {
    if (event.target.value !== '')
    setSearchQ(event.target.value)
    SetMoviesData([{}, {}]);
  }
  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <Layout className="layout">
      <Header style={{ height: 85 }}><SearchBar searchEvent={handleSearch} /></Header>
      <Content style={{ padding: '50px 50px' }}>
        <div className="site-layout-content">
          <SearchResults moviesData={moviesData}/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developes by Milad Mohammadi</Footer>
    </Layout>
  );
}

export default App;

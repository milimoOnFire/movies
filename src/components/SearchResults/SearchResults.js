import React , {useState,useEffect}from 'react';
import { Card, Row, Col, Layout } from 'antd';

const SearchResults = ({moviesData}) => {


    return (<Row gutter={16}>
        {moviesData.map((movie) => {
            return (
                <Col className="gutter-row" span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />}
                    >
                        <Card.Meta title={movie.original_title} description={movie.overview} />
                    </Card>
                </Col>
            )
        })}
    </Row>)
}

export default SearchResults;
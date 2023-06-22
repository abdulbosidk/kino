import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
const Good3 = () => {
    const params = useParams();
    const pages = params.page;
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/upcoming?language=ru-RU&page=1&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('movies', data);
        if (data.status == 200) {
            setMovies(data.data.results);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="row">
                            {movies.length > 0 ?
                                <>
                                    {movies.map((item) =>
                                        <a className="col-6 col-xl-3 mb-2 clip" href={'/g4/' + item.id}>
                                            <Card
                                                hoverable
                                                style={{
                                                    width: `99%`,
                                                }}
                                                cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />}
                                            >
                                                <h5 className='pb-2'>{item.title}</h5>
                                            </Card>
                                        </a>
                                    )}
                                </>
                                :
                                <>
                                    <div class="spinner-grow" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Good3;
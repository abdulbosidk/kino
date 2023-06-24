import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
const Good1 = () => {
    const params = useParams();
    const pages = params.page;
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=${pages}`
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
                    <div className="col-12">
                        <nav className='row' aria-label="...">
                            <ul class="pagination pagination-lg ld">
                                <li class="page-item col-xs-1"><a class="page-link bg-warning text-danger" href="/g1/1">1</a></li>
                                <li class="page-item col-xs-1"><a class="page-link bg-warning text-danger " href="/g1/2">2</a></li>
                                <li class="page-item col-xs-1"><a class="page-link bg-warning text-danger " href="/g1/3">3</a></li>
                                <li class="page-item col-xs-1"><a class="page-link bg-warning text-danger " href="/g1/4">4</a></li>
                                <li class="page-item col-xs-1"><a class="page-link bg-warning text-danger " href="/g1/5">5</a></li>
                                <li class="page-item col-xs-1"><a class="page-link bg-warning text-danger " href="/g1/6">6</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xs-12 col-xl-12 tm">
                        <div className="row">
                            {movies.length > 0 ?
                                <>
                                    {movies.map((item) =>
                                        <a className="col-6 col-xl-3 mt-2 clip" href={'/g4/' + item.id}>
                                            <Card
                                                hoverable
                                                style={{
                                                    width: `99%`,
                                                }}
                                                cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />}
                                            >
                                                <h5 className="pb-5">{item.title}</h5>
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
export default Good1;
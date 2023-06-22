import Navbar from "../components/navbar";
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";

const Good4 = () => {
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState(null);
    const fetchMovie = async () => {
        const abdulbosid = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU`
        })
        console.log('abdulbosid', abdulbosid);
        if (abdulbosid.status == 200) {
            setMovie(abdulbosid.data);
        }
    }
    useEffect(() => {
        fetchMovie();
    }, [])
    const fetchvideos = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU`
        })
        console.log('videos', data);
        if (data.status == 200) {
            setVideo(data.data.results[0]);
        }
    }
    useEffect(() => {
        fetchvideos();
    }, [])
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1`
        })
        console.log('movies', data);
        if (data.status == 200) {
            setMovies(data.data.results);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [])

    const [abdulbory, setAbdulbory] = useState([]);
    const fetchAbdulbory = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}/similar?language=ru-RU&page=1&api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7`
        })
        console.log('abdulbory', data);
        if (data.status == 200) {
            setAbdulbory(data.data.results);
        }
    }
    useEffect(() => {
        fetchAbdulbory();
    }, [])
    return (
        <div>
            <Navbar />
            {movie != null ?
                <div className="container text-light">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-xl-4 col-sm-4">
                                    <img width={'100%'} src={"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path} />
                                </div>
                                <div className="col-sm-8 col-xl-8 p-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2>{movie.title}</h2>
                                            {movie.overview}
                                            <br />

                                            {movie.genres.map((item) =>

                                                <a>{item.name},</a>
                                            )}
                                            <br />
                                            <h5>{movie.release_date}.</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-sm-4 col-xl-2">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 pt-5">
                                    <ins><h5>Похожие</h5></ins>
                                </div>
                                <div className="col-12 over d-flex">
                                    {abdulbory.length > 0 ?
                                        <>
                                            {abdulbory.map((item) =>
                                                <a className="col-sm-3 col-xl-2 clip" href={'/g4/' + item.id}>
                                                    <Card
                                                        hoverable
                                                        style={{
                                                            width: `99%`,
                                                        }}
                                                        cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />}
                                                    >
                                                        <h5 className="pb-2">{item.title}</h5>
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
                                <div className="col-xl-12 col-sm-12 mt-2">
                                    {video != null ?
                                        <iframe width="100%" height="480" src={"https://www.youtube.com/embed/" + video.key} title="SHAZAM Top 50 - Лучшая Музыка 2022 - Зарубежные песни Хиты - Популярные Песни Слушать Бесплатно #2" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        : <></>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 pt-5">
                            <ins><h5>Рекомендуемые</h5></ins>
                        </div>
                        <div className="col-12 over d-flex">
                            {movies.length > 0 ?
                                <>
                                    {movies.map((item) =>
                                        <a className="col-sm-3 col-xl-2" href={'/g4/' + item.id}>
                                            <Card
                                                hoverable
                                                style={{
                                                    width: `99%`,
                                                }}
                                                cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />}
                                            >
                                                <h5 className="pb-2 clip">{item.title}</h5>
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
                :
                <></>}
            <Footer />
        </div>
    )
}
export default Good4;
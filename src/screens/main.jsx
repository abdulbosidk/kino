import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Card } from 'antd';
import React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

const Main = () => {
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
    const [movie, setMovie] = useState([]);
    const fetchMovie = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/tv/top_rated?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1`
        })
        console.log('adasd', data);
        if (data.status == 200) {
            setMovie(data.data.results);
        }
    }
    useEffect(() => {
        fetchMovie();
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 top ">
                        <div className="row mt-2">
                            <div className="col-12 mt-3">
                                <h1 className="text-white tt">Добро пожаловать.</h1>
                            </div>
                            <div className="col-12">
                                <h5 className="text-white tr">Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-xl-4 mt-2 tm">
                        <h3 className="text-light">Что популярно</h3>
                    </div>
                    <div className="col-xs-12 col-xl-12 over d-flex tm">
                        {movies.length > 0 ?
                            <>
                                {movies.map((item) =>
                                    <div className="col-6 col-lg-2 p-1">
                                        <Card
                                            hoverable
                                            style={{
                                                width: `99%`,
                                            }}
                                            cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />}
                                        >
                                            <a className="clip" href={'/g4/' + item.id}><h5 className="pb-2 j">{item.title}</h5></a>
                                        </Card>
                                    </div>
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
                    <div className="col-xs-12 col-lg-4 text-light mt-2 tm">
                        <h3>Последние трейлеры</h3>
                    </div>
                    <div className="col-12 text-primary tm">
                        <div className="w-100 over d-flex">
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-xs-6 col-xl-2 mt-2">
                                <iframe className="rounded" width="180" height="250" src="https://www.youtube.com/embed/hq3C0qimFjs" title="Таких Нокаутов Больше Не Увидишь! Мирко Крокоп в Кикбоксинге" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xs-12 col-xl-4 mt-2 tm">
                        <h3 className="text-light">в тренде</h3>
                    </div>
                    <div className="col-12 over d-flex tm">
                        {movies.length > 0 ?
                            <>
                                {movie.map((item) =>
                                    <div className="col-6 col-lg-2 p-1">
                                        <Card
                                            hoverable
                                            style={{
                                                width: `99%`,
                                            }}
                                            cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />}
                                        >
                                            <a className="clip" href={'/g4/' + item.id}><h5 className="pb-2">{item.name}</h5></a>
                                        </Card>
                                    </div>
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
            <Footer />
        </div>
    );
};
export default Main;
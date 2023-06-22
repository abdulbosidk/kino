import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Navbar = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState(false);
    const fetchMovies = async (value) => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/search/multi?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&&language=ru-RU&query=${value}&page=1&include_adult=false`
        })
        console.log('movies', data);
        if (data.status == 200) {
            setSearch(true);
            setMovies(data.data.results);
        } else {
            setSearch(false);
        }
    }
    return (
        <div>
            <div class="container-fluid">
                <div class="col-12 header p-3">
                    <div class="row">
                        <div class="col-6 ms-5 d-flex justify-content-center">
                            <div class="row">
                                <div class="col-2">
                                    <h2 class="name">TMDB</h2>
                                </div>

                                <div class="col-2 mt-2 pt-1 ms-3">
                                    <button class="buttn rounded-5 border-0"></button>
                                </div>

                                <div class="col-2 mt-2">
                                    <a href="" class="text-decoration-none text-white"
                                    ><b>Фильмы</b></a
                                    >
                                </div>

                                <div class="col-2 mt-2">
                                    <a href="" class="text-decoration-none text-white"
                                    ><b>Сериалы</b></a
                                    >
                                </div>

                                <div class="col-2 mt-2">
                                    <a href="" class="text-decoration-none text-white"
                                    ><b>Люди</b></a
                                    >
                                </div>

                                <div class="col-1 mt-2">
                                    <a href="" class="text-decoration-none text-white"
                                    ><b>Еще</b></a
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="row">
                                <div class="col-1 mt-2">
                                    <i class="fa-solid fa-plus fa-2x" style="color: white"></i>
                                </div>
                                <div class="col-2 mt-2">
                                    <button class="text-white butn border-2 rounded-1 border-white">
                                        RU
                                    </button>
                                </div>

                                <div class="col-2 mt-2">
                                    <a href="" class="text-decoration-none text-white"
                                    ><b>Войти</b></a
                                    >
                                </div>

                                <div class="col-5 mt-2">
                                    <a href="" class="text-decoration-none text-white"
                                    ><b>Присоединиться к TMDB</b></a
                                    >
                                </div>
                                <div class="col-1 mt-2">
                                    <i
                                        class="fa-solid fa-magnifying-glass fa-2x"
                                        style="color: rgb(0, 174, 255)"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <nav class="navbar navbar-expand-lg bg-dark text-light">
                <div class="container">
                    <a class="navbar-brand text-light ti" href="/"><h3>Abdulbosid</h3></a>
                    <button class="navbar-toggler bg-white  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/g1/1"><h5>популярные</h5></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/g2/1"><h5>лучшие</h5></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/g3"><h5>Скоро выходяшие фильмы</h5></a>
                            </li>
                        </ul>
                        <input type="search" id="click" class=" block w-full text-sm text-gray-900 border border-gray-300 rounded px-2 py-1 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..." onChange={(e) => { fetchMovies(e.target.value) }} required />
                        {search ?
                            <>
                                <div className="bg-dark col-2 over d-flex t">
                                    {movies.length > 0 ?
                                        <>
                                            {
                                                movies.map((item) =>
                                                    <>
                                                        <a className="col-12" href={"/g4/" + item.id}>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                <img alt="example" style={{width:`99%`}} src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />
                                                                </div>
                                                                <div className="col-8 ">
                                                                    
                                                                   <small><b className="text-white">{item.title}</b></small>
                                                                </div>
                                                            </div>

                                                        </a>
                                                        <br />
                                                    </>
                                                )
                                            }
                                        </>
                                        :
                                        <>


                                        </>
                                    }


                                </div>


                            </>
                            :
                            <>


                            </>

                        }
                    </div>
                </div>
            </nav> */}
        </div>
    );
};
export default Navbar;
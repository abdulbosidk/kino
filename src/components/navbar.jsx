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
            <nav class="navbar navbar-expand-lg bg-dark text-light">
                <div className="container">
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
                                <div className="col-2 t">
                                    <div className="row">
                                        {movies.length > 0 ?
                                            <>
                                                {
                                                    movies.map((item) =>
                                                        <>
                                                            <a className="col-12" href={"/g4/" + item.id}>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <small><b className="">{item.title}</b></small>
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
                                </div>


                            </>
                            :
                            <>


                            </>

                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
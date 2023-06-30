import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Good6 = () => {
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState(null);
    const apikey = '3cc05ada7e70628b8d1bf36e4d1f6fd7&';
    const fetchMovie = async () => {
        const abdulbosid = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/person/${id}?api_key=${apikey}&language=en-US`
        })
        console.log('abdulbosid', abdulbosid);
        if (abdulbosid.status == 200) {
            setMovie(abdulbosid.data);
        }
    }
    useEffect(() => {
        fetchMovie();
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
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3 tm">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12">
                                    <img width={'100%'} src={"https://www.themoviedb.org/t/p/w235_and_h235_face/" + movie.profile_path} />
                                </div>
                                <div className="col-sm-8 col-xl-8 p-2">
                                    <div className="row">
                                        <div className="col-12 text-light">
                                            <h2>{movie.name}</h2>
                                        </div>
                                        <div className="col-12 text-light">
                                            <h4>{movie.biography}</h4>
                                            <br />
                                        </div>
                                        <div className="col-12">
                                            <img width={'100%'} src={"/pviRYKEEmoPUfLYwP1VHJ6LQcRg.jpg" + movie.profile_path} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 over d-flex tm">
                            {abdulbory.length > 0 ?
                                <>
                                    {abdulbory.map((item) =>
                                        <div className="col-lg-2 col-6 p-1">
                                            <Card
                                                hoverable
                                                style={{
                                                    width: `99%`,
                                                }}
                                                cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.backdrop_path} />}
                                            >
                                                <a className="clip" href={'/g4/' + item.id}><h5 className="pb-2">{item.title}</h5></a>
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
                :
                <></>}
            <Footer />
        </div>
    )
}
export default Good6;
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
    return (
        <div>
            <Navbar />
            {movie != null ?
                <div className="container text-light">
                    <div className="row">
                        <div className="col-12 mt-3 tm">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12">
                                    <img width={'100%'} src={"https://www.themoviedb.org/t/p/w235_and_h235_face/" + movie.profile_path} />
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
                            </div>
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
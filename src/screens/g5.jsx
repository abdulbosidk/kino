import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Good5=()=>{
    const params = useParams();
    const pages = params.page;
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const data = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/person/changes?page=1&3cc05ada7e70628b8d1bf36e4d1f6fd7&`
        })
        console.log('actris', data);
        if (data.status == 200) {
            setMovies(data.data.results);
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [])
    return(
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 tm">
                        <div className="row">
                            {movies.length > 0 ?
                                <>
                                    {movies.map((item) =>
                                        <div className='col-lg-2 col-6 p-2'>
                                            <Card
                                                hoverable
                                                style={{
                                                    width: `99%`,
                                                }}
                                                cover={<img alt="example" src={'https://www.themoviedb.org/t/p/w235_and_h235_face/' + item.backdrop_path} />}
                                            >
                                                <a className=" mb-2 clip"><h5 className='pb-2'>{item.title}</h5></a>
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
            </div>
            <Footer />
        </>
    )
}
export default Good5;
import { Button } from "antd";
import { useState } from "react";
const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-4">
                        <div className="row">
                            <div className="col-sm-12 col-xl-4 ">
                                <img width={200} className="mb-2" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
                                <button type="button" class="btn btn-light text-primary"><b>ВСТУПИТЬ В СООБЩЕСТВО</b></button>
                            </div>
                            <div className="col-sm-12 col-xl-2 mt-2 text-primary">
                                <h4>ГЛАВНОЕ О TMDB</h4>
                                <b><a href="">Связаться с нами</a></b><br/>
                                <b><a href="">Форумы поддержки</a></b><br/>
                                <b><a href="">API</a></b><br/>
                                <b><a href="">Статус системы</a></b>
                            </div>
                            <div className="col-sm-12 col-xl-2 mt-2 text-primary">
                                <h4>УЧАСТВУЙТЕ</h4>
                                <b><a href="">Библия редакторов</a></b><br/>
                                <b><a href="">Добавить новый фильм</a></b><br/>
                                <b><a href="">Добавить новый сериал</a></b><br/>
                            </div>
                            <div className="col-sm-12 col-xl-2 mt-2 text-primary">
                                <h4>СООБЩЕСТВО</h4>
                                <b><a href="">Руководства</a></b><br/>
                                <b><a href="">Обсуждения</a></b><br/>
                                <b><a href="">Доска почёта</a></b><br/>
                                <b><a href="">Twitter</a></b>
                            </div>
                            <div className="col-sm-12 col-xl-2 mt-2 text-primary">
                                <h4>О ПРАВЕ</h4>
                                <b><a href="">Условия использования</a></b><br/>
                                <b><a href="">API Правила использования</a></b><br/>
                                <b><a href="">Политика конфиденциальности</a></b><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
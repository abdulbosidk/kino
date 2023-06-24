import { Button } from "antd";
import { useState } from "react";
const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-4">
                        <div className="row">
                            <div className="col-12 col-lg-4"></div>
                            <div className="col-12 col-lg-4 ">
                                <img width={200} className="mb-2" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
                            </div>
                            <div className="col-12 col-lg-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
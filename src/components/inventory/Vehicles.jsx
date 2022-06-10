import React from "react";
import { Link } from "react-router-dom";

function Vehicles() {
    return (
        <div className="home">
            <div class="container">
                <Link to="/inventory/this-is-a-vehicle-images-gallery">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img class="img-fluid rounded mb-4 mb-lg-d" src="http://place-hold.it/900x400" alt=""/>
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">This is a vehicle images gallery</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Vehicles;
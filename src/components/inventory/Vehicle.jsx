import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Vehicle() {
    let { vehicleSlug } = useParams();

    useEffect(() => {
        // Fetch vehicle using the vehicleSlug
    }, [vehicleSlug]);

    return (
        <div className="home">
            <div class="container">
                <h1 className="mt-5">This is Vehicle 1 Make and Model</h1>
                <h6 className="mb-5">The vehicle slug is [vehicleSlug]</h6>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    );
}

export default Vehicle;
import React from "react";

const Movie = (props)=>{
    return (
        <div className="col">
            <div className="card">
                {
                    props.image == null ? <img src={`https://s3-ap-southeast1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{width: "100%", height: "360"}} />: <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width: "100%", height: "360"}}/> 
                }
            </div>
            <div className="card-content">
                <a href="#">View Details</a>
            </div>
        </div>
    )
}

export default Movie;
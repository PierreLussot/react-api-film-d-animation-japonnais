import React from "react";
import {Link} from "react-router-dom";

const Tile = ({film}) => {
  return(
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={film.image} style={{height:"170px"}}
                 className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{film.title}</h5>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">
                  <Link to={`/detail/${film.id}`} className="btn btn-sm btn-success">
                      <i className="material-icons">search</i>
                  </Link>
              </small></p>
            </div>
          </div>
        </div>
      </div>


  )
}

export default Tile;
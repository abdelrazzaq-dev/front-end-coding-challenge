import React from "react";
import "./Repository.scss"

const Repository = ({name, avatar, issues, stars, created_at, owner, description}) => {

    return(
        <div className="d-flex m-2 p-2 border">
           <div className="flex-shrink-0">
				<img className="avatar img-thumbnail" alt={owner} src={avatar}/>
		   </div>
		   <div className="ml-1">
			   <h1 className="">{name}</h1>
			   <p className="">{description}</p>
			   <div>
				   <span className="badge badge-primary mr-2">{stars} <i className="fas fa-star"></i></span>
				   <span className="badge badge-warning mr-2">{issues} <i className="fas fa-exclamation-triangle"></i></span>
				   <span className="mr-2">{created_at}</span>
				   <span className="mr-2">{owner}</span>
			   </div>
		   </div>
        </div>
    )
}

export default Repository


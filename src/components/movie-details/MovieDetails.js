
import React,{Component} from 'react';

export default class MovieDetails extends Component {
render() {
  return <div className="w-25 bg-light p-4 d-flex flex-column">
      <h5>{this.props.movie.title}</h5>
      <hr className="w-100"/>
      
      <img alt="movie" className="mx-auto d-block" src={this.props.movie.img} />
    
       <hr className="w-100"/>
       <p className="text-secondary">{this.props.movie.details}</p>
     
      <p>{this.props.movie.description}</p>
    </div>
  
}
}

// export default MovieDetails;
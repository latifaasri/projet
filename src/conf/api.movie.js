import * as axios from 'axios';

const apiMovie = axios.create({
   
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization']= 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA1YTBmOTk5ZmU4ZmNlZDI4NmM4YjhmYzk1MDQ1NyIsInN1YiI6IjYxMmNkNDI2ZWI3OWMyMDAyYmVlNDhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OhgPI3_K6uijJQzG-p7UxpuBRhLXYSGZ0E2PNejvffM'
    return req;
})
export default apiMovie;

export const apiMovieMap = (m) => ({
    img:'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title:m.title,
    details:`${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview
})
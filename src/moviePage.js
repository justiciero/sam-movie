let pagina = 1;
let pagina2 = 2;

async function allNewMovie_PageMovie() {
    const { data } = await api('movie/now_playing',{
        params: {
            'page' : pagina,
            'region' : 'BR' 
        }
    });

    const movies = data.results;
    console.log({data})

    newMoviePage.innerHTML = "";

        movies.forEach(movie => {


        const movieContainer = document.createElement('article');
        movieContainer.classList.add('top-mp--article');
        
        const movieContainerpic = document.createElement('picture');
        movieContainerpic.classList.add('image--Top-movie');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
        
        movieContainer.appendChild(movieContainerpic);
        movieContainerpic.appendChild(movieImg);
        newMoviePage.appendChild(movieContainer);
    });
};
topmovieBycountrybtn.addEventListener('click', ()=>{
    pagina +=1;
    allNewMovie_PageMovie();
});


async function allTrending_PageMovie() {
    const { data } = await api('trending/movie/day',{
        params: {
            'page' : pagina2,
        }
    });

    const movies = data.results;

        TrendingMoviePage.innerHTML = "";

        movies.forEach(movie => {


        const movieContainer = document.createElement('article');
        movieContainer.classList.add('top-mp--article');
        
        const movieContainerpic = document.createElement('picture');
        movieContainerpic.classList.add('image--Top-movie');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
        
        movieContainer.appendChild(movieContainerpic);
        movieContainerpic.appendChild(movieImg);
        TrendingMoviePage.appendChild(movieContainer);

    });
};
topmoviebtn.addEventListener('click', ()=>{
    pagina2 +=1;
    allTrending_PageMovie();
});

async function allUpcoming_PageMovie() {
    const { data } = await api('movie/upcoming',{
        params: {
            'page' : pagina,
        }
    });

    const upcomingMovies = data.results;

    upcomingMoviePage.innerHTML = "";

    upcomingMovies.forEach(upcomingMovie => {


        const upcomingmovieContainer = document.createElement('article');
        upcomingmovieContainer.classList.add('top-mp--article');
        
        const  upcomingMovieContainerpic = document.createElement('picture');
        upcomingMovieContainerpic.classList.add('image--Top-movie');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', upcomingMovie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + upcomingMovie.poster_path);
        
        
        upcomingmovieContainer.appendChild(upcomingMovieContainerpic);
        upcomingMovieContainerpic.appendChild(movieImg);
        upcomingMoviePage.appendChild(upcomingmovieContainer);
    });
};
movieupcomingbtn.addEventListener('click', ()=>{
    pagina +=1;
    allUpcoming_PageMovie();
});


async function allTopRated_PageMovie() {
    const { data } = await api('movie/top_rated',{
        params: {
            'page' : pagina,
        }
    });

    const upcomingMovies = data.results;

    bestRatedMoviePage.innerHTML = "";

    upcomingMovies.forEach(upcomingMovie => {


        const upcomingmovieContainer = document.createElement('article');
        upcomingmovieContainer.classList.add('top-mp--article');
        
        const  upcomingMovieContainerpic = document.createElement('picture');
        upcomingMovieContainerpic.classList.add('image--Top-movie');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', upcomingMovie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + upcomingMovie.poster_path);
        
        
        upcomingmovieContainer.appendChild(upcomingMovieContainerpic);
        upcomingMovieContainerpic.appendChild(movieImg);
        bestRatedMoviePage.appendChild(upcomingmovieContainer);
    });
};
bestratedmoviebtn.addEventListener('click', ()=>{
    pagina +=1;
    allTopRated_PageMovie();
});
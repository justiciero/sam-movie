
async function allTrending_PageTv() {
    const { data } = await api('tv/popular',{
        params: {
            'page' : pagina2,
        }
    });

    const movies = data.results;

        trendingShow_TvPage.innerHTML = "";

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
        trendingShow_TvPage.appendChild(movieContainer);

    });
};
popularshowbtn.addEventListener('click', ()=>{
    pagina2 +=1;
    allTrending_PageTv();
});

async function bestRated_PageTv() {
    const { data } = await api('tv/top_rated',{
        params: {
            'page' : pagina,
        }
    });

    const movies = data.results;
    console.log({data})

    bestRatedTvPage.innerHTML = "";

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
        bestRatedTvPage.appendChild(movieContainer);
    });
};
bestRatedbtn.addEventListener('click', ()=>{
    pagina +=1;
    bestRated_PageTv();
})

async function onAir_PageTv() {
    const { data } = await api('tv/on_the_air',{
        params: {
            'page' : pagina2,
            'country': 'BR',
        }
    });

    const upcomingMovies = data.results;

    onAir_TvPage.innerHTML = "";

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
        onAir_TvPage.appendChild(upcomingmovieContainer);
    });
};
showOnAirbtn.addEventListener('click', ()=>{
    pagina2 +=1;
    onAir_PageTv(); 
});


async function onAirToday_PageTv() {
    const { data } = await api('tv/airing_today',{
        params: {
            'page' : pagina,
            'country' : 'USA'
        }
    });

    const upcomingMovies = data.results;

    onAirToday_TvPage.innerHTML = "";

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
        onAirToday_TvPage.appendChild(upcomingmovieContainer);
    });
};
showOnAirTbtn.addEventListener('click', ()=>{
    pagina +=1;
    onAirToday_PageTv() ; 
});
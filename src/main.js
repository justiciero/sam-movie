
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/', 
    Headers: {
        'content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
})

async function getTrendingMovies(id) {
    const { data } = await api('trending/movie/day');

    const movies = data.results;

    trendingMovie.innerHTML = "";

        movies.forEach(movie => {


        const movieContainer = document.createElement('article');
        movieContainer.classList.add('top-movie--article');
        
        const movieContainerpic = document.createElement('picture');
        movieContainerpic.classList.add('image--Top-movie');
        
        const movieTextContainer = document.createElement('div');
        movieTextContainer.classList.add('text-container');
        
        const movieTextContainerH3 = document.createElement('h3');
        const movieTextContainerP = document.createElement('p');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
        
        
        movieTextContainer.appendChild(movieTextContainerH3);
        movieTextContainer.appendChild(movieTextContainerP);
        movieContainer.appendChild(movieContainerpic);
        movieContainerpic.appendChild(movieImg);
        movieContainerpic.appendChild(movieTextContainer);
        trendingMovie.appendChild(movieContainer);

    });
}


async function getupcomingmovies() {
    const { data } = await api('movie/upcoming');

    const upcomingMovies = data.results;

    upcomingMoviePreview.innerHTML = "";

    upcomingMovies.forEach(upcomingMovie => {


        const upcomingmovieContainer = document.createElement('article');
        upcomingmovieContainer.classList.add('top-movie--article');
        
        const  upcomingMovieContainerpic = document.createElement('picture');
        upcomingMovieContainerpic.classList.add('image--Top-movie');
        
        const movieTextContainer = document.createElement('div');
        movieTextContainer.classList.add('text-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', upcomingMovie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + upcomingMovie.poster_path);
        
        
        upcomingmovieContainer.appendChild(upcomingMovieContainerpic);
        upcomingMovieContainerpic.appendChild(movieImg);
        upcomingMoviePreview.appendChild(upcomingmovieContainer);
    });
};

async function getTrendingSeries() {
    const { data } = await api('tv/popular');

    const trending_Series = data.results;

        trendingSeries.innerHTML = "";

    trending_Series.forEach(tvshow =>{


        const topSeriesContainer = document.createElement('article');
        topSeriesContainer.classList.add('top-movie--article');
        
        const  seriesContainerpic = document.createElement('picture');
        seriesContainerpic.classList.add('image--Top-movie');

        const seriesImg = document.createElement('img');
        seriesImg.classList.add("movie-img");
        seriesImg.setAttribute('alt', tvshow.title);
        seriesImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + tvshow.poster_path);
        
        
        topSeriesContainer.appendChild(seriesContainerpic);
        seriesContainerpic.appendChild(seriesImg);
        trendingSeries.appendChild(topSeriesContainer);

    })
}

async function showOnAir() {
    const { data } = await api('tv/airing_today');

    const onAir = data.results;

    trendingSeries_OnAir.innerHTML = ""; 
    // .top10--container

    onAir.forEach(tvshowonair =>{


        const topSeriesContainer_OnAir = document.createElement('article');
        topSeriesContainer_OnAir.classList.add('top-movie--article');
        
        const  seriesContainerpic_OnAir = document.createElement('picture');
        seriesContainerpic_OnAir.classList.add('image--Top-movie');

        const seriesImg_OnAir = document.createElement('img');
        seriesImg_OnAir.classList.add("movie-img");
        seriesImg_OnAir.setAttribute('alt', tvshowonair.title);
        seriesImg_OnAir.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + tvshowonair.poster_path);
        
        
        topSeriesContainer_OnAir.appendChild(seriesContainerpic_OnAir);

        seriesContainerpic_OnAir.appendChild(seriesImg_OnAir);

        trendingSeries_OnAir.appendChild(topSeriesContainer_OnAir);

    })
}


async function genresMovies() {
    const { data } = await api('genre/movie/list');

    const categories = data.genres;
    console.log({data, categories})

    movieCategory.innerHTML = "";

    categories.forEach(category =>{
        
        
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add("ul-div--category");
        
        const categoryTitle = document.createElement('h5');
        categoryTitle.classList.add("category-tilte");
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`; 
        } )
        categoryTitle.setAttribute('id', category.name);

        const categoryname = document.createTextNode(category.name)
        
        
        categoryDiv.appendChild(categoryTitle);

        categoryTitle.appendChild(categoryname);

        movieCategory.appendChild(categoryDiv);

    })
}

async function getMovieByCategory(id) {
    const { data } = await api('discover/movie',{
        params: {
            with_genres: id,
        }
    });

    const movieCategories = data.results;

    categoryPageMovie.innerHTML = "";

    movieCategories.forEach(movieCategory => {

       const movieContainer = document.createElement('div');
       movieContainer.classList.add('category-img');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', movieCategory .title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movieCategory.poster_path);
        
        
        movieContainer.appendChild(movieImg);
        categoryPageMovie.appendChild(movieContainer);
    });
}


async function genresTV() {
    const { data } = await api('genre/tv/list');

    const categories = data.genres;
    console.log({data, categories})

    movieCategory.innerHTML = "";

    categories.forEach(category =>{
        
        
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add("ul-div--category");
        
        const categoryTitle = document.createElement('h5');
        categoryTitle.classList.add("category-tilte");
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name} + category.id`; 
        } )
        categoryTitle.setAttribute('id', category.name);

        const categoryname = document.createTextNode(category.name)
        
        
        categoryDiv.appendChild(categoryTitle);

        categoryTitle.appendChild(categoryname);

        movieCategory.appendChild(categoryDiv);

    })
}


async function getTvByCategory(id) {
    const { data } = await api('discover/tv',{
        params: {
            with_genres: id,
        }
    });

    const tvCategories = data.results;

    categoryPageTv.innerHTML = "";

    tvCategories.forEach(tvCategory => {

       const movieContainer = document.createElement('div');
       movieContainer.classList.add('category-img');

        const movieImg = document.createElement('img');
        movieImg.classList.add("movie-img");
        movieImg.setAttribute('alt', tvCategory.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + tvCategory.poster_path);
        
        
        movieContainer.appendChild(movieImg);
        categoryPageTv.appendChild(movieContainer);
    });
}
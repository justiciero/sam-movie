const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/', 
    Headers: {
        'content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

// Utils
function createMovieHomePost(movies, container){
    container.innerHTML = "";
    
    movies.forEach(movie => {


            const movieContainer = document.createElement('article');
            movieContainer.classList.add('top-movie--article');
            
            const movieContainerpic = document.createElement('picture');
            movieContainerpic.classList.add('image--Top-movie');
            movieContainerpic.addEventListener('click', () =>{
                location.hash = '#movie=' + movie.id;
            });
        
            const movieImg = document.createElement('img');
            movieImg.classList.add("movie-img");
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
            
            movieContainer.appendChild(movieContainerpic);
            movieContainerpic.appendChild(movieImg);
            container.appendChild(movieContainer);
    
        });
}

function createTvHomePost(shows, container){
    container.innerHTML = "";
    
    shows.forEach(show => {


            const movieContainer = document.createElement('article');
            movieContainer.classList.add('top-movie--article');
            
            const movieContainerpic = document.createElement('picture');
            movieContainerpic.classList.add('image--Top-movie');
            movieContainerpic.addEventListener('click', () =>{
                location.hash = '#tv=' + show.id;
            });
        
            const movieImg = document.createElement('img');
            movieImg.classList.add("movie-img");
            movieImg.setAttribute('alt', show.title);
            movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + show.poster_path);
            
            movieContainer.appendChild(movieContainerpic);
            movieContainerpic.appendChild(movieImg);
            container.appendChild(movieContainer);
    
        });
}

function  createGenericsPost(movies, container){

    container.innerHTML = "";

    movies.forEach(movieCategory => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('search-img');
        movieContainer.addEventListener('click', () =>{
            location.hash = '#movie=' + movieCategory.id;
        });
        
 
         const movieImg = document.createElement('img');
         movieImg.classList.add("movie-img");
         movieImg.setAttribute('alt', movieCategory .title);
         movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movieCategory.poster_path);
         
         
         movieContainer.appendChild(movieImg);
         container.appendChild(movieContainer);
     });
}


function createPostForMoviePages(movies, container){
    container.innerHTML = "";
  
    movies.forEach(movie => {
  
  
      const movieContainer = document.createElement('article');
      movieContainer.classList.add('top-mp--article');
      
      const movieContainerpic = document.createElement('picture');
      movieContainerpic.classList.add('image--Top-movie');
      movieContainerpic.addEventListener('click', () =>{
        location.hash = '#movie=' + movie.id;
    });
  
      const movieImg = document.createElement('img');
      movieImg.classList.add("movie-img");
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
      
      movieContainer.appendChild(movieContainerpic);
      movieContainerpic.appendChild(movieImg);
      container.appendChild(movieContainer);
  });
  }

  function createPostForTvPages(tvs, container){
    container.innerHTML = "";
  
    tvs.forEach(tv => {
  
  
      const movieContainer = document.createElement('article');
      movieContainer.classList.add('top-mp--article');
      
      const movieContainerpic = document.createElement('picture');
      movieContainerpic.classList.add('image--Top-movie');
      movieContainerpic.addEventListener('click', () =>{
        location.hash = '#tv=' + tv.id;
    });
  
      const movieImg = document.createElement('img');
      movieImg.classList.add("movie-img");
      movieImg.setAttribute('alt', tv.title);
      movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + tv.poster_path);
      
      movieContainer.appendChild(movieContainerpic);
      movieContainerpic.appendChild(movieImg);
      container.appendChild(movieContainer);
  });
  }

  function createCategory(categories, ejemplo){
    
    ejemplo.innerHTML = "";
    categories.forEach(category =>{
        
        
        const categoryTitle = document.createElement('li');
        categoryTitle.classList.add("category-tilte");

        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`; 
        } )
        categoryTitle.setAttribute('id', category.name);

        const categoryname = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryname);

        ejemplo.appendChild(categoryTitle);

    })
  }
  
  //  Api Main

async function getTrendingMovies() {
    const { data } = await api('trending/movie/day');

    const movies = data.results;
    createMovieHomePost(movies, trendingMovie);
};

async function getTrendingSeries() {
    const { data } = await api('tv/popular');

    const trending_Series = data.results;

    createTvHomePost(trending_Series, trendingSeries);
};


async function getupcomingmovies() {
    const { data } = await api('movie/upcoming')
    const upcomingMovies = data.results;

    createMovieHomePost(upcomingMovies, upcomingMoviePreview);
};

async function showOnAir() {
    const { data } = await api('tv/airing_today');

    const onAir = data.results;
    
    createTvHomePost(onAir, trendingSeries_OnAir);    
};


async function genresMovies() {
    const { data } = await api('genre/movie/list');

    const categories = data.genres;

    createCategory(categories, movieCategory)
}

async function genresTV() {
    const { data } = await api('genre/tv/list');

    const categories = data.genres;
   
    createCategory(categories,TvCategory)
}


async function getMovieByCategory(id) {
    const { data } = await api('discover/movie',{
        params: {
            with_genres: id,
        }
    });

    const movieCategories = data.results;

    createGenericsPost(movieCategories, categoryPageMovie)
}
async function getTvByCategory(id) {
    const { data } = await api('discover/tv',{
        params: {
            with_genres: id,
        }
    });

    const movieCategories = data.results;

    createGenericsPost(movieCategories, categoryPageTv)
}

    async function getMultiSearch(query) {
    const { data } = await api('search/multi', {
        params: {
          query: query,
          'page' : pagina,
        },
    });

    const tvCategories = data.results;

    createGenericsPost(tvCategories, searchdetails_page);
}

async function getMovieById(id) {
    const { data: movie } = await api('movie/' + id);

    movie_img.setAttribute('src',  'https://image.tmdb.org/t/p/w500/' + movie.poster_path);


    title_description.textContent = movie.title;
    overview_description .textContent = movie.overview;
    average_description.textContent = movie.vote_average;

    createCategory(movie.genres,categoryList_description)
  
}
async function getTvById(id) {
    const { data: movie } = await api('tv/' + id);

    movie_img.setAttribute('src',  'https://image.tmdb.org/t/p/w500/' + movie.poster_path);
    
    title_description.textContent = movie.name;
    overview_description.textContent = movie.overview;
    average_description.textContent = movie.vote_average;
  
    createCategory(movie.genres,categoryList_description)
}

async function getSimilarMovie(id) {
    const { data} = await api('movie/' + id + '/similar');
    const similarMovies = data.results;
    
        similar_movie.innerHTML = '';

    similarMovies.forEach(sMovie => {

        const movieContainerpic = document.createElement('picture');
        movieContainerpic.classList.add('similar');
        movieContainerpic.addEventListener('click', () =>{
            location.hash = '#movie=' + sMovie.id;
        });
    
        const movieImg = document.createElement('img');
        movieImg.classList.add("similar-img");
        movieImg.setAttribute('alt', sMovie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + sMovie.poster_path);
        
        movieContainerpic.appendChild(movieImg);
        similar_movie.appendChild(movieContainerpic);

    });
}

async function getSimilarShow(id) {
    const { data} = await api('tv/' + id + '/similar');
    const similarMovies = data.results;
    
        similar_movie.innerHTML = '';

    similarMovies.forEach(sMovie => {

        const movieContainerpic = document.createElement('picture');
        movieContainerpic.classList.add('similar');
        movieContainerpic.addEventListener('click', () =>{
            location.hash = '#tv=' + sMovie.id;
        });
    
        const movieImg = document.createElement('img');
        movieImg.classList.add("similar-img");
        movieImg.setAttribute('alt', sMovie.title);
        movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + sMovie.poster_path);
        
        movieContainerpic.appendChild(movieImg);
        similar_movie.appendChild(movieContainerpic);

    });
}

async function getMovieCast(id) {
    const { data } = await api('movie/' + id + '/credits');
        const cast = data.cast;
        const crew = data.crew;

        console.log({crew})
        
        castingMovie.innerHTML = "";
        directorMovie.innerHTML = "";

        cast.forEach(actor =>{
            if(actor.order <= 5){

                const actorName = document.createElement('p');
                actorName.classList.add('casting');

                const castingName = document.createTextNode(actor.name)

                actorName.appendChild(castingName);
                castingMovie.appendChild(actorName);
            };

        })

        crew.forEach(productor =>{
            if(productor.department === 'Directing'){
                console.log(productor.name)

                const actorName = document.createElement('p');
                actorName.classList.add('casting');

                const castingName = document.createTextNode(productor.name)

                actorName.appendChild(castingName);
                directorMovie.appendChild(actorName);
            }
        })
}

async function getTVCast(id) {
    const { data } = await api('tv/' + id + '/credits');
        const cast = data.cast;
        const crew = data.crew;
        console.log(crew)
        
        castingMovie.innerHTML = "";
        directorMovie.innerHTML = "";

        cast.forEach(actor =>{
            if(actor.order <= 5){

                const actorName = document.createElement('p');
                actorName.classList.add('casting');

                const castingName = document.createTextNode(actor.name)

                actorName.appendChild(castingName);
                castingMovie.appendChild(actorName);
            }
        })

        crew.forEach(productor =>{
            if(productor.department === 'Directing'){
                console.log(productor.name)

                const actorName = document.createElement('p');
                actorName.classList.add('casting');

                const castingName = document.createTextNode(productor.name)

                actorName.appendChild(castingName);
                directorMovie.appendChild(actorName);
            }
        })
}
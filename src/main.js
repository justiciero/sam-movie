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

function createPost(movies, container){
    container.innerHTML = "";

    movies.forEach(movie => {

            const movieContainer = document.createElement('article');
            movieContainer.classList.add('top-movie--article');
            
            const movieContainerpic = document.createElement('picture');
            movieContainerpic.classList.add('image--Top-movie');
        
            const movieImg = document.createElement('img');
            movieImg.classList.add("movie-img");
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
            
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
 
         const movieImg = document.createElement('img');
         movieImg.classList.add("movie-img");
         movieImg.setAttribute('alt', movieCategory .title);
         movieImg.setAttribute('src',  'https://image.tmdb.org/t/p/w300/' + movieCategory.poster_path);
         
         
         movieContainer.appendChild(movieImg);
         container.appendChild(movieContainer);
     });
}


function createPostForPages(movies, container){
    container.innerHTML = "";
  
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
      container.appendChild(movieContainer);
  });
  }
  
  //  Api Main

async function getTrendingMovies() {
    const { data } = await api('trending/movie/day');

    const movies = data.results;
    createPost(movies, trendingMovie);
};

async function getTrendingSeries() {
    const { data } = await api('tv/popular');

    const trending_Series = data.results;

        createPost(trending_Series, trendingSeries);
};


async function getupcomingmovies() {
    const { data } = await api('movie/upcoming')
    const upcomingMovies = data.results;

    createPost( upcomingMovies, upcomingMoviePreview);
};

async function showOnAir() {
    const { data } = await api('tv/airing_today');

    const onAir = data.results;
    
    createPost(onAir, trendingSeries_OnAir);    
};


async function genresMovies() {
    const { data } = await api('genre/movie/list');

    const categories = data.genres;
    console.log({data, categories})

    movieCategory.innerHTML = "";

    categories.forEach(category =>{
        
        
        const categoryTitle = document.createElement('li');
        categoryTitle.classList.add("category-tilte");
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`; 
        } )
        categoryTitle.setAttribute('id', category.name);

        const categoryname = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryname);

        movieCategory.appendChild(categoryTitle);

    })
}

async function genresTV() {
    const { data } = await api('genre/tv/list');

    const categories = data.genres;
   
    TvCategory.innerHTML = "";
    categories.forEach(category =>{
        
        
        const categoryTitle = document.createElement('li');
        categoryTitle.classList.add("category-tilte");
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`; 
        } )
        categoryTitle.setAttribute('id', category.name);

        const categoryname = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryname);

        TvCategory.appendChild(categoryTitle);

    })
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
    console.log(pagina)

    const tvCategories = data.results;

    createGenericsPost(tvCategories, searchdetails_page);
}
btnDespues.addEventListener('click', ()=>{
    pagina +=1;
    getMultiSearch();
    console.log(pagina)
});
btnAntes.addEventListener('click', ()=>{
    pagina -=1;
    getMultiSearch();
});

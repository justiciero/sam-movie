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


const lazyLoader = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            const url = entry.target.getAttribute('data-src')
            entry.target.setAttribute('src', url)
        }
    })
})

function createMovieSearchPost(movies, container, {lazyLoad = false, clean = true}){
    if(clean){
        container.innerHTML = "";
    }

    movies.forEach(movieCategory => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('search-img');
        movieContainer.addEventListener('click', () =>{
            location.hash = '#movie=' + movieCategory.id;
        });
        
 
         const movieImg = document.createElement('img');
         movieImg.classList.add("movie-img");
         movieImg.setAttribute('alt', movieCategory .title);
         movieImg.setAttribute('data-src',  'https://image.tmdb.org/t/p/w300/' + movieCategory.poster_path);
         movieImg.addEventListener('error', () => {
            movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
        })

         if(lazyLoad) {
            lazyLoader.observe(movieImg)
         }
         
         
         movieContainer.appendChild(movieImg);
         searchMoviedetails_page.appendChild(movieContainer);
     });
}
function createTvSearchPost(movies, container, {lazyLoad = false, clean = true}){
    if(clean){
        container.innerHTML = "";
    }

    movies.forEach(movieCategory => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('search-img');
        movieContainer.addEventListener('click', () =>{
            location.hash = '#tv=' + movieCategory.id;
        });
        
 
         const movieImg = document.createElement('img');
         movieImg.classList.add("movie-img");
         movieImg.setAttribute('alt', movieCategory .title);
         movieImg.setAttribute('data-src',  'https://image.tmdb.org/t/p/w300/' + movieCategory.poster_path);
         movieImg.addEventListener('error', () => {
            movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
        })

         if(lazyLoad) {
            lazyLoader.observe(movieImg)
         }
         
         
         movieContainer.appendChild(movieImg);
         searchMoviedetails_page.appendChild(movieContainer);
     });
}

function createMovieHomePost(movies, container, lazyLoad = false){
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
            movieImg.setAttribute(lazyLoad ? 'data-src' : 'src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);

            movieImg.addEventListener('error', () => {
                movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
            })



            if(lazyLoad) {
                lazyLoader.observe(movieImg)
            }
            
            movieContainer.appendChild(movieContainerpic);
            movieContainerpic.appendChild(movieImg);
            container.appendChild(movieContainer);
    
        });
}

function createTvHomePost(shows, container, lazyLoad = false){
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
            movieImg.setAttribute(lazyLoad ? 'data-src' : 'src',  'https://image.tmdb.org/t/p/w300/' + show.poster_path);
            movieImg.addEventListener('error', () => {
                movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
            })

            if(lazyLoad) {
                lazyLoader.observe(movieImg)
            }
            
            movieContainer.appendChild(movieContainerpic);
            movieContainerpic.appendChild(movieImg);
            container.appendChild(movieContainer);
    
        });
}

function  createGenericsMoviePost(movies, container, {lazyLoad = false, clean = true} = {}, ){

    if(clean){
        container.innerHTML = "";
    }

    movies.forEach(movieCategory => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('search-img');
        movieContainer.addEventListener('click', () =>{
            location.hash = '#movie=' + movieCategory.id;
        });
        
 
         const movieImg = document.createElement('img');
         movieImg.classList.add("movie-img");
         movieImg.setAttribute('alt', movieCategory .title);
         movieImg.setAttribute(lazyLoad ? 'data-src' : 'src',  'https://image.tmdb.org/t/p/w300/' + movieCategory.poster_path);
         movieImg.addEventListener('error', () => {
            movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
        })


         if(lazyLoad) {
             lazyLoader.observe(movieImg)
         }
         
         
         movieContainer.appendChild(movieImg);
         container.appendChild(movieContainer);
     });
}

function  createGenericsTvPost(movies, container, {lazyLoad = false, clean = false} = {}, ){

    if(clean){
        container.innerHTML = "";
    }

    movies.forEach(movieCategory => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('search-img');
        movieContainer.addEventListener('click', () =>{
            location.hash = '#tv=' + movieCategory.id;
        });
        
 
         const movieImg = document.createElement('img');
         movieImg.classList.add("movie-img");
         movieImg.setAttribute('alt', movieCategory .title);
         movieImg.setAttribute(lazyLoad ? 'data-src' : 'src',  'https://image.tmdb.org/t/p/w300/' + movieCategory.poster_path);
         movieImg.addEventListener('error', () => {
            movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
        })


         if(lazyLoad) {
             lazyLoader.observe(movieImg)
         }
         
         
         movieContainer.appendChild(movieImg);
         container.appendChild(movieContainer);
     });
}


function createPostForMoviePages(movies, container, lazyLoad = false){
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
      movieImg.setAttribute(lazyLoad ? 'data-src' : 'src',  'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
      movieImg.addEventListener('error', () => {
        movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
    })

      if(lazyLoad) {
          lazyLoader.observe(movieImg)
      }
      
      movieContainer.appendChild(movieContainerpic);
      movieContainerpic.appendChild(movieImg);
      container.appendChild(movieContainer);
  });
  }

  function createPostForTvPages(tvs, container, lazyLoad = false){
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
      movieImg.setAttribute(lazyLoad ? 'data-src' : 'src',  'https://image.tmdb.org/t/p/w300/' + tv.poster_path);
      movieImg.addEventListener('error', () => {
        movieImg.setAttribute( 'src', 'https://static.platzi.com/static/images/error/img404.png',)
    })

      if(lazyLoad) {
          lazyLoader.observe(movieImg)
      }
      
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
    createMovieHomePost(movies, trendingMovie, true);
};

async function getTrendingSeries() {
    const { data } = await api('tv/popular');

    const trending_Series = data.results;

    createTvHomePost(trending_Series, trendingSeries, true);
};


async function getupcomingmovies() {
    const { data } = await api('movie/upcoming')
    const upcomingMovies = data.results;

    createMovieHomePost(upcomingMovies, upcomingMoviePreview, true);
};

async function showOnAir() {
    const { data } = await api('tv/airing_today');

    const onAir = data.results;
    
    createTvHomePost(onAir, trendingSeries_OnAir, true);    
};


async function genresMovies() {
    const { data } = await api('genre/movie/list');

    const categories = data.genres;

    createCategory(categories, movieCategory)
}

async function genresTV() {
    const { data } = await api('genre/tv/list');

    const categories = data.genres;
    TvCategory.innerHTML = "";
    categories.forEach(category =>{
        
        
        const categoryTitle = document.createElement('li');
        categoryTitle.classList.add("category-tilte");

        categoryTitle.addEventListener('click', () => {
            location.hash = `#tv-category=${category.id}-${category.name}`; 
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
        },
    });

    const movieCategories = data.results;

    createGenericsMoviePost(movieCategories, categoryPageMovie, {lazyLoad: true, clean: true})
}

function getMovieByCategory_scroll(id) {
    return async function () {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;
    
        const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);
    
        if (scrollIsBottom){
            page++;
            const { data } = await api('discover/movie',{
                params: {
                    with_genres: id,
                    page,
                },
            });
            const movieCategories = data.results;
    
            createGenericsMoviePost(
                movieCategories,
                categoryPageMovie,
                { lazyLoad: true, clean: false },
              );
            }
          console.log(page)
    }
}

async function getTvByCategory(id) {
    const { data } = await api('discover/tv',{
        params: {
            with_genres: id,
        }
    });

    const movieCategories = data.results;

    createGenericsTvPost(movieCategories, categoryPageTv, {lazyLoad: true, clean: true})
}

function getTvByCategory_scroll(id){
   return async function (){
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);

    if (scrollIsBottom){
        page++;
        const { data } = await api('discover/tv',{
            params: {
                page,
                with_genres: id,
            }
        });
    
        const movieCategories = data.results;

        createGenericsTvPost(
            movieCategories,
            categoryPageTv,
            { lazyLoad: true, clean: false },
          );
        }
        console.log(page)
   }
}
 


async function getMovieSearch(query) {
    const { data } = await api('search/movie', {
        params: {
          query: query,
        },
    });

    const movieCategories = data.results;

    createMovieSearchPost(movieCategories, searchMoviedetails_page, {lazyLoad: true, clean: true})
    
}

function getMovieSearch_scroll(query){
    return async function (){
     const {
         scrollTop,
         scrollHeight,
         clientHeight
     } = document.documentElement;
 
     const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);
 
     if (scrollIsBottom){
         page++;
         const { data } = await api('search/movie', {
            params: {
              query: query,
              page,
            },
        });
     
         const movieCategories = data.results;
 
         createMovieSearchPost(
             movieCategories,
             categoryPageTv,
             { lazyLoad: true, clean: false },
           );
         }
    }
 }


async function getTvSearch(query2) {
    const { data } = await api('search/tv', {
        params: {
          query: query2,
          'page' : pagina,
        },
    });

    const tvCategories = data.results;

    createTvSearchPost(tvCategories, searchMoviedetails_page, {lazyLoad: true, clean: true})
}

function getTvSearch_scroll(query2){
    return async function (){
     const {
         scrollTop,
         scrollHeight,
         clientHeight
     } = document.documentElement;
 
     const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);
 
     if (scrollIsBottom){
         page++;
         const { data } = await api('search/tv', {
            params: {
              query: query2,
              page,
            },
        });
     
         const movieCategories = data.results;
 
         createTvSearchPost(
             movieCategories,
             categoryPageTv,
             { lazyLoad: true, clean: false },
           );
         }
    }
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
        movieImg.setAttribute('data-src',  'https://image.tmdb.org/t/p/w300/' + sMovie.poster_path);
        lazyLoader.observe(movieImg)

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
        movieImg.setAttribute('data-src',  'https://image.tmdb.org/t/p/w300/' + sMovie.poster_path);
        lazyLoader.observe(movieImg)
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
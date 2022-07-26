
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

    createPostForPages(movies, newMoviePage);
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

        createPostForPages(movies, TrendingMoviePage);
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

    createPostForPages(upcomingMovies, upcomingMoviePage);
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

    createPostForPages(upcomingMovies, bestRatedMoviePage);
};
bestratedmoviebtn.addEventListener('click', ()=>{
    pagina +=1;
    allTopRated_PageMovie();
});
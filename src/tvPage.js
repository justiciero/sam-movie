
async function allTrending_PageTv() {
    const { data } = await api('tv/popular',{
        params: {
            'page' : pagina2,
        }
    });

    const movies = data.results;

    createPostForPages(movies, trendingShow_TvPage);
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

    createPostForPages(movies, bestRatedTvPage);
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

    createPostForPages(upcomingMovies, onAir_TvPage);
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

    createPostForPages(upcomingMovies, onAirToday_TvPage);
};
showOnAirTbtn.addEventListener('click', ()=>{
    pagina +=1;
    onAirToday_PageTv() ; 
});
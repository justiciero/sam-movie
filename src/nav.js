searchbtn.addEventListener('click', () =>{
    location.hash = 'search='
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    
    if(location.hash.startsWith('#movie')) {
        moviesPages();
    } else if(location.hash.startsWith('search=')){
        searchOp();
    } else if(location.hash.startsWith('#tvshow')){
        TVPages();
    } else if(location.hash.startsWith('#description')){
        movietvDeatailsPage();
    } else{
        homePage();
    }

    location.hash
}

function homePage(){
    headerSection.classList.remove('active-size');
    headerSectionBack.classList.remove('inactiveback');
    homeOp.classList.add('inactive');
    categoryOp.classList.remove('inactive');
    formSection.classList.remove('inactive');
    
    home_section.classList.remove('inactive');
    moviePage_section.classList.add('inactive');
    tvPage_section.classList.add('inactive');
    description_section.classList.add('inactive');

    getupcomingmovies();
    getTrendingMovies();
    getTrendingSeries();
    showOnAir();
    genresMovies();
    console.log("Home")
};

function moviesPages(){
    homeOp.classList.remove('inactive');
    categoryOp.classList.add('inactive');
    movieOp.classList.remove('inactive-color');
    home_section.classList.add('inactive');
    moviePage_section.classList.remove('inactive');

    console.log('Movies')
};

function TVPages(){
    homeOp.classList.remove('inactive');
    categoryOp.classList.add('inactive');
    tvOp.classList.add('inactive-color');
    home_section.classList.add('inactive');
    moviePage_section.classList.add('inactive');
    tvPage_section.classList.remove('inactive');
    console.log('TV Show')
};
function searchOp(){
    console.log('Search')
};
function movietvDeatailsPage(){
    headerSection.classList.add('active-size');
    headerSectionBack.classList.add('inactiveback');
    formSection.classList.add('inactive');
    homeOp.classList.remove('inactive');
    categoryOp.classList.add('inactive');
    tvOp.classList.remove('inactive-color');
    home_section.classList.add('inactive');
    moviePage_section.classList.add('inactive');
    tvPage_section.classList.add('inactive');
    description_section.classList.remove('inactive');
    console.log('Description')
};

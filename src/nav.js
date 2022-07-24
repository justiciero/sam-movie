searchbtn.addEventListener('click', () =>{
    location.hash = '#search=';
});


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    
    if(location.hash.startsWith('#movie')) {
        moviesPages();
    } 
    else if(location.hash.startsWith('#search=')) {
        searchOp();
    }  
    else if(location.hash.startsWith('#tvshow=')){
        TVPages();
    } 
    else if(location.hash.startsWith('#description')){
        movietvDeatailsPage();
    } else if (location.hash.startsWith('#category=')){
        categorypages_view()
    }
    else{
        homePage();
    }

    location.hash
}

function homePage(){
    headerSection.classList.remove('active-size');
    headerSectionBack.classList.remove('inactiveback');
    homeOp.classList.add('inactive');
    movieOp.classList.remove('inactive-color');
    tvOp.classList.remove('inactive-color');
    categoryOp.classList.remove('inactive');
    formSection.classList.remove('inactive');
    
    home_section.classList.remove('inactive');
    moviePage_section.classList.add('inactive');
    tvPage_section.classList.add('inactive');
    description_section.classList.add('inactive');
    search_section.classList.add('inactive');
    headerSection.classList.remove('active-size-search');
    category_section.classList.add('inactive');

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
    movieOp.classList.add('inactive-color');
    tvOp.classList.remove('inactive-color');
    home_section.classList.add('inactive');
    moviePage_section.classList.remove('inactive');
    search_section.classList.add('inactive');
    headerSection.classList.remove('active-size-search');
    headerSectionBack.classList.remove('inactiveback');
    headerSection.classList.remove('active-size');
    description_section.classList.add('inactive');
    formSection.classList.remove('inactive');
    categoryNav.classList.remove('inactive');
    category_section.classList.add('inactive');
    categoryPageMovie.classList.remove('inactive')
    // categoryPageTv.classList.add('inactive')

    console.log('Movies')
    genresMovies();
};
function TVPages(){
    homeOp.classList.remove('inactive');
    categoryOp.classList.add('inactive');
    tvOp.classList.add('inactive-color');
    movieOp.classList.remove('inactive-color');
    home_section.classList.add('inactive');
    moviePage_section.classList.add('inactive');
    tvPage_section.classList.remove('inactive');
    search_section.classList.add('inactive');
    headerSection.classList.remove('active-size-search');
    headerSectionBack.classList.remove('inactiveback');
    headerSection.classList.remove('active-size');
    description_section.classList.add('inactive');
    console.log('TV Show');
    formSection.classList.remove('inactive');
    categoryNav.classList.remove('inactive');
    category_section.classList.add('inactive');
    genresOp.classList.remove('inactive');
    categoryPageMovie.classList.add('inactive');
    categoryPageTv.classList.remove('inactive');
    
    genresTV();
};
function searchOp(){
    
    search_section.classList.remove('inactive');

    headerSection.classList.add('active-size-search');
    headerSectionBack.classList.add('inactiveback');
    home_section.classList.add('inactive');
    homeOp.classList.remove('inactive');
    tvOp.classList.remove('inactive-color');
    movieOp.classList.remove('inactive-color');
    tvPage_section.classList.add('inactive');
    moviePage_section.classList.add('inactive');
    description_section.classList.add('inactive');
    categoryOp.classList.add('inactive');
    description_section.classList.add('inactive');
    headerSection.classList.add('active-size');
    formSection.classList.remove('inactive');
    categoryNav.classList.remove('inactive');
    category_section.classList.add('inactive');
    
    console.log('Search');

    genresMovies();
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
    search_section.classList.add('inactive');
    formSection.classList.add('inactive');
    headerSection.classList.remove('active-size-search');
    categoryNav.classList.add('inactive');
    category_section.classList.add('inactive');

    const [_,categoryData] = location.hash.split('=');
    const [categoryId,categoryName] = categoryData.split('-');
    title.innerHTML = categoryName;

    getMovieByCategory(categoryId);
    genresMovies();
};

function categorypages_view (){
    category_section.classList.remove('inactive');
    home_section.classList.add('inactive');
    moviePage_section.classList.add('inactive');
    tvPage_section.classList.add('inactive');
    description_section.classList.add('inactive');
    search_section.classList.add('inactive');
    headerSection.classList.remove('active-size-search');
    headerSectionBack.classList.remove('inactiveback');
    headerSection.classList.remove('active-size');


    const [_, categoryData] = location.hash.split('=');

    const [categoryId, categoryName] = categoryData.split('-');

  title.innerHTML = categoryName;

    getMovieByCategory(categoryId);
    getTvByCategory(categoryId);
    genresMovies();
}
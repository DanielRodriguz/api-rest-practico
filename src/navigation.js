
let page=1 
let maxPage;
let infinteScroll
searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=' + searchFormInput.value;
})

trendingBtn.addEventListener('click', () => {
  location.hash = '#trends'
})
arrowBtn.addEventListener('click', () => {
  // location.hash = '#home='
  history.back();
})


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
window.addEventListener('scroll',infinteScroll,false)

function navigator() {
  console.log({ location });

  if(infinteScroll){
    window.removeEventListener('scroll',infinteScroll,{passive: false})
    infinteScroll =undefined
  }
  
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }
  document.body.scrollTop =  0
  document.documentElement.scrollTop =  0

  if(infinteScroll){
    window.addEventListener('scroll',infinteScroll,{passive: false})
  }
}


function homePage() {
  console.log('Home!!');

  headerSection.classList.remove('header-container--long')
  headerSection.style.background='';
  arrowBtn.classList.add('inactive')
  headerTitle.classList.remove('inactive')
  headerCategoryTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive')
  categoriesPreviewSection.classList.remove('inactive')
  likedMoviesSection.classList.remove('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')


  getTrendingMoviesPreview();
  getCategoriesPreview();
  getLikedMovies();
}

function categoriesPage() {
  console.log('categories!!');

  headerSection.classList.remove('header-container--long')
  headerSection.style.background='';
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')

  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  likedMoviesSection.classList.add('inactive')

  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, categoryData] = location.hash.split('=')
  const [categoryId,categoryName] = categoryData.split('-')

  headerCategoryTitle.innerHTML = decodeURIComponent(categoryName);

  getMoviesByCategory(categoryId);
  infinteScroll = getPaginatedMoviesByCategory(categoryId) ;
}

function movieDetailsPage() {
  console.log('Movie!!');

  headerSection.classList.add('header-container--long')
  // headerSection.style.background='';
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  likedMoviesSection.classList.add('inactive')

  genericSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')

  const [_, movieID] = location.hash.split('=')
  getMovieById(movieID);
}

function searchPage() {
  console.log('Search!!');

  headerSection.classList.remove('header-container--long')
  headerSection.style.background='';
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')

  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  likedMoviesSection.classList.add('inactive')

  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, query] = location.hash.split('=')
  getMoviesBySearch(query);

  infinteScroll = getPaginatedMoviesBySearch(query) ;
}

function trendsPage() {
  console.log('TRENDS!!');

  headerSection.classList.remove('header-container--long')
  headerSection.style.background='';
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')

  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  likedMoviesSection.classList.add('inactive')

  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  headerCategoryTitle.innerHTML='Tendencias'

  getTrendingMovies()

  infinteScroll= getPaginatedMovies
}


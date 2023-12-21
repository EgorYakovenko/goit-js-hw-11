

//========================================================================================================================================

// Індикатор завантаження не відображається між запитами => индикатор загрузки это кнопка submit ( слово search становится анимированным )

//========================================================================================================================================

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryWrapperEl= document.querySelector('.gallery')
const inputValue = document.querySelector('.search-form');
const loader = document.querySelector('.loader')
const search = document.querySelector('.search')
const gallery = document.querySelector('.gallery')


const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '41296916-da04ab2f63441e92262fae4bb'

inputValue.addEventListener('submit', onSerch)


function changeTitleOnBtn() {
  search.classList.add('loader')
  search.textContent = '';
};


function removeClassOnBtn() {
  search.classList.remove('loader')
  search.textContent = 'Search';
};



function onSerch(event) {
    event.preventDefault(); 
    changeTitleOnBtn()
    clearMarcup
    const form = event.currentTarget;
    const searchQuery = form.elements.query.value;

  fetchPicture(searchQuery)
    .then(renderCard)
    .catch(error => console.log('error'))
    .finally(() => form.reset()).then(() => { removeClassOnBtn()})

};
 
function fetchPicture(search) { 
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((response) => {
      return response.json()
    })
    .catch(error => {
      console.log('error');
    });
        
};

  


function renderCard(picture) { 
  
  const respHits = picture.hits;
  if (respHits.length === 0) {
    onWarning()
  } else {
  const markup = createMarkup(picture.hits)
  galleryWrapperEl.innerHTML = markup;}
  
  const lightbox = new SimpleLightbox('.gallery a', { 
          captions: true,
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        })
          .refresh();
       
};

 function createMarkup(arr) {
    return arr
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `
          <div class="photo-card .shadow-drop-2-center">
              <a class="gallery__link" href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
              </a>
              <div class="info">
                <p class="info-item">
                  <b>Likes: ${likes}</b>
                </p>
                <p class="info-item">
                  <b>Views: ${views}</b>
                </p>
                <p class="info-item">
                  <b>Comments: ${comments}</b>
                </p>
                <p class="info-item">
                  <b>Downloads: ${downloads}</b>
                </p>
              </div>
            </div>`;
        }
      )
      .join('');
};

function onWarning() {
    iziToast.warning({
    title: 'Caution',
      message: "Sorry, there are no images matching your search query. Please try again!",
    
    });
  clearMarcup()
};

function clearMarcup() {
  
    gallery.innerHTML = '';
};

// new SimpleLightbox('.gallery a', { captionDelay: 250 })

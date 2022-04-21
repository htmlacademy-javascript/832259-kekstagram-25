const userFiltersElement = document.querySelector('.img-filters');
const filterElement = document.querySelectorAll('.img-filters__button');

const RANDOM_PHOTO_COUNT = 10;
const compareComments = (a, b) => b.comments.length - a.comments.length;
const getRandomThumbnails = () => Math.random() - 0.5;

function clickOnFilterButton (renderPhotoPreview, photos) {
  let sortedData;
  userFiltersElement.addEventListener ('click', (evt)  => {
    switch (evt.target.id) {
      case 'filter-random':
        sortedData = photos
          .sort(getRandomThumbnails)
          .slice(0, RANDOM_PHOTO_COUNT);
        for (const button of filterElement) {
          button.classList.remove('img-filters__button--active');
        }
        evt.target.classList.add('img-filters__button--active');
        break;
      case 'filter-discussed':
        sortedData = photos
          .sort(compareComments);
        for (const button of filterElement) {
          button.classList.remove('img-filters__button--active');
        }
        evt.target.classList.add('img-filters__button--active');
        break;
      case 'filter-default':
        sortedData = photos;
        for (const button of filterElement) {
          button.classList.remove('img-filters__button--active');
        }
        evt.target.classList.add('img-filters__button--active');
    }
    if (sortedData) {
      renderPhotoPreview(sortedData);
    }
  });
}

export {userFiltersElement};
export {clickOnFilterButton};

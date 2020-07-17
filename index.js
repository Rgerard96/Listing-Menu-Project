const servicesList = document.querySelector('.services-list');
const carsList = document.querySelector('.cars-list');
const jobsList = document.querySelector('.jobs-list');
const housesList = document.querySelector('.houses-list');
const servicesListingContent = document.getElementById('services-listing-content');
const carsListingContent = document.getElementById('cars-listing-content');
const jobsListingContent = document.getElementById('jobs-listing-content');
const housesListingContent = document.getElementById('houses-listing-content');
const listingContent = document.getElementById('listing-content');
const arrow = document.querySelectorAll('.arrow');

servicesListingContent.style.display = 'grid';
carsListingContent.style.display = 'none';
jobsListingContent.style.display = 'none';
housesListingContent.style.display = 'none';


servicesList.addEventListener('click', function() {
  servicesListingContent.style.display = 'grid';
  carsListingContent.style.display = 'none';
  jobsListingContent.style.display = 'none';
  housesListingContent.style.display = 'none';

  if (carsList.style.display && jobsList.style.display && housesList.style.display === 'none') {
    carsList.style.display = 'flex';
    jobsList.style.display = 'flex';
    housesList.style.display = 'flex';
  } else {
    carsList.style.display = 'none';
    jobsList.style.display = 'none';
    housesList.style.display = 'none';
  }
  servicesList.style.display = 'flex';
  arrow[0].classList.toggle('arrow-display');

  if (screen.width <= 1100) {
    servicesList.parentElement.classList.toggle('listing-menu-toggle');
    servicesList.firstElementChild.classList.toggle('fas-none');
    listingContent.classList.toggle('listing-content-display');
  }
})
carsList.addEventListener('click', function() {
  servicesListingContent.style.display = 'none';
  carsListingContent.style.display = 'grid';
  jobsListingContent.style.display = 'none';
  housesListingContent.style.display = 'none';

  if (servicesList.style.display && jobsList.style.display && housesList.style.display === 'none') {
    servicesList.style.display = 'flex';
    jobsList.style.display = 'flex';
    housesList.style.display = 'flex';
  } else {
    servicesList.style.display = 'none';
    jobsList.style.display = 'none';
    housesList.style.display = 'none';
  }
  carsList.style.display = 'flex';
  arrow[1].classList.toggle('arrow-display');

  if (screen.width <= 1100) {
    carsList.parentElement.classList.toggle('listing-menu-toggle');
    carsList.firstElementChild.classList.toggle('fas-none');
    listingContent.classList.toggle('listing-content-display');
  }
})
jobsList.addEventListener('click', function() {
  servicesListingContent.style.display = 'none';
  carsListingContent.style.display = 'none';
  jobsListingContent.style.display = 'grid';
  housesListingContent.style.display = 'none';

  if (carsList.style.display && servicesList.style.display && housesList.style.display === 'none') {
    carsList.style.display = 'flex';
    servicesList.style.display = 'flex';
    housesList.style.display = 'flex';
  } else {
    carsList.style.display = 'none';
    servicesList.style.display = 'none';
    housesList.style.display = 'none';
  }
  jobsList.style.display = 'flex';
  arrow[2].classList.toggle('arrow-display');

  if (screen.width <= 1100) {
    jobsList.parentElement.classList.toggle('listing-menu-toggle');
    jobsList.firstElementChild.classList.toggle('fas-none');
    listingContent.classList.toggle('listing-content-display');
  }
})
housesList.addEventListener('click', function() {
  servicesListingContent.style.display = 'none';
  carsListingContent.style.display = 'none';
  jobsListingContent.style.display = 'none';
  housesListingContent.style.display = 'grid';

  if (carsList.style.display && jobsList.style.display && servicesList.style.display === 'none') {
    carsList.style.display = 'flex';
    jobsList.style.display = 'flex';
    servicesList.style.display = 'flex';
  } else {
    carsList.style.display = 'none';
    jobsList.style.display = 'none';
    servicesList.style.display = 'none';
  }
  housesList.style.display = 'flex';
  arrow[3].classList.toggle('arrow-display');

  if (screen.width <= 1100) {
    housesList.parentElement.classList.toggle('listing-menu-toggle');
    housesList.firstElementChild.classList.toggle('fas-none');
    listingContent.classList.toggle('listing-content-display');
  }
})

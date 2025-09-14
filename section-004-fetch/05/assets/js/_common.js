export const apiUrl = "https://demo-api.siit.ro/api";

const preloader = document.querySelector('.preloader');

export function showPreloader(resourceList){
  resourceList.classList.add('d-none');
  preloader.classList.remove('d-none');
}

export function hidePreloader(resourceList){
  preloader.classList.add('d-none');
  resourceList.classList.remove('d-none');
}
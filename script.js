function changeLanguage(lang) {
  fetch('languages.json')
    .then(response => response.json())
    .then(data => {
      
      const topNavItems = document.querySelectorAll(".top-nav .nav-item");
      data[lang].topNav.forEach((item, index) => {
        if (topNavItems[index]) topNavItems[index].textContent = item;
      });

      
      document.querySelector(".search-bar").placeholder = data[lang].searchPlaceholder;

      
      const subNavItems = document.querySelectorAll(".sub-nav .sub-nav-item");
      data[lang].subNav.forEach((item, index) => {
        if (subNavItems[index]) subNavItems[index].textContent = item;
      });

      
      const newsItems = document.querySelectorAll(".news-container .news-item p");
      data[lang].news.forEach((item, index) => {
        if (newsItems[index]) newsItems[index].textContent = item;
      });
    })
    .catch(error => console.error("Error loading translations:", error));
}



const container = document.querySelector('.news-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollAmount = 0;

rightArrow.addEventListener('click', () => {
  scrollAmount -= 240; 
  container.style.transform = `translateX(${scrollAmount}px)`;
});

leftArrow.addEventListener('click', () => {
  scrollAmount += 240; 
  container.style.transform = `translateX(${scrollAmount}px)`;
});


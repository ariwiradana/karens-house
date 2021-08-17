$(document).ready(() => {
   navConfig();
   mobileSideNavigation();
   footer();
   navbarScroll();
});

const startLoading = () => {
   document.body.classList.add('overflow-hidden');

   let path;
   let title = document.title;
   const loadingContainer = document.querySelector('.loading-container')

   if (title == "Karéns House | Hidden Paradise of Ubud") {
      path = "";
   } else {
      path = "../";
   }

   const content = `
        <div class="loading-content">
            <div id="loading-content" class="animate__animated animate__fadeInUp">
                <img src="${path}assets/logo/logo.svg">
                <div class="loader">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
        </div>
   `;
   loadingContainer.insertAdjacentHTML('beforeend', content);
}

const stopLoading = () => {
   document.querySelector('.loading-container').classList.add('animate__slideOutUp')
   document.body.classList.remove('overflow-hidden')
}

const navbarScroll = () => {
   const scrollEffect = () => {
      window.onscroll = () => {
         let scroll = Math.round(window.pageYOffset);

         if (scroll >= 300) {
            document.querySelector('.nav-white-container').classList.add('nav-white-active');
            document.querySelector('.nav-white-mobile-container').classList.add('nav-white-mobile-active');
         } else {
            document.querySelector('.nav-white-container').classList.remove('nav-white-active');
            document.querySelector('.nav-white-mobile-container').classList.remove('nav-white-mobile-active');
         }
      };
   }
   const title = document.title;
   if (title == 'Karéns House | Hidden Paradise of Ubud') {
      scrollEffect();
   } else if (title == 'Rooms | Karéns House') {
      scrollEffect();
   } else {
      document.querySelector('.nav-white-container').classList.add('nav-white-active');
      document.querySelector('.nav-white-mobile-container').classList.add('nav-white-mobile-active');
   }
}


const navConfig = () => {
   const title = document.title;
   if (title == 'Karéns House | Hidden Paradise of Ubud') {
      navigationBar();
      navigationBarWhite();
   } else if (title == 'Rooms | Karéns House') {
      navigationBar();
      navigationBarWhite();
   } else {
      navigationBarWhite();
   }
}

const navigationBar = () => {
   const title = document.title;
   let navURL;
   if (title == 'Karéns House | Hidden Paradise of Ubud') {
      navURL = ""
   } else {
      navURL = "../"
   }

   const navContainer = document.querySelector('.nav-container');
   const row = `
      <div class="nav-content">
         <a href="${navURL}">
            <img src="${navURL}assets/logo/logo-white.svg" alt="">
         </a>
         <div class="nav-link-content">
            <div class="nav-top-items">
               <div class="nav-items-link">
                  <a href=""><i class="uil uil-envelope text-light"></i> karenshouseubud@gmail.com</a>
               </div>
               <div class="nav-items-link">
                  <a href=""><i class="uil uil-mobile-android text-light"></i> +6281 239 863 16</a>
               </div>
               <div class="nav-items-link nav-sosmed">
                  <a href="https://www.instagram.com/karenshouse_ubud/" target="_blank">
                     <i class="uil uil-instagram text-light"></i>
                  </a>
                  <a href="https://www.facebook.com/karenshouseubud/" target="_blank">
                     <i class="uil uil-facebook-f text-light"></i>
                  </a>
               </div>
            </div>
            <hr>
            <div class="nav-items">
               <div class="nav-items-link">
                  <a href="${navURL}">Home</a>
               </div>
               <div class="nav-items-link dropdown">
                  <a href="#">Rooms <i class="uil uil-angle-down icon-sm text-light"></i></a>
                  <div class="dropdown-content">
                     <a class="id-room" href="${navURL}rooms/" data-room="1">Family Room</a>
                     <hr>
                     <a class="id-room" href="${navURL}rooms/" data-room="2">Double Room Mountain View</a>
                     <hr>
                     <a class="id-room" href="${navURL}rooms/" data-room="3">Double Room Terrace View</a>
                  </div>
               </div>
               <div class="nav-items-link">
                  <a href="${navURL}gallery/">Gallery</a>
               </div>
               <div class="nav-items-link">
                  <a href="${navURL}location/">Location</a>
               </div>
            </div>
         </div>
      </div>`;
   navContainer.insertAdjacentHTML('beforeend', row);
}

const navigationBarWhite = () => {
   const title = document.title;
   let navURL;
   if (title == 'Karéns House | Hidden Paradise of Ubud') {
      navURL = ""
   } else {
      navURL = "../"
   }
   const navContainerWhite = document.querySelector('.nav-white-container');
   const row = `
      <div class="nav-white-content">
         <a href="${navURL}">
            <img src="${navURL}assets/logo/logo-black.svg" alt="">
         </a>
         <div class="nav-white-items-link">
            <div class="nav-white-link">
               <a href="${navURL}">Home</a>
            </div>
            <div class="nav-white-link dropdown">
               <a href="#">Rooms <i class="uil uil-angle-down icon-sm"></i></a>
               <div class="dropdown-content">
               <a class="id-room" href="${navURL}rooms/" data-room="1">Family Room</a>
               <hr>
               <a class="id-room" href="${navURL}rooms/" data-room="2">Double Room Mountain View</a>
               <hr>
               <a class="id-room" href="${navURL}rooms/" data-room="3">Double Room Terrace View</a>
               </div>
            </div>
            <div class="nav-white-link">
               <a href="${navURL}gallery/">Gallery</a>
            </div>
            <div class="nav-white-link">
               <a href="${navURL}location/">Location</a>
            </div>
            <div class="nav-white-link nav-book booking">
               <span class="book">Book Now <span class="icon-arrow">&#10230;</span></span>
            </div>
         </div>
      </div>`;
   navContainerWhite.insertAdjacentHTML('beforeend', row);
}

document.addEventListener('click', (e) => {
   if (e.target.classList.contains('id-room')) {
      localStorage.setItem('room-type', e.target.dataset.room);
   }
})

const mobileSideNavigation = () => {
   const title = document.title;
   const sidenavContainer = document.querySelector('.sidenav-mobile-container');
   let navURL;
   if (title == 'Karéns House | Hidden Paradise of Ubud') {
      navURL = ""
   } else {
      navURL = "../"
   }
   const row = `
      <div class="sidenav-mobile-content">
         <div class="sidenav-mobile-header">
         <a href="${navURL}" class="link-to" data-link="0">
            <img class="sidenav-mobile-logo" src="${navURL}assets/logo/logo-black.svg" alt="">
         </a>
         <i class="uil uil-times icon-lg"></i>
         </div>
         <div class="sidenav-mobile-body">
         <div class="sidenav-mobile-item active">
            <a href="${navURL}" class="link-to" data-link="0">Home</a>
         </div>
         <div class="sidenav-mobile-item sidenav-dropdown">
            <a href="#">Rooms <i class="uil uil-angle-down icon-sm"></i></a>
         </div>
         <div class="sidenav-dropdown-container">
            <div class="sidenav-dropdown-content">
               <a class="id-room" href="${navURL}rooms/" data-room="1">Family Room</a>
               <hr>
               <a class="id-room" href="${navURL}rooms/" data-room="2">Double Room Mountain View</a>
               <hr>
               <a class="id-room" href="${navURL}rooms/" data-room="3">Double Room Terrace View</a>
            </div>
         </div>
         <div class="sidenav-mobile-item">
            <a href="${navURL}gallery/" class="link-to" data-link="2">Gallery</a>
         </div>
         <div class="sidenav-mobile-item">
            <a href="${navURL}location/" class="link-to" data-link="3">Location</a>
         </div>
         <div class="sidenav-mobile-footer">
            <p class="mb-2">Stay connected with us</p>
            <div class="sidenav-mobile-footer-content">
               <a href="https://www.instagram.com/karenshouse_ubud/" target="_blank">
               <i class="uil uil-instagram icon-sm"></i>
               </a>
               <a href="https://www.facebook.com/karenshouseubud/" target="_blank">
               <i class="uil uil-facebook-f icon-sm"></i>
               </a>
            </div>
         </div>
         </div>
      </div>   
   `;
   sidenavContainer.insertAdjacentHTML('beforeend', row);

   document.addEventListener('click', (e) => {
      if (e.target.classList.contains('id-room')) {
         localStorage.setItem('nav-link', e.target.dataset.room);
      }
   });

   const showSidenav = () => {
      document.querySelector('.sidenav-mobile-container').classList.add('sidenav-active');
      document.body.classList.add('overflow-hidden');
   }

   const hideSidenav = () => {
      document.querySelector('.sidenav-mobile-container').classList.remove('sidenav-active');
      document.body.classList.remove('overflow-hidden');
   }

   document.querySelector('.nav-white-menu-icon')
      .addEventListener('click', () => {
         showSidenav();
      })

   document.querySelector('.nav-white-menu-icon, .menu-icon')
      .addEventListener('click', () => {
         showSidenav();
      });

   document.querySelector('.sidenav-mobile-header i')
      .addEventListener('click', () => {
         hideSidenav();
      });

   document.querySelector('.sidenav-dropdown').addEventListener('click', () => {
      document.querySelector('.sidenav-dropdown i').classList.toggle('uil-angle-up');
      document.querySelector('.sidenav-dropdown-container').classList.toggle('sidenav-dropdown-active');
   });
}

const updateActiveSidenav = () => {
   const mobileSidenavActive = document.querySelectorAll('.sidenav-mobile-item');
   for (let item of mobileSidenavActive) {
      item.classList.remove('active');
   }
   const sidenavIndex = localStorage.getItem('nav-link');
   mobileSidenavActive[sidenavIndex].classList.add('active');
}

function footer() {
   let imgPath;
   let navPath;
   let navIndex;
   let title = document.title;
   const footerContainer = document.querySelector('footer');

   if (title == "Karéns House | Hidden Paradise of Ubud") {
      imgPath = "assets";
      navPath = "";
      navIndex = "/";
   } else {
      imgPath = "../assets";
      navPath = "../";
      navIndex = "../"
   }

   const content = `
            <hr>
            <div class="footer-content">
               <div class="footer-item">
                     <a href="${navIndex}">
                        <h6 class="footer-link-title">Home</h6>
                     </a>
               </div>
               <div class="footer-item">
                     <div class="d-flex flex-column">
                        <h6 class="footer-link-title footer-dropdown-web-btn">Room Type</h6>
                        <div class="footer-dropdown-web">
                           <a href="${navPath}rooms/" class="id-room" data-room="1">
                                 <h6 class="footer-link">Family Room</h6>
                           </a>
                           <a href="${navPath}rooms/" class="id-room" data-room="2">
                                 <h6 class="footer-link">Double Room Mountain View</h6>
                           </a>
                           <a href="${navPath}rooms/" class="id-room" data-room="3">
                                 <h6 class="footer-link">Double Room Terrace View</h6>
                           </a>
                        </div>
                     </div>
               </div>
               <div class="footer-item">
                     <a href="${navPath}gallery/">
                        <h6 class="footer-link-title">Gallery</h6>
                     </a>
               </div>
               <div class="footer-item">
                     <a href="${navPath}location/">
                        <h6 class="footer-link-title">Location</h6>
                     </a>
               </div>
            </div>
            <hr class="mb-0">
            <div class="mobile-footer-link">
               <a href="${navIndex}">
                  <div class="footer-dropdown">            
                     <h6 class="footer-link-title">Home</h6>
                     <i class="footer-dropdown-icon uil uil-angle-right"></i>
                  </div>
               </a>
            </div>
            <div class="mobile-footer-link">
               <div class="footer-dropdown btn-footer-dropdown">            
                     <h6 class="footer-link-title">Room Types</h6>
                     <i id="footer-dropdown-icon" class="footer-dropdown-icon uil uil-angle-right"></i>
               </div>
               <div class="footer-dropdown-link">
                     <a href="${navPath}rooms/" class="id-room" data-room="1">
                        <h6 class="footer-link">Family Room</h6>
                     </a>
                     <a href="${navPath}rooms/" class="id-room" data-room="2">
                        <h6 class="footer-link">Double Room Mountain View</h6>
                     </a>
                     <a href="${navPath}rooms/" class="id-room" data-room="3">
                        <h6 class="footer-link">Double Room Terrace View</h6>
                     </a>
               </div>
            </div>
            <div class="mobile-footer-link">
               <a href="${navPath}gallery/">
                  <div class="footer-dropdown">            
                     <h6 class="footer-link-title">Gallery</h6>
                     <i class="footer-dropdown-icon uil uil-angle-right"></i>
                  </div>
               </a>
            </div>
            <div class="mobile-footer-link">
               <a href="${navPath}location/">
                     <div class="footer-dropdown">            
                        <h6 class="footer-link-title">Location</h6>
                        <i class="footer-dropdown-icon uil uil-angle-right"></i>
                     </div>
               </a>
            </div>
            <div class="logo-icon-content">
               <a href="${navPath}">
                  <img src="${imgPath}/logo/logo-black.svg" alt="">
               </a>
               <div class="sosmed-content">
                     <h6 class="footer-link"><small>Stay Connected with Us</small></h6>
                     <div class="footer-sosmed-content">
                        <a href="https://www.instagram.com/karenshouse_ubud/" target="_blank">
                           <i class="uil uil-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/karenshouseubud/" target="_blank">
                           <i class="uil uil-facebook-f"></i>
                        </a>
                     </div>
               </div>
            </div>
            <div class="copyrigtht-top-content">
               <p class="text-copyright"><small>Copyright &copy 2021, Karéns House. All Rights Reserved</small></p>
               <a href="#pages" class="top">
                     <div class="d-flex align-items-center">
                        <h6 class="text-copyright"><small>Top</small></h6>
                        <i class="ml-1 uil uil-angle-up icon-lg footer-top-icon"></i>
                     </div>
               </a>
            </div>
         `;

   footerContainer.insertAdjacentHTML('beforeend', content);

   const footerDropdownBtn = document.querySelector('.footer-dropdown-web-btn');
   footerDropdownBtn.addEventListener('click', () => {
      const footerDropdown = document.querySelector('.footer-dropdown-web');
      const footerDropwodnIcon = document.querySelector('.uil-angle-down');
      footerDropdown.classList.toggle('footer-dropdown-web-active');
      footerDropwodnIcon.classList.toggle('uil-angle-up');
   });

   document.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-footer-dropdown')) {
         document.querySelector('.footer-dropdown-link').classList.toggle('footer-dropdown-active');
      }

      setTimeout(() => {
         document.querySelector('.footer-dropdown-link').classList.remove('footer-dropdown-active');
      }, 6000);
   })
}
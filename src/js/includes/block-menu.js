const { Navigation, Autoplay } = require("swiper");

import Swiper from "swiper";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFudmVyeXVyayIsImEiOiJjbDJ1NXY3YWgwYjV3M2NvNHRteW9tZXpkIn0.zXeb65io4SiZQl3BbejBMQ";

const swiper = new Swiper(".swiper", {
  centeredSlides: false,
  modules: [Navigation],

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 5,
      slidesPerGroup: 4,
      spaceBetween: 50,
    },
  },
});

const iswiper = new Swiper(".mySwiper", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  speed: 1500,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});

if (document.querySelector("#map")) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/danveryurk/cl343ryf0000014qf07xxxlvt",
    center: [30.197, 55.187],
    zoom: 15,
    pitch: 50,
  });
  map.on("load", () => {
    map.loadImage(
      "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      (error, image) => {
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [30.198897, 55.193295],
                },
                properties: {
                  title: "Кировский мост",
                },
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [30.2006252, 55.1845255],
                },
                properties: {
                  title: "Три штыка",
                },
              },
            ],
          },
        });

        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.0],
            "text-anchor": "top",
          },
        });
      }
    );
  });
}

if (document.querySelector(".header__menu-btn")) {
  document.querySelector(".header__menu-btn").addEventListener("click", (e) => {
    if (!e.target.classList.contains("lock-scroll")) {
      document.querySelector("body").classList.add("lock-scroll");
    }
  });

  document.querySelector(".backdrop").addEventListener("click", (e) => {
    if (!e.target.classList.contains("lock-scroll")) {
      document.querySelector("body").classList.remove("lock-scroll");
    }
  });

  document.querySelector(".header__cross").addEventListener("click", (e) => {
    if (!e.target.classList.contains("lock-scroll")) {
      document.querySelector("body").classList.remove("lock-scroll");
    }
  });
}

if (document.querySelector(".header")) {
  var header = document.getElementById("myHeader");
  header.classList.add("sticky");

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

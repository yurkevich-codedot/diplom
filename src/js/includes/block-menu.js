const { Navigation } = require("swiper");

import Swiper from "swiper";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFudmVyeXVyayIsImEiOiJjbDJ1NXY3YWgwYjV3M2NvNHRteW9tZXpkIn0.zXeb65io4SiZQl3BbejBMQ";

const swiper = new Swiper(".swiper", {
  centeredSlides: false,
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 10,

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

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/danveryurk/cl2vsxthg000114owcquvgewl",
  center: [30.202, 55.185],
  zoom: 12,
});

map.on("load", () => {
  // Add an image to use as a custom marker
  map.loadImage("https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png", (error, image) => {
    if (error) throw error;
    map.addImage("custom-marker", image);
    // Add a GeoJSON source with 2 points
    map.addSource("points", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            // feature for Mapbox SF
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
            // feature for Mapbox SF
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

    // Add a symbol layer
    map.addLayer({
      id: "points",
      type: "symbol",
      source: "points",
      layout: {
        "icon-image": "custom-marker",
        // get the title name from the source's "title" property
        "text-field": ["get", "title"],
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 1.0],
        "text-anchor": "top",
      },
    });
  });
});

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

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
header.classList.add("sticky");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

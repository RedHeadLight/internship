// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { CustomSelect } from "./vendor/custom-select";

window.addEventListener("DOMContentLoaded", ()=>{
  window.addEventListener("load", ()=>{
  const select= new CustomSelect();
  select.init();
  })
})

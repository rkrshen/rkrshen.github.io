<template lang="pug">
div
  div(class="page-header clear-filter" filter-color="black")
    parallax(class="page-header-image" style="background-image:url('img/header.jpg')")
    .container
      .content-center.brand
        img.n-logo(src="img/now-logo.png" alt="")
        h1.h1-seo Bruce Movie
        h3 Special Effects CO., LTD.
  .main
    .section.section-images
      .container
        .row
          .col-md-12
            //- .hero-images-container
            //-   img(src="img/hero-image-1.png" alt="")
            //- .hero-images-container-1
            //-   img(src="img/hero-image-2.png" alt="")
            //- .hero-images-container-2
            //-   img(src="img/hero-image-3.png" alt="")
  basic-elements
  navigation
  tabs-section
  progress-pagination
  notifications
  typography
  javascript-components
  carousel-section
  nucleo-icons-section
  .section
    .container.text-center
      .row.justify-content-md-center
        .col-md-12.col-lg-8
          h2.title Completed with examples
          h5.description
            |The kit comes with three pre-built pages to help you get started
            |faster. You can change the text and images and you're good to go.
            |More importantly, looking at them will give you a picture of what
            |you can built with this powerful Bootstrap 4 ui kit.
  signup-form
  examples-section
  download-section
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ProgressPagination from './components/ProgressPagination';
import Notifications from './components/Notifications';
import Typography from './components/Typography';
import JavascriptComponents from './components/JavascriptComponents';
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    BasicElements,
    Navigation,
    TabsSection,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    DownloadSection
  }
};
</script>
<style></style>

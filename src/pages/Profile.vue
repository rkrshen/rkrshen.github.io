<template lang="pug">
div
  .page-header.clear-filter(filter-color="black")
    parallax.page-header-image(style="background-image:url('img/bg5.jpg')")
    .container
      .photo-container
        img(src="img/ryan.jpg" alt="")
      h3.title(class="title") Bruce Chen
      p.category Blasting engineer
      .content
        .social-description
          h2 26
          p Comments
        .social-description
          h2 26
          p Comments
        .social-description
          h2 48
          p Bookmarks
  .section
    .container
      .button-container
        a.btn.btn-primary.btn-round.btn-lg(href="#button") Follow
        a.btn.btn-default.btn-round.btn-lg.btn-icon(
          href="#button"
          rel="tooltip"
          title="Follow me on Twitter"
        )
          i.fab.fa-twitter
        a.btn.btn-default.btn-round.btn-lg.btn-icon(
          href="#button"
          rel="tooltip"
          title="Follow me on Instagram"
        )
          i.fab.fa-instagram
      h3.title About me
      h5.description
        |An artist of considerable range, Ryan — the name taken by
        |Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
        |records all of his own music, giving it a warm, intimate feel with a
        |solid groove structure. An artist of considerable range.
      .row
        .col-md-6.ml-auto.mr-auto
          h4.title.text-center My Portfolio
        tabs.nav-align-center(
          pills
          tab-content-classes="gallery"
          tab-nav-classes="nav-pills-just-icons"
          type="primary"
        )
          tab-pane(title="Profile")
            i.now-ui-icons.design_image(slot="label")
            .col-md-10.ml-auto.mr-auto
              .row.collections
                .col-md-6
                  img.img-raised(src="img/bg6.jpg" alt="")
                  img.img-raised(src="img/bg11.jpg" alt="")
                .col-md-6
                  img.img-raised(src="img/bg7.jpg" alt="")
                  img.img-raised(src="img/bg8.jpg" alt="")
          tab-pane(title="Home")
            i.now-ui-icons.location_world(slot="label")
            .col-md-10.ml-auto.mr-auto
              .row.collections
                .col-md-6
                  img.img-raised(src="img/bg1.jpg")
                  img.img-raised(src="img/bg3.jpg")
                .col-md-6
                  img.img-raised(src="img/bg8.jpg" alt="" )
                  img.img-raised(src="img/bg7.jpg" alt="" )
          tab-pane(title="Messages")
            i.now-ui-icons.sport_user-run(slot="label")
            .col-md-10.ml-auto.mr-auto
              .row.collections
                .col-md-6
                  img.img-raised(src="img/bg3.jpg")
                  img.img-raised(src="img/bg8.jpg")
                .col-md-6
                  img.img-raised(src="img/bg7.jpg" alt="" )
                  img.img-raised(src="img/bg6.jpg" alt="" )
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style></style>

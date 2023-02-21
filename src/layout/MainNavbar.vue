<template lang="pug">
navbar(
  position="fixed"
  type="primary"
  :transparent="transparent"
  :color-on-scroll="colorOnScroll"
  menu-classes="ml-auto"
)
  template
    router-link.navbar-brand(to="/") Bruce Movie
  template(slot="navbar-menu")
    li.nav-item(v-for="(item, index) in navs" :key="index")
      a.nav-link(:href="item.href")
        p {{ item.navTitle }}

    li.nav-item(v-for="(item, index) in socialNavs" :key="index")
      a.nav-link(
        rel="tooltip"
        :title="item.alt"
        data-placement="bottom"
        :href="item.href"
        target="_blank"
      )
        i.fab(:class="item.iconClass")
        p.d-lg-none.d-xl-none {{ item.title }}
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  },
  data () {
    return {
      navs: [
        {
          href: '#about',
          navTitle: '最新消息'
        },
        {
          href: '#about',
          navTitle: '澤影簡介'
        },
        {
          href: '#award',
          navTitle: '特效範例'
        },
        {
          href: '#work',
          navTitle: '參與作品'
        },
        {
          href: '#contact',
          navTitle: '聯絡我們'
        }
      ],
      socialNavs: [
        {
          alt: "Follow us on Twitter",
          href: "https://twitter.com",
          iconClass: 'fa-twitter',
          title: 'Twitter'
        },
        {
          alt: "Like us on Facebook",
          href: "https://www.facebook.com",
          iconClass: 'fa-facebook-square',
          title: 'Facebook'
        },
        {
          alt: "Follow us on Instagram",
          href: "https://www.instagram.com",
          iconClass: 'fa-instagram',
          title: 'Instagram'
        }
      ]
    }
  }
};
</script>

<style scoped></style>

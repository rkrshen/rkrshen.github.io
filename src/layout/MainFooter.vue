<template lang="pug">
footer.footer(
  :class="{ [`footer-${type}`]: type }",
  :data-background-color="backgroundColor",
)
  .container
    .nav
      .ul
        .li
          span.mr-3 聯絡電話
          a(href="tel:+886-912******") +886 911844183
        .li
          span.mr-3 聯絡信箱
          a(href="mailto:brucemovie@gmail.com") brucemovie@gmail.com
    .copyright Bruce Movie Special Effects CO., LTD. &copy; {{ year }}
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>

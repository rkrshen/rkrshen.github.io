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
          a(href="tel:+886-912******") 0912******
        .li
          span.mr-3 聯絡地址
          a(href="https://www.google.com.tw/maps/@25.0005085,121.4211276,15.23z") 新北市******************
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

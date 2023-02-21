<template lang="pug">
.section#carousel
  .container
    .row.justify-content-center
      .col-8
        el-carousel(height="400px" type="card" indicator-position="none")
          el-carousel-item(v-for="(item, index) in list" :key="index")
            img.d-block(:src="item.src" :alt="item.alt")
            .carousel-caption.d-none.d-md-block
              h5 {{ item.info }}
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data () {
    return {
      list: [
        {
          src: 'img/dev/award2.png',
          alt: '榮獲 第58屆 金馬獎-年度傑出電影工作者獎《現場特效指導》',
          info: '榮獲 第58屆 金馬獎-年度傑出電影工作者獎《現場特效指導》'
        },
        {
          src: 'img/dev/火神的眼淚.jpeg',
          alt: 'Second slide',
          info: '入圍 第57屆 電視金鐘獎-戲劇類節目視覺特效獎《茶金》、《火神的眼淚》'
        },
        {
          src: 'img/dev/award1.png',
          alt: 'Third slide',
          info: '榮獲 第二屆 傑出影視聽工作者-年度電影傑出工作者獎 《現場特效指導》'
        },
        {
          src: 'img/dev/少年吔.jpeg',
          alt: 'First slide',
          info: '入圍 第24屆 台北電影節-傑出技術獎 《少年吔-爆破設計》'
        },
        {
          src: 'img/dev/灼人秘密.jpeg',
          alt: 'Second slide',
          info: '入圍 第22屆 台北電影節-最佳視覺效果獎 《灼人秘密》'
        }
      ]
    }
  }
};
</script>
<style></style>

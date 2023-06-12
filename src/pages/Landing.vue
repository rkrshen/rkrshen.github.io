<template lang="pug">
div
  div.page-header.page-header-small
    parallax.page-header-image(style="background-image: url('img/dev/cover6.jpg')")
    .content-center
      .container
        h1.title 澤影映像電影特效
        h5 Bruce Movie Special Effects CO., LTD.
  .section.section-about-us#about
    .container
      .row
        .col-md-8.ml-auto.mr-auto.text-center
          h2.title 將為台灣電影現場爆破特效<br>打造更安全更專業的環境
          h5.description
            |台灣現場特效團隊，特別致力專精於「爆破」、「火效」、「煙效」之現場特別效果。 
            |爆破拍攝以「安全」為保障，貨真價實的火炸藥爆破為「品質」。
            |澤影皆依照爆破特效安全守則，極力降低事故風險；
            |也輔導各劇組合法申請特效爆破，為全台灣目前唯一在文化部與經濟部等主管機關，
            |有成功認證案例的特效公司。
      .separator.separator-primary
      .section-story-overview
        .row
          .col-md-6
            .image-container.image-left(style="background-image: url('img/dev/funder.png')")
              <!-- First image on the left side -->
              p.blockquote.blockquote-primary
                |「做為一個爆破指導，對於每種火藥的特性都要瞭若指掌，並時時刻刻警惕自己，每次按下的按鈕，都不見得機會重來。」
                br
                |「在片場上，什麼尊嚴和面子都顧不上，因為如果發生意外，效果再好都沒有意義！」
                br
                |「技術就是兩個字 ：奉獻，就是把你的全部奉獻給你熱愛的一切！勿安於現狀，莫忘初衷。」
                br
                br
                small -創辦人 陳銘澤
            <!-- Second image on the left side of the article -->
            .image-container(style="background-image: url('img/dev/bts1.png')")
          .col-md-5
            <!-- First image on the right side, above the article -->
            .image-container.image-right(style="background-image: url('img/dev/award1.png')")
            h3 創辦人-陳銘澤1983-2022
            p
              |入行16年，從劇組基層做起，擔任過各種職務，跟隨香港特效師『池瑞添』踏入爆破領域，自此投入拍片現場爆破特效之執行工作．並與香港特效爆破指導『霍錦棠』相識成為技術分享的朋友。專注爆破特效擅長將寫實動作與特效設計結合影像呈現，參與作品涵蓋電視及電影領域等數十部影視作品之火燒或爆炸場面。
            br
            br
            h3 澤影團隊
            p
              |台灣現場特效團隊，特別致力專精於「爆破」、「火效」、「煙效」之現場特別效果。爆破拍攝以「安全」為保障，貨真價實的火炸藥爆破為「品質」。澤影皆依照爆破特效安全守則，極力降低事故風險；也輔導各劇組合法申請特效爆破，為全台灣目前唯一在文化部與經濟部等主管機關，有成功認證案例的特效公司。 
            br
            br
            h3 合法火藥進口
            p
              |澤影公司獨家合法進口國外的特效火藥，與國際接軌，除了產品效果好之外，良好的火藥品質能確保穩定的爆破效果，比起非法製作的火藥產品，更能穩定掌握及控制特效效果，亦保障工作人員你我的安全。 
  .section#award
    .container
      .row
        .col-md-6.ml-auto.mr-auto
          h4.title.text-center 特效範例
        tabs.nav-align-center.col-md-10.mx-auto(
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
                  .video-container
                    p 《火神的眼淚》
                    video.img-raised(width="100%" controls)
                      source(src="video/火神的眼淚.MOV" type="video/mp4")
                    p 火焰效果/火球效果/火焰延燒效果
                  .video-container
                    p 《電玩廣告 - 使命召喚》
                    video.img-raised(width="100%" controls)
                      source(src="video/使命召喚.MOV" type="video/mp4")
                    p 彈孔效果/火箭煙火效果/火焰爆破效果
                .col-md-6
                  .video-container
                    p 《逆局》
                    video.img-raised(width="100%" controls)
                      source(src="video/逆局.MOV" type="video/mp4")
                    p 反應彈-血包效果/玻璃爆裂效果
                  .video-container
                    p 《絕地求生：刺激戰場》
                    video.img-raised(width="100%" controls)
                      source(src="video/絕地求生.MOV" type="video/mp4")
                    p 爆破-粉塵效果/火焰效果
          tab-pane(title="Home")
            i.now-ui-icons.location_world(slot="label")
            .col-md-10.ml-auto.mr-auto
              .row.collections
                .col-md-6
                  .video-container
                    p 《火神的眼淚》
                    video.img-raised(width="100%" controls)
                      source(src="video/火神的眼淚.MOV" type="video/mp4")
                    p 火焰效果/火球效果/火焰延燒效果
                  .video-container
                    p 《電玩廣告 - 使命召喚》
                    video.img-raised(width="100%" controls)
                      source(src="video/使命召喚.MOV" type="video/mp4")
                    p 彈孔效果/火箭煙火效果/火焰爆破效果
                .col-md-6
                  .video-container
                    p 《逆局》
                    video.img-raised(width="100%" controls)
                      source(src="video/逆局.MOV" type="video/mp4")
                    p 反應彈-血包效果/玻璃爆裂效果
                  .video-container
                    p 《江湖無難事》
                    video.img-raised(width="100%" controls)
                      source(src="video/江湖無難事.MP4" type="video/mp4")
                    p 爆破-火球效果
          tab-pane(title="Messages")
            i.now-ui-icons.sport_user-run(slot="label")
            .col-md-10.ml-auto.mr-auto
              .row.collections
                .col-md-6
                  .video-container
                    p 《火神的眼淚》
                    video.img-raised(width="100%" controls)
                      source(src="video/火神的眼淚.MOV" type="video/mp4")
                    p 火焰效果/火球效果/火焰延燒效果
                  .video-container
                    p 《江湖無難事》
                    video.img-raised(width="100%" controls)
                      source(src="video/江湖無難事.MP4" type="video/mp4")
                    p 爆破-火球效果
                .col-md-6
                  .video-container
                    p 《逆局》
                    video.img-raised(width="100%" controls)
                      source(src="video/逆局.MOV" type="video/mp4")
                    p 反應彈-血包效果/玻璃爆裂效果
                  .video-container
                    p 《絕地求生：刺激戰場》
                    video.img-raised(width="100%" controls)
                      source(src="video/絕地求生.MOV" type="video/mp4")
                    p 爆破-粉塵效果/火焰效果
  .section.section-team.text-center#work
    .container
      h2.title 參與作品
      carousel-section

  .section.section-team.text-center#work
    .container
      h2.title 器材設備
      .row
        .col-sm-2.py-2(v-for="(img, key) in equips" :key="img.title")
          img(v-lazy="img.src" alt="Image" class="rounded img-raised")

  .section.section-contact-us.text-center#contact
    .container
      h2.title 聯絡我們
      p.description 一些吸引人來合作的文字敘述
      .row
        .col-lg-6.text-center.ml-auto.mr-auto.col-md-8
          fg-input.input-lg(
            class="input-lg"
            placeholder="Name..."
            v-model="form.firstName"
            addon-left-icon="now-ui-icons users_circle-08"
          )
          fg-input.input-lg(
            placeholder="Email..."
            v-model="form.email"
            addon-left-icon="now-ui-icons ui-1_email-85"
          )
          .textarea-container
            textarea.form-control(
              name="name"
              rows="4"
              cols="80"
              v-model="form.message"
              placeholder="Type a message..."
            )
          .send-button
            n-button(type="primary" round block size="md") Send Message
</template>
<script>
import { Button, FormGroupInput, Tabs, TabPane } from '@/components';
import CarouselSection from './components/CarouselSection';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Tabs,
    TabPane,
    CarouselSection
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  },
  computed: {
    equips () {
      const arr = []
      for(let i = 0; i < 23; i += 1) {
        arr.push({
          title: `${i+1}`,
          src: require(`@/assets/equipment/LINE_ALBUM_230523_${i}.jpg`)
        })
      }
      return arr
    }
  }
};
</script>
<style></style>

<template>
  <section class="floor">
    <div class="main-container">
      <aside class="main-container__side-menu">
        <picture>
          <source
            type="image/webp"
            :srcset="imageWebp"
            width="170"
            height="253"
          />
          <img :src="image" alt="logo" rel="preload" />
        </picture>
        <div class="main-container__download-text">Get The App</div>
        <Button
          title="Download"
          iconName="cloud-download-outline"
          id="downloadButton"
        />
        <p>*small print text</p>
      </aside>
      <section class="main-container__content">
        <h2 class="main-container__content-title">hp . Coming Soon</h2>
        <p>
          Our new location based app is launching soon, please use the form
          below to register you profile for the Hot Places app
        </p>
        <p>
          Lorum losum nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat volutoat
        </p>
        <div class="main-container__content-slot"><slot /></div>
      </section>
    </div>
  </section>
</template>

<script setup>
import image from '@/assets/logo.png';
import imageWebp from '@/assets/logo.webp';
import Button from '@/components/ButtonMain.vue';
</script>

<style scoped>
.floor {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.main-container {
  display: flex;
}
.main-container__content {
  background-color: #1e4d5ae3;
  width: 600px;
  height: fit-content;
  padding-block: 20px;
}
.main-container__content p {
  color: white;
  margin-bottom: 20px;
  padding-inline: 20px;
}
.main-container__download-text {
  border-bottom: 1px dotted white;
  border-top: 1px dotted white;
  text-align: center;
  color: white;
  padding-block: 10px;
  margin-bottom: 20px;
  margin-top: 40px;
}
.main-container__side-menu {
  margin-right: 20px;
  height: fit-content;
  text-align: center;
}
.main-container__side-menu p {
  font-size: 10;
  text-align: left;
  color: white;
  margin-top: 5px;
}
.main-container__content-title {
  font-size: 35px;
  font-style: italic;
  font-family: 'Brush Script MT';
  color: white;
  margin-bottom: 5px;
  padding-inline: 20px;
}
.main-container__content-slot {
  border-top: 1px solid black;
  padding: 20px;
}

@media only screen and (max-width: 850px) {
  .main-container__content {
    width: 500px;
  }
}

@media only screen and (max-width: 750px) {
  .floor {
    overflow: scroll;
  }
  .main-container {
    display: block;
    overflow: scroll;
  }
  .main-container__side-menu {
    margin-right: 0px;
    padding-bottom: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .main-container__content {
    width: 100%;
  }
}
</style>

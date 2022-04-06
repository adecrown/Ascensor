<script setup>
import { ref } from 'vue';
import MainContainer from '@/components/MainContainer.vue';
import Button from '@/components/ButtonMain.vue';
import MainForm from '../components/MainForm.vue';

const displayForm = ref(false);
</script>

<template>
  <main class="container">
    <MainContainer>
      <MainForm v-if="displayForm" />
      <Button
        v-else
        title="Register for our new app"
        iconName="cloud-download-outline"
        @click="displayForm = true"
        id="registerButton"
      />
    </MainContainer>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  background-image: url('@/assets/background.webp');
  align-items: center;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (max-width: 750px) {
  .container {
    height: auto;
  }
}
</style>

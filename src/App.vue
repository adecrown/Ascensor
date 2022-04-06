<script setup></script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  margin: 0 auto;
  padding: 0;
  height: 100%;
  font-weight: normal;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>

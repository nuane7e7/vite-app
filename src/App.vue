<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <Suspense>
      <template #default>
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </template>
      <template #fallback>
        Loadding.....
      </template>
    </Suspense>
  </div>
</div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

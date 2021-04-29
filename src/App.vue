<template>
  <BlogHeader />
</template>

<script>
import BlogHeader from "./components/BlogHeader";
export default {
  name: "App",
  components: {
    BlogHeader,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body{
  font-family: 'Lato', sans-serif;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

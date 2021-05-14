<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
// Global rule
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "Lato", sans-serif;
}
.text-center {
  text-align: center;
}
.container {
  padding: 0 30px;
  max-width: 1124px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
// End of global rules
</style>

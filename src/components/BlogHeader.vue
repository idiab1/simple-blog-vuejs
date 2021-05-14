<template>
  <header class="header">
    <div class="header-info">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "BlogHeader",
};
</script>

<style lang="scss">
.header {
  position: relative;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/bg.jpeg") no-repeat center center;
  background-size: cover;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(60deg, rgb(0 142 133), rgb(0 142 133 / 36%));
  }
  .header-info {
    z-index: 5;
    h1 {
      color: #fff;
    }
  }
}
</style>

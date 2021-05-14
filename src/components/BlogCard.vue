<template>
  <div class="blog-card">
    <div class="card-image">
      <div class="ratio-content">
        <img :src="data.image" alt="{{data.title}}" />
      </div>
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ data.title }}</h2>
      <p class="summary">
        {{ data.summary }}
      </p>
      <router-link :to="`/blog/${data.id}`">Show More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<style lang="scss">
.blog-card {
  width: 31%;
  box-sizing: border-box;
  margin: 15px 10px 15px;
  box-shadow: -1px -1px 10px 1px rgb(197 197 197 / 47%);
  @media (max-width: 900px) {
    width: 47%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  // Card Image
  .card-image {
    position: relative;
    &::before {
      content: "";
      display: block;
      padding-top: 66.67%;
    }
    .ratio-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .card-content {
    padding: 20px 15px;
    background-color: #fcfcfc;
    // Card Title
    .card-title {
      font-size: 23px;
      font-weight: 700;
      text-transform: capitalize;
    }
    // Summary of Descrition
    .summary {
      font-size: 18px;
      padding: 10px 0;
      color: #5a5858;
      line-height: 1.5;
    }
    // Card Button
    .card-btn {
      font-size: 17px;
      text-transform: capitalize;
      text-decoration: underline;
      color: #000;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

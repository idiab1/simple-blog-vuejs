<template>
  <div class="blog-card">
    <div class="card-image">
      <img src="../assets/images/blog-post.jpg" alt="Card Title" />
    </div>
    <div class="card-content">
      <h2 class="card-title">Card Title</h2>
      <p class="summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia
        porro maxime facere magnam accusantium autem dolorem quibusdam, minus
        ducimus dolor optio numquam, fugit illum!
      </p>
      <a class="card-btn" href="#">Show More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
};
</script>

<style lang="scss">
.blog-card {
  width: 31%;
  box-sizing: border-box;
  margin: 15px 10px 15px;
  border: 1px solid #444;
  @media (max-width: 900px) {
    width: 47%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  // Card Image
  .card-image {
    img {
      width: 100%;
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

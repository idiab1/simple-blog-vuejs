<template>
  <div v-if="blog">
    <!-- Header -->
    <blog-header>
      <router-link class="btn btn-back" to="/" type="button">
        Back
      </router-link>
      <h1>{{ blog.title }}</h1>
    </blog-header>
    <!-- End of Header -->

    <!-- Blog Details -->
    <div class="blog-details">
      <div class="container">
        <div class="blog-content">
          <!-- Blog Image -->
          <div class="blog-image">
            <div class="ratio-content">
              <img :src="blog.image" :alt="blog.title" />
            </div>
          </div>
          <!-- Blog Description -->
          <div class="blog-description">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Blog Details -->
  </div>
</template>

<script>
import BlogHeader from "../components/BlogHeader";
import axios from "axios";

export default {
  data() {
    return {
      blog: null,
    };
  },
  components: {
    BlogHeader,
  },
  mounted() {
    axios
      .get("http://localhost:3000/blog/" + this.$route.params.id)
      .then((res) => {
        this.blog = res.data;
      });
  },
};
</script>

<style lang="scss" scoped>
// Button Back
.btn-back {
  position: absolute;
  left: 20px;
  top: 20px;
  text-decoration: none;
  background: #00d1c2;
  padding: 6px 15px;
  color: #012361;
}
// End of button style
.blog-details {
  padding: 40px 0;
  .blog-content {
    width: 950px;
    margin: auto;
    box-sizing: border-box;
    box-shadow: -1px -1px 10px 1px rgb(197 197 197 / 47%);

    .blog-image {
      position: relative;
      &::before {
        content: "";
        display: block;
        padding-top: 75%;
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
    // Description
    .blog-description {
      padding: 30px;
      background-color: #fcfcfc;
      h2 {
        font-size: 35px;
        text-transform: capitalize;
        padding-bottom: 5px;
      }
      p {
        color: #5a5858;
        line-height: 1.6;
        font-size: 17px;
      }
    }
  }
  // .blog-image {
  //   position: relative;
  //   &::before {
  //     content: "";
  //     display: block;
  //     padding-top: 66.67%;
  //   }
  //   .ratio-content {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     overflow: hidden;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  // }
}
</style>

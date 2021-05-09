<template>
  <div id="app">
    <BlogHeader />
    <div class="blogs-content">
      <div class="container" v-if="blogs">
        <blog-card
          v-for="blog in blogs"
          :key="blog.id"
          :data="blog"
        ></blog-card>
      </div>
    </div>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader";
import BlogCard from "./components/BlogCard";

// Import Axios package for endpoints
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      blogs: null,
    };
  },
  components: {
    BlogHeader,
    BlogCard,
  },
  mounted() {
    axios.get("http://localhost:3000/blog").then((res) => {
      this.blogs = res.data;
    });
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "Lato", sans-serif;
}
.blogs-content {
  padding: 40px 0;
  .container {
    padding: 0 30px;
    max-width: 1124px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
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

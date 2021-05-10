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
      <div class="section-load-more text-center">
        <button
          class="btn-view-more"
          @click="loadMore"
          v-if="blogs && blogs.length < totalCount"
        >
          View More
        </button>
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
      page: 1,
      totalCount: null,
    };
  },
  components: {
    BlogHeader,
    BlogCard,
  },
  mounted() {
    this.getBlogs(this.page);
  },
  methods: {
    getBlogs(page) {
      axios
        .get(`http://localhost:3000/blog?_page=${page}&_limit=6`)
        .then((res) => {
          this.blogs = this.blogs ? this.blogs.concat(res.data) : res.data;
          this.totalCount = res.headers["x-total-count"];
        });
    },

    loadMore() {
      this.page++;
      this.getBlogs(this.page);
    },
  },
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

// End of global rules

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

.section-load-more {
  padding: 15px 0;
  .btn-view-more {
    padding: 10px 15px;
    border-radius: 0;
    background-color: #11928a;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
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

<template>
  <!-- <Home />  -->
  <Blog /> 
  <!-- <BlogDetails /> -->
  <Project/>
  <!-- <ProjectDetails /> -->

</template>

<script>

// import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
// import BlogDetails from './components/BlogDetails.vue';
import Project from './components/Project.vue'
// import ProjectDetails from './components/ProjectDetails.vue'

export default {
  name: 'App',
  components: {
    Blog,
    // BlogDetails,
    Project,
    // ProjectDetails,

}
}
</script>

<style lang="scss">
.top__info-item {
  background-image: url('../src/assets/img/top-background.png');
}


.blog__top-item {
  background-image: url('../src/assets/img/blog-top.jpg');
}

.project__top-item {
  background-image: url('../src/assets/img/project-top.png');
}


</style>

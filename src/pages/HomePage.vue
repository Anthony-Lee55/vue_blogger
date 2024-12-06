<script setup>
import { AppState } from '@/AppState';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
})


async function getBlogs() {
  try {
    await blogsService.getBlogs()
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}
</script>

<template>
  <div class="container">
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>

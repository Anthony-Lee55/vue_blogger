<script setup>
import { AppState } from '@/AppState';
import { blogsService } from '@/services/BlogsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const blog = computed(() => AppState.activeBlog)

onMounted(() => {
  getBlogById()
})


async function getBlogById() {
  try {
    await blogsService.getBlogById(route.params.blogId)
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}

</script>


<template>
  <div class="container-fluid">
    <section v-if="blog">
      <div class="card shadow rounded-2 m-3 border border-dark">
        <div class="px-5 py-3">
          <img :src="blog.imgUrl" alt="" class="blog-cover img-fluid">
        </div>
        <div class="d-flex">
          <RouterLink :to="{ name: 'Profile', params: { profileId: blog.creatorId } }" class="ms-5">
            <img :src="blog.creator.picture" alt="" class="creator-img img-fluid">
          </RouterLink>
          <h3 class="fw-bold">
            {{ blog.title }}
          </h3>
          <span class="d-flex">
            by {{ blog.creator.name }}
          </span>
        </div>
        <div class="w-60 p-5">
          <span>
            {{ blog.body }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.blog-cover {
  height: 60vh;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.creator-img {
  height: 250px;
  width: 250px;
  border-radius: 50%;
}
</style>
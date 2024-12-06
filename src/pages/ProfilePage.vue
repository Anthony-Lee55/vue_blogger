<script setup>
import { AppState } from '@/AppState';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService';
import { profileService } from '@/services/ProfileService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const profile = computed(() => AppState.activeProfile)

const blogs = computed(() => AppState.profileBlogs)

onMounted(() => {
  getProfileById()
  getBlogsByProfileId()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profileService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error);
    logger.log('got profile by id', error)
  }
}

async function getBlogsByProfileId() {
  try {
    const profileId = route.params.profileId
    await blogsService.getBlogsByProfileId(profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div class="container">
    <section v-if="profile" class="row">
      <div class="col-md-10 d-flex align-items-center">
        <img :src="profile.picture" :alt="profile.name" class="creator-img m-5">
        <h1 class="fw-bold">{{ profile.name }}</h1>
        <button class="btn btn-dark fs-1 ms-5"><i class="mdi mdi-video-plus mdi-spin"></i></button>
      </div>
    </section>
    <div class="d-flex justify-content-between align-items-center">
      <button class="btn btn-dark fs-1 ms-5 text-success"><i class="mdi mdi-plus-circle-outline"></i></button>
    </div>
    <section class="row d-flex justify-content-between">
      <div v-for="blog in blogs" :key="blog.id" class="col-md-12 blog-card">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  object-fit: cover;
}

.blog-card {
  height: 25vh;
}
</style>
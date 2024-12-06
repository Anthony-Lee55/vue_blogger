<script setup>
import { Blog } from '@/models/Blog';


const props = defineProps({ blog: Blog })
</script>


<template>
  <RouterLink :to="{ name: 'Blog Details', params: { blogId: blog.id } }">
    <div class="card blog-card shadow rounded-2 m-4 border border-dark">
      <div class="d-flex justify-content-between">
        <div>
          <RouterLink :to="{ name: 'Profile', params: { profileId: blog.creatorId } }">
            <span class="fw-bold text-dark">
              <img :src="blog.creator.picture" :alt="blog.creator.name" class="img-profile m-3">
              {{ blog.creator.name }}
            </span>
          </RouterLink>
          <div class="w-60 ms-3">
            <div class="fw-bold pb-2">
              <span>
                {{ blog.title }}
              </span>
            </div>
            <p>
              {{ blog.body }}
            </p>
          </div>
        </div>
        <div class="p-3 w-40 img-fluid">
          <img :src="blog.imgUrl" alt="" class="blog-cover">
        </div>
      </div>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>
.blog-cover {
  min-height: 16vh;
  max-height: 36vh;
  width: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.img-profile {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.blog-card {
  min-height: 8em;
  max-height: 16em;

  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
  }
}
</style>
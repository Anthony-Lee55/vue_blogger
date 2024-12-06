import { AppState } from "@/AppState.js";
import { api } from "./AxiosService.js";
import { Blog } from "@/models/Blog.js";
import { logger } from "@/utils/Logger.js";


class BlogsService{
async getBlogs(){
  const response = await api.get('api/blogs')
  logger.log('got blogs', response.data);
  AppState.blogs = response.data.map(blogData => new Blog (blogData))
}

async getBlogById(blogId){
  const response = await api.get( `api/blogs/${blogId}`)
  logger.log('got blog by id', response.data)
  AppState.activeBlog = new Blog(response.data)
}

async getBlogsByProfileId(profileId){
  AppState.profileBlogs = []
  const response = await api.get(`api/blogs?creatorId=${profileId}`)
  logger.log('got blog by profile id', response.data);
  AppState.profileBlogs = response.data.map(blogData => new Blog (blogData))
}
}

export const blogsService = new BlogsService()


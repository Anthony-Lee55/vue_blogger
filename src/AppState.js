import { reactive } from 'vue'
import { Blog } from './models/Blog.js'
import { Profile } from './models/Profile.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {Blog[]} */
  blogs : [],
  /**@type {Blog} */
  activeBlog: null,
  /** @type {import('./models/Profile.js').Profile} user info from the database*/
  activeProfile: null,
    /** @type {Blog[]} */
  profileBlogs: []
})


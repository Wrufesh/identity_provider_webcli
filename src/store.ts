import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
})
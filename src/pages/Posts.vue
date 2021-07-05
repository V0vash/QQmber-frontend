<template>
  <div>

    <div v-for="post in posts" :key="post._id">{{ post.title }}</div>

      <p>{{loading}}</p>

      <button v-if="showMoreEnabled"
              @click="loadMorePosts"
              class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
        Show More Posts
      </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_INFINITE_SCROLL_POSTS } from '@/graphql' 

const pageSize = 2;

export default {
  name: "Posts",

  setup(){

    let currentPage = ref(1);

    const { result, loading, error, fetchMore } = useQuery(
        GET_INFINITE_SCROLL_POSTS,
        {
          pageNum: 1,
          pageSize,
        },
          {
            fetchPolicy: 'network-only',
          }
      )

    
    function loadMorePosts () {
      currentPage.value++
      console.log('+++')
      fetchMore({
        variables: {
          pageNum: currentPage.value,
        },
      })

    }

    let showMoreEnabled = useResult(result, [], (data) => data.infiniteScrollPosts.hasMore)
    let posts = useResult(result, [], (data) => data.infiniteScrollPosts.posts)



    return{
      loading,
      error,
      posts,
      showMoreEnabled,
      loadMorePosts
    }
  }
};
</script>
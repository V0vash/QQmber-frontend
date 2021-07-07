<template>
  <div>
    <h1>Post {{ post }}</h1>
  </div>
</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_POST } from '@/graphql'
export default {
  name: "Post",
  props: ['postId'],
  setup(props){
    const { result, loading, error, fetchMore } = useQuery(
        GET_POST,
        {
          postId: props.postId
        },
        {
          fetchPolicy: 'network-only',
        }
    )

    let post = useResult(result, [], (data) => data.getPost)

    return{
      loading,
      error,
      post
    }

  }
};
</script>
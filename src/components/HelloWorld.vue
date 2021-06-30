<template>
    <div>
        <p>loading - {{ loading }}; err - {{ error }}</p>

        <ul>
            <li v-for="post of posts" :key="post.id">
                {{ post.title }} - {{ post.description }}
            </li>
        </ul>
    </div>
</template>

<script>
import { defineProps, reactive } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_POSTS } from '../graphql'

export default {
    setup() {
        const { result, loading, error } = useQuery(GET_POSTS)

        const posts = useResult(result, [], (data) => data.getPosts)

        return {
            posts,
            loading,
            error,
        }
    },
}
</script>

<style scoped>
a {
    color: #42b983;
}
</style>

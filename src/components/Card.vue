<template>
  <div class="mb-4 max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img class="object-scale-down w-full h-64" :src="imageUrl" @click="goToPost(_id)" alt="Article">

    <div class="p-6">
      <div>
        <span v-for="category in categories" class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{{ category }}</span>
        <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">{{ title }}</a>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ description }}</p>
      </div>

      <div class="mt-4 flex justify-between">
        <div class="flex items-center">
          <div class="flex items-center">
            <img class="object-cover h-10 rounded-full" :src="createdBy.avatar" alt="Avatar">
            <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">{{ createdBy.username }}</a>
          </div>
          <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{{ formatedCreatedDate }}</span>
        </div>

        <div class="flex items-center">
          <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{{ likes }} - likes</span>
          <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{{ messages.length }} - comments</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: "Card.vue",
  props: {
    _id:{},
    title: {
      required: true,
      type: String,
    },
    description:{
      required: true,
      type: String,
    },
    imageUrl:{
      required: true,
      type: String,
    },
    categories: {
      required: true,
      type: Array,
    },
    createdBy:{
      required: true,
      type: Object,
    },
    createdDate:{
      required: true,
      type: String,
    },
    likes:{
      required: true,
      type: Number,
    },
    messages:{
      required: true,
      type: Array,
    }

  },
  setup(props){
    const router = useRouter()

    const formatedCreatedDate = computed(() => (new Date(+props.createdDate)).toLocaleString())

    const goToPost = (postId) => router.push(`/posts/${postId}`)

    return{
      formatedCreatedDate,
      goToPost
    }
  }
}
</script>

<style scoped>

</style>
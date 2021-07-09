<template>
    <component :is="layout">
      <router-view />
    </component>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";

const defaultLayout = "default";

import { useAuth } from "./hooks/useAuth";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );

    const { getCurrentUser } = useAuth()
    //
    getCurrentUser()


    return {
      layout,
    };
  },
});
</script>


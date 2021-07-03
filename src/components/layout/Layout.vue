  <template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Aside />

    <div class="flex-1 flex flex-col overflow-hidden">
      <TopBar />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Aside from "./Aside.vue";
import TopBar from "./TopBar.vue";


export default{
  components: {
    Aside,
    TopBar,
  },
};
</script>
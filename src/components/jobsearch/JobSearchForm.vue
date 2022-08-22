<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-talga-gray-3 rounded-3xl"
    @submit.prevent="searchForJob"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <BaseInput
          placeholder="Software engineer"
          label="Role"
          v-model="role"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-talga-gray-3 bg-talga-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <BaseInput placeholder="Kutaisi" label="Where?" v-model="location" />
      </div>
    </div>

    <ActionButton text="Search" type="secondary" class="rounded-3xl" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ActionButton from "@/components/ui/ActionButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
const router = useRouter();

const role = ref("");
const location = ref("");

const searchForJob = () => {
  router.push({
    name: "job-results-page",
    query: {
      role: role.value,
      location: location.value,
    },
  });
};
</script>

<style lang="scss" scoped></style>

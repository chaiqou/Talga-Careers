<template>
  <div class="py-5 border-b border-solid border-talga-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="openAccordion"
    >
      <h3 class="text-base font-semibold">Organizations</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">Child</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isOpen = ref(false);

const openAccordion = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() => {
  return isOpen.value ? "angle-up" : "angle-down";
});
</script>

<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-talga-gray-3 rounded-3xl"
    action=""
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10" for="">Role</label>
        <input
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-talga-gray-3 bg-talga-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10" for="">Where?</label>
        <input
          type="text"
          placeholder="Kutaisi"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>

    <ActionButton text="Search" type="secondary" class="rounded-3xl" />
  </form>
</template>

<script setup>
import ActionButton from "./ui/ActionButton.vue";
</script>

<style lang="scss" scoped></style>

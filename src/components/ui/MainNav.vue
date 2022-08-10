<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-talga-gray-1"
      >
        <router-link
          class="flex items-center h-full text-xl font-bold"
          :to="{ name: 'main-page' }"
          >{{ company.company_name }}</router-link
        >
        <h2 class="flex items-center h-full ml-8">
          Developed by {{ company.developed_by }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script setup>
import { reactive } from "vue";

const company = reactive({
  company_name: "Talga Career",
  developed_by: "Nikoloz Lomtadze",
});
</script>

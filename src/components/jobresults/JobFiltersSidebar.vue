<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-talga-gray-1 w-[800px]"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">what you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear filters" type="secondary" />
        </div>
      </div>
      <JobFiltersSidebarJobTypes />
      <JobFiltersSidebarOrganizations />
    </section>
  </div>
</template>

<script setup>
import ActionButton from "../ui/ActionButton.vue";

import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
</script>

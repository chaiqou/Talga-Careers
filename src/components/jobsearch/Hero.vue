<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <Headline />
          <JobSearchForm />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain rounded-lg"
            src="@/assets/images/vue.png"
            alt="vue logo"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <Spotlight class="flex flex-row justify-center pb-16">
      <template v-slot:default="{ spotlight }">
        <router-link
          to="/job-results"
          class="flex flex-col mx-5 border rounded-lg w-72 h-96 bg-talga-gray-2"
        >
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">{{ spotlight.title }}</h3>
          </div>
        </router-link>
      </template>
    </Spotlight>
  </main>
</template>

<script setup>
import Headline from "@/components/jobsearch/Headline.vue";
import JobSearchForm from "@/components/jobsearch/JobSearchForm.vue";
import Spotlight from "./Spotlight.vue";
</script>

<style lang="scss" scoped></style>

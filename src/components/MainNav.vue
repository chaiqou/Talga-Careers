<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-talga-gray-1"
      >
        <router-link
          class="flex items-center h-full text-xl font-bold"
          :to="{ name: 'main-page' }"
          >{{ company }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex p-0 m-0 h-full list-none">
            <li
              v-for="item in menuItems"
              v-bind:key="item"
              class="h-full first:ml-0 ml-9"
            >
              <a href="" class="flex items-center py-2.5 h-full">{{ item }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton @click="toggleProfileImage" v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import ActionButton from "@/components/ui/ActionButton.vue";
import ProfileImage from "@/components/ui/ProfileImage.vue";

const company = ref("Talga Careers");
const isLoggedIn = ref(false);
const menuItems = ref([
  "Teams",
  "Locations",
  "Life at Talga",
  "How we hire",
  "Students",
  "Careers",
]);

const toggleProfileImage = () => {
  isLoggedIn.value = !isLoggedIn.value;
};
</script>

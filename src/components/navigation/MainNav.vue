<template>
  <header :class="headerHeightClass" class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-talga-gray-1"
      >
        <router-link
          class="flex items-center h-full text-xl font-bold"
          :to="{ name: 'home-page' }"
          >{{ company }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex p-0 m-0 h-full list-none">
            <li
              v-for="item in menuItems"
              v-bind:key="item.text"
              class="h-full first:ml-0 ml-9"
            >
              <router-link
                :to="item.url"
                class="flex items-center py-2.5 h-full"
                >{{ item.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="LoginStore.state.isLoggedIn" />
          <ActionButton type="primary" @click="toggleProfileImage" v-else />
        </div>
      </div>
      <SubNav v-if="LoginStore.state.isLoggedIn" />
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import ActionButton from "@/components/ui/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import SubNav from "@/components/navigation/SubNav.vue";
import { useStore } from "vuex";

const LoginStore = useStore();

const company = ref("Talga Careers");
const menuItems = ref([
  { text: "Teams", url: "/teams" },
  { text: "Locations", url: "/" },
  { text: "Life at Talga", url: "/" },
  { text: "How we hire", url: "/" },
  { text: "Students", url: "/" },
  { text: "Careers", url: "/job-results" },
]);

const headerHeightClass = computed(function () {
  return LoginStore.state.isLoggedIn ? "h-32" : "h-16";
});

const toggleProfileImage = () => {
  LoginStore.commit("LOGIN_USER");
};
</script>

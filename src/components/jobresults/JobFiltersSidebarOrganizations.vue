<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              v-model="selectedOrganizations"
              :value="organization"
              v-on:change="selectOrganization"
              type="checkbox"
              :id="organization"
              class="mr-3"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script setup>
import Accordion from "@/components/ui/Accordion.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

const selectedOrganizations = ref([]);

const selectOrganization = () => {
  store.commit("ADD_SELECTED_ORGANIZATIONS", selectedOrganizations.value);
};

const UNIQUE_ORGANIZATIONS = computed(() => {
  return store.getters.UNIQUE_ORGANIZATIONS;
});
</script>

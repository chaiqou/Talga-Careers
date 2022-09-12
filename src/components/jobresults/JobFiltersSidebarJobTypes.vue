<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              v-model="selectedJobTypes"
              :value="jobType"
              @change="selectJobType"
              type="checkbox"
              :id="jobType"
              class="mr-3"
            />
            <label :for="jobType">{{ jobType }}</label>
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

const selectedJobTypes = ref([]);

const selectJobType = () => {
  store.commit("ADD_SELECTED_JOB_TYPES", selectedJobTypes.value);
};

const UNIQUE_JOB_TYPES = computed(() => {
  return store.getters.UNIQUE_JOB_TYPES;
});
</script>

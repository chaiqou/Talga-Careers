<template>
  <label class="absolute left-0 -top-10">{{ label }}</label>
  <input
    :value="value"
    @input="onHandleInput"
    type="text"
    :placeholder="props.placeholder"
    class="w-full text-lg font-normal focus:outline-none"
  />
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const emits = defineEmits({
  onHandleInput: {
    type: String,
    default: "",
  },
});

const value = ref("");

const onHandleInput = (event) => {
  value.value = event.target.value;
  emits("onHandleInput", value.value);
};
</script>

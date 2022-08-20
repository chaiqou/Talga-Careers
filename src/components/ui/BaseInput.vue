<template>
  <label class="absolute left-0 -top-10">{{ label }}</label>
  <input
    :value="modelValue"
    @input="onHandleInput"
    type="text"
    :placeholder="props.placeholder"
    class="w-full text-lg font-normal focus:outline-none"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits({
  onHandleInput: {
    type: String,
    default: "",
  },
});

const onHandleInput = (event) => {
  emits("update:modelValue", event.target.value);
};
</script>

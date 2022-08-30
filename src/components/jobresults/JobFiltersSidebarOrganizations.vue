<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input type="checkbox" id="youtube" class="mr-3" />
            <label for="youtube">Youtube</label>
          </li>
          <li class="w-1/2 h-8">
            <input type="checkbox" id="Redberry" class="mr-3" />
            <label for="Redberry">Redberry</label>
          </li>
          <li class="w-1/2 h-8">
            <input type="checkbox" id="Microsoft" class="mr-3" />
            <label for="Microsoft">Microsoft</label>
          </li>
          <li class="w-1/2 h-8">
            <input type="checkbox" id="Google" class="mr-3" />
            <label for="Google">Google</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script setup>
import Accordion from "@/components/ui/Accordion.vue";
</script>

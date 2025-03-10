<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';

import Checkbox from '../checkbox/Checkbox.vue';
import FormControl from '../form-control/FormControl.vue';

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  label?: string;
  value?: unknown[];
  options?: string[] | Array<{ label: string; value: unknown }>;
  required?: boolean;
  invalid?: boolean | string;
  help?: string;
}

defineOptions({
  inheritAttrs: false,
});

const valueModel = defineModel<unknown[]>('value', { default: [] });

defineProps<Props>();

const emit = defineEmits<{
  (evt: 'change', val: unknown[]): void;
}>();

function onChange(val: unknown) {
  const idx = valueModel.value.findIndex((item) => item === val);

  if (idx !== -1) {
    const arr = [...valueModel.value];
    arr.splice(idx, 1);
    valueModel.value = arr;
    emit('change', arr);
  } else {
    valueModel.value = [...valueModel.value, val];
    emit('change', [...valueModel.value, val]);
  }
}
</script>

<template>
  <FormControl v-slot="{ id }" :label :required :invalid :help>
    <div class="flex flex-wrap items-center gap-x-4">
      <Checkbox
        v-for="(item, index) in options"
        v-bind="$attrs"
        :key="index"
        :name="id"
        :value="valueModel.includes(typeof item === 'object' ? item.value : item)"
        :invalid="Boolean(invalid)"
        @change="onChange(typeof item === 'object' ? item.value : item)"
      >
        {{ typeof item === 'object' ? item.label : item }}
      </Checkbox>
    </div>
  </FormControl>
</template>

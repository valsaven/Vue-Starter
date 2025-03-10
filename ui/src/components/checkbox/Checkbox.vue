<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';
import { computed, useId } from 'vue';

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  label?: string;
  value?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  invalid?: boolean | string;
  disabled?: boolean;
  readonly?: boolean;
}

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Props>();

const emit = defineEmits<{
  (evt: 'update:value', val: boolean): void;
}>();

const valueModel = computed({
  get: () => props.value || false,
  set: (val) => !props.readonly && emit('update:value', val),
});

const id = useId();
</script>

<template>
  <div class="Checkbox-Wrapper">
    <label :for="id" class="Checkbox-Label" :class="{ disabled, readonly }">
      <div class="Checkbox-Container">
        <input
          :id
          v-model="valueModel"
          v-bind="$attrs"
          type="checkbox"
          :disabled="disabled"
          :readonly="readonly"
          class="Checkbox-Input"
          :class="{ hasValue: value || checked || indeterminate, invalid }"
        />

        <div
          class="Checkbox-Icon"
          :class="[
            indeterminate
              ? 'i-material-symbols-check-indeterminate-small-rounded'
              : value || checked
                ? 'i-material-symbols-check-small-rounded'
                : '',
          ]"
        ></div>
      </div>

      <div class="Checkbox-Text">
        {{ label }}
        <slot></slot>
      </div>
    </label>

    <div v-if="typeof invalid === 'string' && invalid" class="text-red-500 text-xs mt-1">
      {{ invalid }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Checkbox-Wrapper {
  @apply inline-flex flex-col;
}

.Checkbox-Label {
  @apply flex items-center min-h-9.5 cursor-pointer;

  &.disabled {
    @apply cursor-not-allowed opacity-60;
  }

  &.readonly {
    @apply cursor-default;
  }
}

.Checkbox-Container {
  @apply relative flex justify-center items-center;
}

.Checkbox-Input {
  @apply appearance-none size-5 rounded border overflow-hidden;
  @apply bg-white dark:bg-slate-800 border-slate-500 dark:border-slate-400;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-400;

  &.hasValue {
    @apply bg-primary-500 dark:bg-primary-500;
  }

  &.invalid {
    @apply border-red-500 dark:border-red-500;
    @apply focus:ring-red-500/40 focus:border-red-500;
  }
}

.Checkbox-Icon {
  @apply absolute select-none w-6 h-6 text-white;
}

.Checkbox-Text {
  @apply ml-2 empty:hidden;
}
</style>

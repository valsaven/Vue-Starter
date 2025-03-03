<script lang="ts" setup>
import type { ComponentProps } from 'vue-component-type-helpers';
import { ref, reactive, onMounted } from 'vue';
import { XButton, XSelect, XTable, XTextField } from '@x/ui';

import leetcode from './leetcode';

type TableProps = ComponentProps<typeof XTable>;

const loading = ref(true);

const state = reactive({
  rows: [] as any[],
  control: { rows: 10, page: 1, field: 'id', direction: 'asc' } as TableProps['control'],
  count: 0,
});

const body = reactive({
  title: '',
  difficulty: '',
});

onMounted(() => {
  search();
});

function reset() {
  body.title = '';
  body.difficulty = '';
  search();
}

async function search() {
  loading.value = true;
  state.control = { rows: 10, page: 1, field: 'id', direction: 'asc' };
  const response = await leetcode({ ...body, ...state.control });
  loading.value = false;
  state.rows = response.result;
  state.count = response.count;
}

async function change(params: TableProps['control']) {
  loading.value = true;
  const response = await leetcode({ ...body, ...params });
  loading.value = false;
  state.rows = response.result;
}
</script>

<template>
  <div>
    <div class="text-3xl font-bold my-4">Basic</div>

    <div class="p-8 bg-white dark:bg-slate-800 rounded-lg space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <XTextField v-model:value="body.title" />

        <XSelect
          v-model:value="body.difficulty"
          :options="[
            { label: 'Easy', value: 'Easy' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Hard', value: 'Hard' },
          ]"
        />

        <div class="flex gap-4">
          <XButton color="secondary" class="flex-1" @click="reset">Reset</XButton>
          <XButton class="flex-1" @click="search">Search</XButton>
        </div>
      </div>

      <XTable
        v-model:control="state.control"
        :columns="[
          { key: 'title', name: 'Title' },
          { key: 'difficulty', name: 'Difficulty' },
        ]"
        :loading
        :rows="state.rows"
        :count="state.count"
        @change="change"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <h1 class="text-3xl font-bold underline">Hello world! Tailwindcss3</h1>
  <t-space size="24px">
    <t-button theme="primary" variant="base">填充按钮</t-button>
    <t-button theme="default" variant="outline">描边按钮</t-button>
    <t-button theme="default" variant="dashed">虚框按钮</t-button>
    <t-button theme="default" variant="text">文字按钮</t-button>
  </t-space>
</template>

<style>
@import 'tailwindcss';
</style>

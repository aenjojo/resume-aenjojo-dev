<script lang="ts">
  export type Paths = {
    name: string;
    link: string;
  }[];

  interface Props {
    paths: Paths;
    current: string;
  }

  const { paths, current }: Props = $props();
</script>

<div class="space-x-1">
  {#each paths as path}
    <a href={path.link}>{path.name}</a>
    <span>&rsaquo;</span>
  {/each}
  <span>{current}</span>
</div>

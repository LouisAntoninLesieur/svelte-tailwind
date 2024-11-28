<script>
  import Title from "./Title.svelte";
  import Links from "./Links.svelte";
  import Foo from "./Foo.svelte";
</script>

<main class="flex flex-col items-center justify-center h-screen bg-neutral-50">
  <Title />
  <Links />
</main>

<footer>
  <Foo name={'Louis'} />
</footer>

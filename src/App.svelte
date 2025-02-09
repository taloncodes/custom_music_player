<script>
  import Header from './Header.svelte';
  import Player from './Player.svelte';

</script>

<main>

  <Header />

  <hr class="custom-hr">

  <section class="main_app"></section>
  <Player />
  
</main>

<style>
  .custom-hr {
  border: none;
  height: 5px;
  background-color: #32FF40;
  margin: 20px 0;
}

  
  
</style>

<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt3r Merch app</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <h2>Home</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus aliquam maiores illum autem quo beatae vitae suscipit rem aspernatur? Recusandae?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ea aliquam aliquid. Alias fugiat eligendi optio illum id nesciunt laboriosam.</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
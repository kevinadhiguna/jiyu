<template>
  <div>
    <header>
      <nav class="shadow-sm bg-white">
        <NuxtLink to="/">Nuxt3r Merch app</NuxtLink>
        <ul class="container mx-auto p-4 flex justify-between">
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

    <!-- Display page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>

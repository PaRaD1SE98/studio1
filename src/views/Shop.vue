<script setup lang="ts">
</script>

<template>
  <main class="shop-page">
    <div class="container section">
      <h1 class="section-title">SHOP</h1>
      <div class="shop-grid">
        <article v-for="i in 8" :key="i" class="product-card">
          <div class="product-image"></div>
          <div class="product-content">
            <h2 class="product-title">Product {{ i }}</h2>
            <p class="product-price">¥3,500</p>
            <button class="buy-button">BUY NOW</button>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.shop-page {
  padding-top: 80px;
}

.shop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.product-card {
  background: var(--section-bg);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
}

.product-image {
  height: 250px;
  background: #ddd;
}

.product-content {
  padding: 1rem;
  text-align: center;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.product-price {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.buy-button {
  width: 100%;
}
</style>
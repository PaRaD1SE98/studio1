<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-background"></div>
    <div class="container footer-content">
      <div class="footer-grid">
        <div class="footer-section">
          <h3 class="footer-title">VIRTUAL STUDIO</h3>
          <p class="footer-description">
            Creating Tomorrow's Virtual Stars through innovative technology and artistic excellence.
          </p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">LINKS</h3>
          <nav class="footer-nav">
            <router-link to="/news" class="footer-link">NEWS</router-link>
            <router-link to="/artists" class="footer-link">ARTISTS</router-link>
            <router-link to="/works" class="footer-link">WORKS</router-link>
            <router-link to="/events" class="footer-link">EVENTS</router-link>
          </nav>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">CONTACT</h3>
          <nav class="footer-nav">
            <router-link to="/contact" class="footer-link">Contact Form</router-link>
            <router-link to="/shop" class="footer-link">Shop</router-link>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} VIRTUAL STUDIO. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
  overflow: hidden;
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%);
  z-index: 1;
}

.footer-content {
  position: relative;
  z-index: 2;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  .footer-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }

  .footer-description {
    line-height: 1.6;
    color: #999;
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-link {
  color: #999;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-color);
  }
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.copyright {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-grid {
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-section {
    text-align: center;
  }

  .footer-nav {
    align-items: center;
  }
}
</style>
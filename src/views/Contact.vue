<script setup lang="ts">
</script>

<template>
  <main class="contact-page">
    <div class="container section">
      <h1 class="section-title">CONTACT</h1>
      <div class="contact-content">
        <form class="contact-form">
          <div class="form-group">
            <label for="name">NAME</label>
            <input type="text" id="name" name="name">
          </div>
          <div class="form-group">
            <label for="email">EMAIL</label>
            <input type="email" id="email" name="email">
          </div>
          <div class="form-group">
            <label for="subject">SUBJECT</label>
            <input type="text" id="subject" name="subject">
          </div>
          <div class="form-group">
            <label for="message">MESSAGE</label>
            <textarea id="message" name="message" rows="6"></textarea>
          </div>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.contact-page {
  padding-top: 80px;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  background: var(--section-bg);
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    font-family: inherit;
    background: white;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
}

button {
  width: 100%;
}
</style>
<template>
  <header class="header">
    <p class="header__title">
      Форма создания клиента
    </p>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="sass" scoped>
.header
  height: 56px
  display: flex
  align-items: center
  background-color: #00b4ed
  padding: 0 20px


.header__title
  font-size: 20px
  font-weight: bold
  color: white
</style>

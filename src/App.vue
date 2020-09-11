<template>
  <div>
    <Header />
    <NewUser />
  </div>
</template>

<script>
import Header from "@/components/Header";
import NewUser from "@/components/NewUser";

export default {
  name: "App",
  components: {
    NewUser,
    Header
  }
};
</script>

<style lang="sass">
body
  font-family: Avenir, Helvetica, Arial, sans-serif
  margin: 0
</style>

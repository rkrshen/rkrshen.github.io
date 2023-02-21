<template lang="pug">
#app
  router-view(name="header")
  .wrapper
    router-view
  router-view(name="footer")
</template>
<script>
export default {};
</script>

<template>
  <div>
    <Header title="我的"></Header>
    <Login></Login>
    <Tabbav></Tabbav>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbav from '@/components/Tabbav'
import Login from '@/components/Login'
export default {
  name: 'Mine',
  components: {
    Header,
    Tabbav,
    Login
  }
}
</script>

<style scoped>

</style>

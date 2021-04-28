<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script type="text/ecmascript-6">
import ListContainer from './ListContainer/index'
import Recommend from './Recommend/index'
import Rank from './Rank/index'
import Like from './Like/index'
import Floor from './Floor/index'
import Brand from './Brand/index'
  export default {
    name:'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand,
    }
  }
</script>

<style scoped lang="less">

 
</style>

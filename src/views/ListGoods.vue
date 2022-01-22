<template>
  <div>
    <Navigation></Navigation>
    <div>
      <TableGoods></TableGoods>
    </div>
  </div>


</template>

<script>
import Navigation from "@/components/Navigation";
import TableGoods from "@/components/TableGoods";
export default {
  name: "ListGoods",
  components: {TableGoods, Navigation},
}
</script>

<style scoped>

</style>

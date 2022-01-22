<template>
  <div>
    <Navigation></Navigation>
    <div>
      <add-form></add-form>
    </div>
  </div>


</template>

<script>
import Navigation from "@/components/Navigation";
import AddForm from "@/components/AddForm";
export default {
  name: "AddGoods",
  components: {AddForm, Navigation},
}
</script>

<style scoped>

</style>

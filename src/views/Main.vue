<template>
  <div>
    <Navigation></Navigation>
    <div class="addTag">
      <add-tag ></add-tag>
    </div>

  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import AddTag from "@/components/AddTag";
export default {
  name:'Main',
  components: {AddTag, Navigation},

};
</script>

<style>
  .addTag{
    margin: 100px auto;
    background-color: rgba(240, 255, 255, 0.81);
    width: 60%;
    border: #303133;
  }
</style>

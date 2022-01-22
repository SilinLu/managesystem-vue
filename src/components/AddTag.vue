<template>
  <div>


        <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
          {{tag.name}}
        </el-tag>


    <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
  </div>

</template>


<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>

<script>

import {addTagAPI, deleteTagAPI, getTagListAPI} from "@/api";


export default {
  name:'AddTag',
  data() {
    return {

      dynamicTags: [],//调用addTagAPI获得值
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    async handleClose(tag) {
      const deleteData = {...tag};
      console.log(deleteData)
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      //调用addTagAPI
      await deleteTagAPI(deleteData);


    },

    showInput() {
      this.inputVisible = true;
      // eslint-disable-next-line no-unused-vars
      this.$nextTick(_ => {

        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    async handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {

        //调用addTagAPI
        const data={"name":inputValue};
        await addTagAPI(data);
        await this.loadData();
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    async loadData() {
      const {data: res} = await getTagListAPI();
      this.dynamicTags= res.data.list;

    }

  },
  mounted:function () {
    this.loadData()
  }
}
</script>

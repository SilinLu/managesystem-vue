<template>
    <div class="add-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2 class="add-title">添加货物</h2>
        </div>
        <div class="text item">
          <el-form :model="addForm" status-icon :rules="rules" ref="addForm" label-width="80px" class="add-form">

            <el-form-item label="商品名" prop="name">
              <el-input v-model.number="addForm.id" ></el-input>
            </el-form-item>
            <el-form-item label="进货价" prop="costPrice">
              <div class="block">
                <el-slider
                    v-model="addForm.costPrice"
                    show-input>
                </el-slider>
              </div>
            </el-form-item>
            <el-form-item label="售价" prop="unitPrice">
              <div class="block">
                <el-slider
                    v-model="addForm.unitPrice"
                    show-input>
                </el-slider>
              </div>
            </el-form-item>
            <el-form-item label="数量" prop="quantity">
              <div class="block">
                <el-slider
                    v-model="addForm.quantity"
                    show-input>
                </el-slider>
              </div>
            </el-form-item>
            <el-form-item label="分类" prop="tag">
              <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addGoods('addForm')">添加货物</el-button>
              <el-button @click="resetForm('addForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>



</template>

<script>
import {addGoodsAPI} from "@/api";

export default {
  name:'AddForm',
  data() {
    var checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入名称'));
      } else {
        callback();
      }
    };
    var checkTag = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择分类'));
      } else {
        callback();
      }
    };
    var checkCost= (rule, value, callback) => {
      if (value <=0) {
        callback(new Error('请输入正确的金额'));
      } else {
        callback();
      }
    };
    var checkUnit= (rule, value, callback) => {
      if (value <=0) {
        callback(new Error('请输入正确的金额'));
      } else {
        callback();
      }
    };
    var checkQuan= (rule, value, callback) => {
      if (value <=0|!Number.isInteger(value)) {
        callback(new Error('请输入正确的数量'));
      } else {
        callback();
      }
    };
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      addForm: {
        costPrice: 0,
        unitPrice: 0,
        name:'',
        tag:'',
        quantity:0,
      },
      rules: {
        costPrice: [
          { validator: checkCost, trigger: 'blur' }
        ],
        unitPrice: [
          { validator: checkUnit, trigger: 'blur' }
        ],
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        tag: [
          { validator: checkTag, trigger: 'blur' }
        ],
        quantity: [
          { validator: checkQuan, trigger: 'blur' }
        ],
      },
    };
  },
  methods: {

    async addGoods(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$message('请正确填写表格');
          return;
        }});

      const addData = {...this.addForm};
      //发起请求
      const {data: res} = await addGoodsAPI(addData);
      console.log(res);

      // 显示提示信息
      this.$message(res.message);
      // 如果失败  则停止执行
      if (res.code !== 200) {
        return;
      } else {
        // 如果成功
        // 将返回的token 保存到 sessionStorage
        console.log(11);
        this.$refs[formName].resetFields();
      }

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;

      // eslint-disable-next-line no-unused-vars
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>
<style acoped>
.add-form {
  width: 350px;
  margin: 30px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.1); /* 透明背景色 */
  padding: 10px;

}

/* 背景 */
.add-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* 标题 */
.add-title {
  color: #303133;
  text-align: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  margin: 40px auto;
  width: 35%;

}

</style> -->

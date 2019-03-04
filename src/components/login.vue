<template>
    <div class="login">
        <div class="title">
            <h2>Threatcentral数据可视化系统</h2>
        </div>
        <div class="form_list">
            <el-form ref="form" :model="form" label-width="20px">
                <el-form-item style="color:#fff">
                    <el-input v-model="form.IP" prefix-icon="iconfont el-sun-IP" placeholder="内网IP"></el-input>
                </el-form-item>
                <el-form-item style="color:#fff">
                    <el-input v-model="form.name" prefix-icon="iconfont el-sun-mingcheng" placeholder="显示名称"></el-input>
                </el-form-item>
                <el-form-item style="color:#fff">
                    <el-input v-model="selecte" prefix-icon="iconfont el-sun-chengshi1" placeholder="所在城市">
                        <el-button slot="append" icon="iconfont el-sun-tianjia" @click="add"></el-button>
                    </el-input>
                </el-form-item>
                <!-- Cascader 级联选择器 -->
                <el-form-item style="color:#fff">
                    <el-cascader :options="options" v-model="selectedOptions" placeholder="国家/省份/城市/地区" @change="handleChange" style="width:100%">
                    </el-cascader>
                </el-form-item>
                <el-form-item style="color:#fff">
                    <el-input v-model="form.screenName" prefix-icon="iconfont el-sun-mingcheng" placeholder="大屏名称">
                    </el-input>
                </el-form-item>
                <el-form-item v-if="false">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="next">下一步</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
                <el-form-item>
                     <el-button type="primary"><router-link to="/WorldMap">WorldMap</router-link></el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style scoped lang="less">
.login {
  //   font-size: 16px;
  color: #fff;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  text-align: center;
  border: 1px solid #000000;
  background: url(../assets/img/site-background-image.jpg) no-repeat 0px 0px;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  .title {
    margin-top: 100px;
  }
  .form_list {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
    color: #fff;
    width: 400px;
    // border: 1px solid green;
  }
}
label {
  color: #fff;
}

.el-form-item__label {
  color: red;
}
</style>
<script>
import options from 'common/js/country-data.js'
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            options: options,
            selectedOptions: [],
            selectedOptions2: [],
            res: ''
        }
    },
    methods: {
        next() {
            console.log('submit!');
            this.$router.push({
                path: '/home'
            })
            localStorage.setItem('token', 'login');
        },
        // 添加城市
        add() {
            console.log('city');
            localStorage.setItem('token', '123');
        },
        handleChange(value) {
            console.log(value);
        }
    },
    mounted() {

    },
    computed: {
        selecte: function () {
            this.res = "";
            if (this.selectedOptions.length != 0) {
                this.selectedOptions.forEach((item, index) => {
                    if (index == this.selectedOptions.length - 1) {
                        this.res = this.res + item
                    } else {
                        this.res += item + ' / '
                    }
                })
                return this.res
            }
        }
    }
}
</script>

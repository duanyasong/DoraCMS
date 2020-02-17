<template>
  <div :class="classObj" class="dr-customerInfoForm">
    <div class="main-container">
      <ItemForm :device="device" :formState="addressForm" />
      <el-form
        :model="formState.formData"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        :label-position="device == 'mobile' ? 'top' : 'right'"
      >
        <el-form-item :label="$t('customer.name')" prop="name">
          <el-input size="small" v-model="formState.formData.name"></el-input>
        </el-form-item>
        <el-form-item v-if="!formState.edit" :label="$t('customer.type')" prop="type">
          <el-radio-group v-model="formState.formData.type" @change="changeType">
            <el-radio class="radio" label="0">{{$t('customer.typeText')}}</el-radio>
            <el-radio class="radio" label="1">{{$t('customer.typePic')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('customer.enable')" prop="state">
          <el-switch
            :on-text="$t('main.radioOn')"
            :off-text="$t('main.radioOff')"
            v-model="formState.formData.state"
          ></el-switch>
        </el-form-item>
        <el-form-item :label="$t('customer.comments')" prop="comments">
          <el-input size="small" v-model="formState.formData.comments"></el-input>
        </el-form-item>
        <div v-if="formState.formData.type == '1'">
          <el-form-item :label="$t('customer.slider')" prop="carousel">
            <el-switch
              :on-text="$t('main.radioOn')"
              :off-text="$t('main.radioOff')"
              v-model="formState.formData.carousel"
            ></el-switch>
          </el-form-item>
          <el-form-item :label="$t('customer.showHeight')" prop="height">
            <el-input
              size="small"
              type="number"
              min="0"
              max="10"
              style="width:150px;"
              :placeholder="$t('customer.showHeight')"
              v-model="formState.formData.height"
            >
              <template slot="append">px</template>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('customer.imglist')" prop="items">
            <el-button
              size="small"
              type="primary"
              plain
              round
              @click="showAddressForm"
            >{{$t('customer.addImgItem')}}</el-button>
            <div class="dr-customer-item" v-for="item in formState.formData.items" :key="item._id">
              <div class="img">
                <img :src="item.sImg" />
              </div>
              <div class="details">
                <ul>
                  <li>{{$t('customer.imgAlt')}}：{{item.alt}}</li>
                  <li>{{$t('customer.imgLink')}}：{{item.link}}</li>
                </ul>
              </div>
              <div class="options">
                <el-button size="mini" type="primary" plain round @click="editAddressInfo(item)">
                  <svg-icon icon-class="edit" />
                </el-button>
              </div>
              <i class="el-icon-close" @click="deleteAddress(item)"></i>
            </div>
          </el-form-item>
        </div>
        <div v-if="formState.formData.type == '0'">
          <el-form-item :label="$t('customer.textList')" prop="items">
            <el-button
              size="small"
              type="primary"
              plain
              round
              @click="showAddressForm"
            >{{$t('customer.addTextLink')}}</el-button>
            <div v-if="formState.formData.items.length > 0">
              <el-tag
                v-for="tag in formState.formData.items"
                :key="tag.title"
                type="gray"
                :closable="true"
                @close="deleteAddress(tag)"
              >
                <span @click="editAddressInfo(tag)">{{tag.title}}</span>
              </el-tag>
            </div>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button
            size="medium"
            type="primary"
            @click="submitForm('ruleForm')"
          >{{formState.edit ? $t('main.form_btnText_update') : $t('main.form_btnText_save')}}</el-button>
          <el-button size="medium" @click="backToList">{{$t('main.back')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { updateCustomer, addOneAd, getOneAd } from "@/api/customer";
import ItemForm from "./itemForm";
import _ from "lodash";
import { mapGetters, mapActions } from "vuex";
import { initEvent } from "@root/publicMethods/events";

export default {
  data() {
    return {
      sidebarOpened: true,
      device: "desktop",
      rules: {
        name: [
          {
            required: true,
            message: this.$t("validate.inputNull", {
              label: this.$t("customer.name")
            }),
            trigger: "blur"
          },
          {
            min: 2,
            max: 15,
            message: this.$t("validate.ranglengthandnormal", {
              min: 2,
              max: 15
            }),
            trigger: "blur"
          }
        ],
        comments: [
          {
            required: true,
            message: this.$t("validate.inputNull", {
              label: this.$t("main.comments_label")
            }),
            trigger: "blur"
          },
          {
            min: 5,
            max: 30,
            message: this.$t("validate.ranglengthandnormal", {
              min: 5,
              max: 30
            }),
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {
    ItemForm
  },
  methods: {
    backToList() {
      this.$router.push(this.$root.adminBasePath + "/customer");
    },
    changeType(type) {},
    showAddressForm() {
      this.$store.dispatch("customer/showAddressForm", { edit: false });
    },
    editAddressInfo(item) {
      this.$store.dispatch("customer/showAddressForm", {
        edit: true,
        formData: item
      });
    },
    deleteAddress(item) {
      let oldFormState = this.$store.getters.customerInfoForm;
      let addresses = oldFormState.formData.items;
      let newItems = _.filter(addresses, doc => {
        return doc._id != item._id;
      });
      oldFormState.formData.items = newItems;
      this.$store.dispatch("customer/customerInfoForm", oldFormState);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = this.formState.formData;
          // 更新
          if (this.formState.edit) {
            updateCustomer(params).then(result => {
              if (result.status === 200) {
                this.$store.dispatch("customer/hideAddressForm");
                this.$message({
                  message: this.$t("main.updateSuccess"),
                  type: "success"
                });
                this.$router.push(this.$root.adminBasePath + "/customer");
              } else {
                this.$message.error(result.message);
              }
            });
          } else {
            // 新增
            addOneAd(params).then(result => {
              if (result.status === 200) {
                this.$message({
                  message: this.$t("main.addSuccess"),
                  type: "success"
                });
                this.$router.push(this.$root.adminBasePath + "/customer");
              } else {
                this.$message.error(result.message);
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  computed: {
    ...mapGetters(["addressForm"]),
    formState() {
      return this.$store.getters.customerInfoForm;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebarOpened,
        openSidebar: this.sidebarOpened,
        withoutAnimation: "false",
        mobile: this.device === "mobile"
      };
    }
  },
  mounted() {
    initEvent(this);
    // 针对手动页面刷新
    if (this.$route.params.id) {
      getOneAd(this.$route.params).then(result => {
        if (result.status === 200) {
          if (result.data) {
            this.$store.dispatch("customer/customerInfoForm", {
              edit: true,
              formData: result.data
            });
          } else {
            this.$message({
              message: this.$t("validate.error_params"),
              type: "warning",
              onClose: () => {
                this.$router.push(this.$root.adminBasePath + "/customer");
              }
            });
          }
        } else {
          this.$message.error(result.message);
        }
      });
    }
  }
};
</script>
<style lang="scss">
.dr-customerInfoForm {
  margin-top: 30px;
}
.el-tag {
  margin-right: 15px;
}

.dr-customer-item {
  color: #48576a;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  padding: 5px;
  position: relative;
  margin: 15px 0;
  .img {
    width: 70px;
    height: 70px;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .details {
    display: inline-block;
    margin-left: 80px;
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style-type: none;
      }
    }
  }
  .options {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .el-icon-close {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 11px;
    cursor: pointer;
    color: #bfcbd9;
  }
}
</style>
<template>
  <div class="dr-toolbar">
    <div class="option-button el-col-6">
      <el-button type="primary" size="small" plain round @click="addCustomer">
        <svg-icon icon-class="icon_add" />
      </el-button>
      <!-- TOPBARLEFT -->
    </div>
    <div class="el-col-18">&nbsp;</div>
  </div>
</template>
<script>
export default {
  props: {
    device: String,
    pageInfo: Object,
    type: String,
    ids: Array
  },
  data() {
    return {
      selectUserList: [],
      searchkey: ""
    };
  },
  methods: {
    addCustomer() {
      this.$store.dispatch("customer/customerInfoForm", {
        edit: false,
        formData: {}
      });
      this.$router.push(this.$root.adminBasePath + "/customer/addCustomer");
    }

    // TOPBARLEFTOPTION
  },
  components: {}
};
</script>
<style lang="scss">
</style>

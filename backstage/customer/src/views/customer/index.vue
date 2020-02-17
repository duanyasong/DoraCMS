<template>
  <div :class="classObj" class="customer">
    <div class="main-container">
      <el-row class="dr-datatable">
        <el-col :span="24">
          <TopBar type="customer"></TopBar>
          <DataTable :dataList="customerList.docs"></DataTable>
          <Pagination :device="device" :pageInfo="customerList.pageInfo" pageType="customer"></Pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import InfoForm from "./infoForm";
import DataTable from "./dataTable.vue";
import TopBar from "../common/TopBar.vue";
import Pagination from "../common/Pagination.vue";
import { mapGetters, mapActions } from "vuex";
import { initEvent } from "@root/publicMethods/events";

export default {
  name: "index",
  data() {
    return {
      sidebarOpened: true,
      device: "desktop"
    };
  },
  components: {
    DataTable,
    TopBar,
    InfoForm,
    Pagination
  },
  methods: mapActions([]),
  computed: {
    ...mapGetters(["customerList"]),
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
    this.$store.dispatch("customer/getCustomerList");
  }
};
</script>

<style lang="">
</style>
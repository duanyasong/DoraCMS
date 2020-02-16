<template>
  <div :class="classObj" class="bannersilder">
    <div class="main-container">
      <el-row class="dr-datatable">
        <el-col :span="24">
          <TopBar type="bannersilder"></TopBar>
          <DataTable :dataList="bannersilderList.docs"></DataTable>
          <Pagination :device="device" :pageInfo="bannersilderList.pageInfo" pageType="bannersilder"></Pagination>
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
    ...mapGetters(["bannersilderList"]),
    formState() {
      return this.$store.getters.bannersilderInfoForm;
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
    this.$store.dispatch("bannersilder/getBannersilderList");
  }
};
</script>

<style lang="">
</style>
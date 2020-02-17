<template>
  <div :class="classObj" class="customergroup">
    <div class="main-container">
      <GroupForm :device="device" :dialogState="formState"></GroupForm>
      <el-row class="dr-datatable">
        <el-col :span="24">
          <TopBar type="customergroup" :pageInfo="customergroupList.pageInfo"></TopBar>
          <DataTable :pageInfo="customergroupList.pageInfo" :dataList="customergroupList.docs"></DataTable>
          <Pagination :device="device" :pageInfo="customergroupList.pageInfo" pageType="customergroup"></Pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import GroupForm from "./groupForm";
import DataTable from "./dataTable.vue";
import TopBar from "../common/TopBar.vue";
import Pagination from "../common/Pagination.vue";
import { mapGetters, mapActions } from "vuex";
import { initEvent } from "@root/publicMethods/events";

export default {
  name: "customergroup",
  data() {
    return {
      sidebarOpened: true,
      device: "desktop"
    };
  },
  components: {
    DataTable,
    TopBar,
    GroupForm,
    Pagination
  },
  methods: mapActions([]),
  computed: {
    ...mapGetters(["customergroupList"]),
    formState() {
      return this.$store.getters.customergroupFormState;
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
    this.$store.dispatch("customergroup/getCustomergroupList");
  }
};
</script>

<style lang="">
</style>
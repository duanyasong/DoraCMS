module.exports = {

  title: 'Egg Commerce Admin',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  server_api: '',
  // 加密key
  token_key: 'admin_eggcommerce',
  // 中台tokenkey
  admin_token_key: 'admin_eggcommerceapi',
  // 宿主后台管理根目录
  admin_base_path: '/admin',

  // 宿主工程目录
  host_project_path: '/',
  // 七牛文件上传目录
  qiniuStaticPath: '/'
}
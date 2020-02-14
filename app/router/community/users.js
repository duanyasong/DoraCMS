module.exports = app => {
    const {
        router,
        controller
    } = app;

    const authPage = app.middleware.authPage({});

    //用户登录
    //router.get('/users/login', controller.page.home.getDataForUserReg);

    //router.get(["/", "/zh-CN", "/zh-TW", "/en"], controller.page.home.getDataForIndexPage);

}
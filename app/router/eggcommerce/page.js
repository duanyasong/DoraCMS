module.exports = app => {
    const {
        router,
        controller
    } = app;

    router.get(["/index.html","/index-2.html","/index-3.html","/", "/zh-CN", "/zh-TW", "/en"], controller.eggcommerce.page.getDataForIndexPage);

    router.get("/login.html", controller.eggcommerce.page.getDataForLoginPage);

    router.get("/register.html", controller.eggcommerce.page.getDataForRegisterPage);

    router.get("/checkout.html", controller.eggcommerce.page.getDataForCheckoutPage);

    router.get("/cart.html", controller.eggcommerce.page.getDataForCartPage);

    router.get("/wishlist.html", controller.eggcommerce.page.getDataForWishlistPage);

    router.get("/shop-page.html", controller.eggcommerce.page.getDataForShopPagePage);

    router.get("/shop-list.html", controller.eggcommerce.page.getDataForShopListPage);
	
    router.get("/about-us.html", controller.eggcommerce.page.getDataForAboutUsPage);

    router.get("/contact.html", controller.eggcommerce.page.getDataForContactPage);

    router.get("/single-product.html", controller.eggcommerce.page.getDataForSingleProductPage);

    router.get("/404.html", controller.eggcommerce.page.getDataFor404Page);

    router.get("/blog-page.html", controller.eggcommerce.page.getDataForBlogPagePage);

    router.get("/blog-details.html", controller.eggcommerce.page.getDataForBlogDetailsPage);

    router.get("/blog-sidebar.html", controller.eggcommerce.page.getDataForBlogSidebarPage);

    router.get("/blog-right-sidebar.html", controller.eggcommerce.page.getDataForBlogRightSidebarPage);


}
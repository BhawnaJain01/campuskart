const router = require("express").Router();
const product = require("../Controller/Product");
const wishlist = require("../Controller/wishlist");
const forum = require("../Controller/forum");
const user = require("../Controller/users");
const { update } = require("../models/productsData");

//USER APIS

router.post("/sendmail", user.sendMAil);
router.post("/Register", user.Register);
router.post("/Login", user.Login);
router.get("/get/user/:emailId", user.getUserByEmailId);
// router.put("/profile/update", register.updateProfile);

router.post("/contactmail", user.sendmailforcontact);
router.delete("/DeleteAccount/:id", user.Deleteaccount);
// router.put("/sendotpforpass", register.sendotpforgetpass);
// router.post("/ForgotPassword", register.Forgotpassword);
// router.put("/UpdatePassword", register.UpdatePassword);
// router.put("/Sendotpchangepassword", register.sendotpChangepassword);
// router.post("/ChangePassword", register.ChangePassword);

//PRODUCT APIS

router.post("/product/upload", product.uploadProduct);
router.delete("/product/delete/:productId", product.deleteProduct);
router.get(
  "/product/get/:category/:collegeName",
  product.getProductsByCategory
);

router.get("/products/get/myProducts/:sellerId", product.getAllMyProducts);
router.get("/product/all", product.getAllProducts);
router.put("/product/updateProduct", product.updateProductDetails);

//FORUM APIS

router.post("/AddRequest", forum.AddForum);
router.get("/ShowAllRequest", forum.GetAllForum);

//WISHLIST APIS

router.post("/addprodinWishlist", wishlist.AddprodinWishlist);
router.get("/getProdfromWishlist/:id", wishlist.getprodfromwishlist);
router.delete(
  "/deleteprodfromwishlist/:cid/:pid",
  wishlist.deleteprodfromwishlist
);

module.exports = router;

// CRUD :
// create   : Post
// Read  : get
// update : Put
// Delete :

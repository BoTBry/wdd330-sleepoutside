import { setLocalStorage, getParam} from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
const productId = getParam('product');

console.log(dataSource.findProductById(productId));

function addProductToCart(product) {
  // Step 1: Get the current cart or create a new one
  let currentCart = JSON.parse(localStorage.getItem("so-cart")) || [];

  // Step 2: Add the new product
  currentCart.push(product);

  // Step 3: Save the updated cart
  setLocalStorage("so-cart", currentCart);

  // setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

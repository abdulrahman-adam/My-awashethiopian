// import Sale from "./Sale.js";
// import SaleItem from "./SaleItem.js";
// import Product from "./Product.js";
// import Category from "./Category.js";
// import InventoryLog from "./InventoryLog.js";

// const models = {
//   Sale,
//   SaleItem,
//   Product,
//   Category,
//   InventoryLog,
// };

// export default models;


import sequelize from "../configs/db.js";

import Sale from "./Sale.js";
import SaleItem from "./SaleItem.js";
import Product from "./Product.js";
import Category from "./Category.js";
import InventoryLog from "./InventoryLog.js";

const models = {
  Sale,
  SaleItem,
  Product,
  Category,
  InventoryLog,
};

/* =========================================================
   ASSOCIATIONS (MUST RUN HERE)
========================================================= */

// Product → InventoryLog
// Product.hasMany(InventoryLog, {
//   foreignKey: "product_id",
//   as: "inventoryLogs",
// });

// InventoryLog → Product ⭐ THIS FIXES YOUR ERROR
InventoryLog.belongsTo(Product, {
  foreignKey: "product_id",
  as: "product",
});

export default models;
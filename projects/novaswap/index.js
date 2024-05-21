const { uniV3Export } = require("../helper/uniswapV3");
const factory = "0xf8D35842f37800E349A993503372fb9E2CBb7E3d";

module.exports = uniV3Export({
  zklink: { factory, fromBlock: 1676255 },
});

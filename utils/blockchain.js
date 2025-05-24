
const { ApiPromise, WsProvider } = require('@polkadot/api');

let api;

const initApi = async () => {
  if (!api) {
    const wsProvider = new WsProvider('wss://wss.agung.peaq.network');
    api = await ApiPromise.create({ provider: wsProvider });
  }
  return api;
};

module.exports = { initApi };

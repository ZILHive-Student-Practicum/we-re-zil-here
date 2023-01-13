const { Zilliqa } = require("@zilliqa-js/zilliqa");
const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");

// Collections contract deployed on devnet- Keeps track of Collections created by any user
const nftContract = "0xdf2acdbd54d6c7472528719b7b7430ae0eecfae8";

async function getCollections(user_address) {
  const deployed_contract_list = await getValueFromMapKey(
    nftContract,
    "collectionByUser",
    String(user_address).toLowerCase()
  );
  return deployed_contract_list["collectionByUser"][String(user_address).toLowerCase()]
}

async function getContractState() {
  const chainResponse = await zilliqa.blockchain.getSmartContractState(
    nftContract
  );
  console.log(
    `for call Contract State : chain response, ${JSON.stringify(
      chainResponse.result
    )}`
  );
  return JSON.stringify(chainResponse.result);
}

async function getValueFromMapKey(nftContract, contract_state_field, map_key) {
  const chainResponse = await zilliqa.blockchain.getSmartContractSubState(
    nftContract,
    contract_state_field,
    [map_key]
  );
  console.log(
    `for call ${contract_state_field} : chain response, ${JSON.stringify(
      chainResponse.result
    )}`
  );
  return chainResponse.result;
}

export default getCollections;

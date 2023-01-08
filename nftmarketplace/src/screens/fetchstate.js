const axios = require("axios");

const { Zilliqa } = require("@zilliqa-js/zilliqa");
const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");

// Standard fungible token deployed on devnet
const nftContract = "0xaaad3befb37afbc3beeef284a7f270999eb8be78";
const userAddress = "0x36B9Df8C9D33231fEb31627ea7dF39CE15Bb3cc5";

async function getNFTContractState(nft_contract, token_id) {
  const balance_row = await getValueFromMapKey(nftContract, "balances", userAddress);
  const token_owner_row = await getValueFromMapKey(nftContract, "token_owners", token_id);
  const base_uri = await getStaticValue(nftContract, "base_uri");
  const turi_tokenuri_set = await getValueFromMapKey(
    nftContract,
    "token_uris",
    String(token_id)
  );
  const turi_baseuri_set = await getValueFromMapKey(
    nftContract,
    "token_uris",
    String(token_id)
  );

//is token_uri set?
  // False =>
    // is base_uri set?
      // True =>
        // use base_uri
      // False =>
        // neither are set
  // True =>
    // use token_uri

  // is token_uri set for token 2?
  turi_tokenuri_set !== undefined || turi_tokenuri_set !== null
    ? console.log(`token ${token_id} has a token_uri, and a base API is set`)
    : process.abort(`token ${token_id} exception`);

  // is base_uri set for token 12?
  turi_baseuri_set === undefined || turi_baseuri_set === null
    ? process.abort(`token ${token_id} exception`)
    : console.log(`token ${token_id} has no token_uri, as it uses a base API`);

  // is token_uri && base_uri both not set?
  turi_tokenuri_set !== undefined ||
  (turi_tokenuri_set !== null && turi_baseuri_set === undefined) ||
  turi_baseuri_set === null
    ? console.error(`token ${token_id} is valid`)
    : console.error(
        `token ${token_id} has neither a base_uri or token_URI set`
      );
}
async function getStaticValue(nftContract, contract_state_field) {
  const chainResponse = await zilliqa.blockchain.getSmartContractSubState(
    nftContract,
    contract_state_field
  );
  console.log(
    `for call ${contract_state_field} : chain response, ${JSON.stringify(
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
  return JSON.stringify(chainResponse.result);
}

getNFTContractState(nftContract, 2);
getNFTContractState(nftContract, 12);
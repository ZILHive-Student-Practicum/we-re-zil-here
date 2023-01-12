import axios from "axios";

const { Zilliqa } = require("@zilliqa-js/zilliqa");
const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");
// Standard fungible token deployed on devnet
const nftContract = "0x89b08fca783f0ee47af6ef97409da1f6b733c899";
const userAddress = "0x21e7dBB129a35025e09C7AA698407FC1432Fbfe1";

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
    console.log(token_owner_row)
  turi_tokenuri_set !== undefined || turi_tokenuri_set !== null
    ? console.log(`token ${token_id} has a token_uri, and a base API is set`)
    : process.abort(`token ${token_id} exception`);

  turi_baseuri_set === undefined || turi_baseuri_set === null
    ? process.abort(`token ${token_id} exception`)
    : console.log(`token ${token_id} has no token_uri, as it uses a base API`);

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

export default getNFTContractState;

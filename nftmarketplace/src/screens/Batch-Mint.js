const { BN, Long, bytes, units } = require("@zilliqa-js/util");
const { Zilliqa } = require("@zilliqa-js/zilliqa");
const {
  toBech32Address,
  getAddressFromPrivateKey,
} = require("@zilliqa-js/crypto");

const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");

const chainId = 333; // chainId of the developer testnet
const msgVersion = 1; // current msgVersion
const VERSION = bytes.pack(chainId, msgVersion);

// Populate the wallet with an account
const privateKey = "8f471919298b9853da87bb82da6336ec4b9e66a045c821af6783d095e3d4d011";

zilliqa.wallet.addByPrivateKey(privateKey);

const zrc6contract = "0xaaad3befb37afbc3beeef284a7f270999eb8be78";

async function IncrementingNonceBatchMint(nonce, n) {
  try {
    // Get Minimum Gas Price from blockchain
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();

    console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);

    const myGasPrice = units.toQa("6100", units.Units.Li); // Gas Price that will be used by all transactions

    console.log(`My Gas Price ${myGasPrice.toString()}`);
    const isGasSufficient = myGasPrice.gte(new BN(minGasPrice.result)); // Checks if your gas price is less than the minimum gas price
    console.log(`Is the gas price sufficient? ${isGasSufficient}`);

    const deployedContract = zilliqa.contracts.at(zrc6contract);

    const user_address = "0x0000000000000000000000000000000000000000";

    const multi_call = {
      constructor: "Pair",
      argtypes: ["ByStr20", "String"],
      arguments: [user_address, ""],
    };
    const arrayOfPairs = Array(n).fill(multi_call);

    const mintMsg = {
      vname: "to_token_uri_pair_list",
      type: "List (Pair ByStr20 String)",
      value: arrayOfPairs,
    };

    const callTx = await deployedContract.callWithoutConfirm(
      "BatchMint",
      [mintMsg],
      {
        // amount, gasPrice and gasLimit must be explicitly provided
        version: VERSION,
        amount: new BN(0),
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(61000),
        nonce,
      },
      false
    );

    console.log(
      `The transaction id is: https://viewblock.io/zilliqa/tx/0x${callTx.id}?network=testnet for ${n} mints`
    );
    console.log(`Waiting transaction be confirmed`);
    const confirmedTxn = await callTx.confirm(callTx.id);

    console.log(`The transaction status is:`);
    console.log(confirmedTxn.receipt);

    if (confirmedTxn.receipt.success === true) {
      console.log(`Contract address is: ${deployedContract.address}`);
    }
  } catch (err) {
    console.log(err);
  }
}

async function BatchMint() {
  // Get Balance
  const address = getAddressFromPrivateKey(privateKey);
  console.log(`My account address is: ${address}`);
  console.log(`My account bech32 address is: ${toBech32Address(address)}`);
  const { result } = await zilliqa.blockchain.getBalance(address);
  console.log(result);
  let originalNonce;
  if (result) {
    originalNonce = result.nonce;
  } else {
    originalNonce = 0;
  }

  // ==============================================
  const minted = (
    await zilliqa.blockchain.getSmartContractSubState(
      zrc6contract,
      "total_supply"
    )
  )["result"]["total_supply"];

  const maxToMint = 100;
  const leftToMint = maxToMint - minted;
  const numInBatch = 50;

  console.log(leftToMint + " left to mint");
  // ===============================================

  let nonce = originalNonce;

  const callsOfBatch = Math.floor(leftToMint / numInBatch);

  console.log(`${callsOfBatch} callsOf ${numInBatch}`);
  console.log(nonce);

  for (let i = 1; i <= callsOfBatch; i++) {
    console.log(`nonce: ${nonce + i}`);
    IncrementingNonceBatchMint(nonce + i, numInBatch);
  }

  console.log(`nonce: ${nonce + callsOfBatch + 1}`);
  IncrementingNonceBatchMint(nonce + callsOfBatch + 1, leftToMint % numInBatch);
}

BatchMint();
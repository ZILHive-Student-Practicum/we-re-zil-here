const contractAddress="0xdf2acdbd54d6c7472528719b7b7430ae0eecfae8";

function loadContract(contractAddr){
	try{
		return window.zilPay.contracts.at(contractAddr);
	}catch(err){
		console.log(err.message);
		return false;
	}
}

function addToCollection(collectionAddress){
    const contractObject = loadContract(contractAddress);
    if(contractObject){
		var tx = contractObject.call('add_collection',[{
            vname: "address",
            type: "ByStr20",
            value: collectionAddress
        }],
        {
            gasPrice: window.zilPay.utils.units.toQa('2000', window.zilPay.utils.units.Units.Li),
            gasLimit: window.zilPay.utils.Long.fromNumber(10000)
        });
        /* Code for transaction call */
    
        //handle the promise accordingly
       console.log(tx)
    
	}else{
		console.log("Contract Not yet deployed")
	}
}

export default addToCollection;
const isAddress = function(data_input) {
    return !!data_input.match(/^0x[a-zA-Z0-9]{40}$/);
};

const getContractFromAddress = function(address) {
    let url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=E5KM3HIGE2PV4RR763IQSXGZIV6UV638P2`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.result[0].SourceCode);
};

export function getContract(data_input) {
    return isAddress(data_input)
        ? getContractFromAddress(data_input)
        : new Promise(resolve => resolve(data_input));
}

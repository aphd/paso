export function getContractFromAddress(address) {
    let url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=E5KM3HIGE2PV4RR763IQSXGZIV6UV638P2`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.result[0].SourceCode);
}

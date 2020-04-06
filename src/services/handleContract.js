export class HandleContract {
    constructor(props) {
        this.address = props.addrEl.value;
        this.invalidAddrEl = props.invalidAddrEl;
        this.contractCodeEl = props.contractCodeEl;
        this.isValidAddress() ? this.fetchContract() : this.showErrorMessage();
    }
    fetchContract = () => {
        let url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${this.address}&apikey=E5KM3HIGE2PV4RR763IQSXGZIV6UV638P2`;
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.sourceCode = data.result[0].SourceCode;
                this.sourceCode ? this.showContract() : this.showErrorMessage();
            });
    };
    hideErrorMessage = () => this.invalidAddrEl.classList.remove("d-block");

    isValidAddress = () => !!this.address.match(/^0x[a-zA-Z0-9]{40}$/);

    showErrorMessage = () => this.invalidAddrEl.classList.add("d-block");

    showContract = () => {
        this.contractCodeEl.value = this.sourceCode;
        this.hideErrorMessage();
    };
}

import {Reader} from "./reader.mjs";
import {Writer} from "./writer.mjs";

class Client {

    constructor (par) {
        this.dir = par.dir;
        this.output = par.output;
        this.fns = this.read();
        this.write()
    }

    read() {
        return new Reader(this.dir).files;
    }

    write() {
        let fns = this.fns.map(fn => `${this.dir}${fn.slice(0,4)}/${fn}`).slice(1, 10);
        const w = new Writer(fns, this.output);
        w.write_csv();
    }
}

new Client({
    dir: "/Users/antonio/github/aphd/solidity-metrics/examples/_html_files_14890/",
    output: "/tmp/_metrics.csv"
});

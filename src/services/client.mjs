import {Reader} from "./reader.mjs";
import {Writer} from "./writer.mjs";
import args from "yargs";

class Client {

    constructor (dir, output) {
        this.dir = dir;
        this.fns = this.read();
        this.write(output)
    }

    read() {
        return new Reader(this.dir).files;
    }

    write(output) {
        let fns = this.fns.map(fn => `${this.dir}${fn.slice(0,4)}/${fn}`);
        const w = new Writer(fns, output);
        w.write_csv();
    }
}

const {argv} = args;
if ( typeof argv.d !== 'undefined' && typeof argv.o !== 'undefined' ){
    new Client( argv.d, argv.o);
} else {
    console.log('Error: no parameter named "--d" and "--o"\nExample:\nnode --experimental-modules src/services/client.mjs --d=src/fixtures/smart-contracts/ --o /tmp/metrics.csv');
}

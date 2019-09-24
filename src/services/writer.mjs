import fs from "fs";
import {solParse} from "../utils/sol-parser";
import Parse from "json2csv";

export class Writer {
    constructor(fns, output) {
        this.metrics = [];
        this.output = output;
        fns.forEach(fn => {
            try {
                this.setMetrics(fn);
            } catch {}
        });
    }

    setMetrics(fn) {
        this.lines = fs.readFileSync(fn, "utf8").split("\n");
        const code = this.lines.slice(3, -4).join('\n');
        let current_metrics = solParse(code);
        current_metrics['address'] = fn.replace(/.html$/,'').slice(-42);
        current_metrics['submission_date'] = this.lines[1].match(/\d+-\d+-\d+/)[0];
        this.metrics.push(current_metrics);
    }

    write_csv() {
        try {
            const csv = Parse.parse(this.metrics);
            console.log(csv);
            fs.appendFile(this.output, csv, (err) => {
                if (err) throw err;
                console.log(`The metrics was appended to: ${this.output}!`);
            });
        } catch (err) {
            console.error(err);
        }
    }
}

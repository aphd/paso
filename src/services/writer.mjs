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
            } catch(error) {
                console.error(fn);
            }
        });
    }

    setMetrics(fn) {
        this.lines = fs.readFileSync(fn, "utf8").split("\n");
        const code = this.fix_code(this.lines.slice(3, -4).join('\n'));
        let current_metrics = solParse(code);
        current_metrics['submission_date'] = this.lines[1].match(/\d+-\d+-\d+/)[0];
        current_metrics['bytecode'] = this.lines.slice(-3, -2)[0].length;
        current_metrics['ABI'] = this.lines.slice(-1)[0].length;
        current_metrics['address'] = fn.replace(/.html$/,'').slice(-42);
        this.metrics.push(current_metrics);
    }

    write_csv() {
        try {
            const opts = fs.existsSync(this.output) ? {header: false} : {};
            const csv = Parse.parse(this.metrics, opts);
            fs.appendFile(this.output, csv + '\n', (err) => {
                if (err) throw err;
                console.log(`The metrics was appended to: ${this.output}!`);
            });
        } catch (err) {
            console.error(err);
        }
    }

    fix_code(code)  {
        return code.replace(/(_)\s*(})$/gm,'$1;$2').replace(/(_)\s*$/gm, '$1;');
    }
}

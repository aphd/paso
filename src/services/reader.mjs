import fs from "fs";

export class Reader {
    constructor(dir) {
        this.dir = dir;
        this.subDirs = this.getSubDirs();
        this.files = this.getFiles();
    }


    getSubDirs() {
        return fs.readdirSync(this.dir);
    }

    getFiles() {
        let fns = [];
        this.subDirs.forEach( subDir => {
            fns.push(...fs.readdirSync(this.dir + '/' + subDir));
        });
        return fns;
    }
}

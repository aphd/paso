import parse from "solidity-parser-antlr/dist";

export function parseSol(code) {
    const ast_j = parse.parse(code, { loc: true });
    const ast_s = JSON.stringify(ast_j);
    window.ast_j = parse.parse(code, { loc: true });

    const metrics = {
        mapping: '"type":"Mapping"',
        functions: '"type":"FunctionDefinition"',
        payable: '"stateMutability":"payable"'
    };

    let result = {};
    result.version = get_version(ast_s);
    result.loc = ast_j.loc.end.line;
    for (const metric in metrics) {
        let reg = metrics[metric];
        result[metric] = (ast_s.match(new RegExp(reg, "g")) || []).length;
    }

    console.log(result);
    return result;
}

const get_version = ast_s => {
    let version = ast_s.match(
        /"name":"solidity","value":"\^(\d{1,}.\d{1,}.\d{1,})/
    );
    return version ? version[1] : version;
};

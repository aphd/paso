import parse from "solidity-parser-antlr/dist";

export function parseSol(code) {
    const root = parse.parse(code, { loc: true });
    const types = root.children
        .slice(1)
        .map(v => v.subNodes.map(w => w.type))
        .flat();
    return {
        types: get_occurrences(types),
        LOC: root.loc.end.line,
        Version: root.children[0].value
    };
}

const get_occurrences = array => {
    const tmp_o = {};
    array.forEach(v => (tmp_o[v] ? tmp_o[v]++ : (tmp_o[v] = 1)));
    return tmp_o;
};

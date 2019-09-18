import parse from "solidity-parser-antlr/dist";

export function parseSol(code) {
    const root = parse.parse(code, { loc: true });
    const children = root.children;
    let version = root.children[0].value;
    window.root = root;
    if (version) children.splice(0, 1);

    const types = children.map(v => v.subNodes.map(w => w.type)).flat();
    return {
        types: get_occurrences(types),
        LOC: root.loc.end.line,
        Version: version
    };
}

const get_occurrences = array => {
    const tmp_o = {};
    array.forEach(v => (tmp_o[v] ? tmp_o[v]++ : (tmp_o[v] = 1)));
    return tmp_o;
};

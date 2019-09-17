import parse from "solidity-parser-antlr/dist";

export function parseSol(code) {
    console.log(parse.parse(code));
}

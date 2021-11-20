import React, { Component } from "react";
const copyCodeToClipboard = () => {
    const el = document.getElementById("bibtex");
    el.select();
    document.execCommand("copy")
}
const textValue = '@INPROCEEDINGS{9050263, \n  author={Pierro, G. A. and Tonelli, R.},\n  booktitle={2020 IEEE International Workshop on Blockchain Oriented Software Engineering (IWBOSE)}, \n  title={PASO: A Web-Based Parser for Solidity Language Analysis}, \n  year={2020},\n  pages={16-21},\n  doi={10.1109/IWBOSE50093.2020.9050263}\n }';

class Bibtex extends Component {
    render = () => {
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <div className="font-weight-lighter font-italic pt-1 fs4">If you find this tool helpful, please consider to cite this paper. <button className="btn btn-sm btn-outline-success" onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea id="bibtex" className="mt-2 form-control font-weight-light form-control-sm"
                        rows="7" defaultValue={textValue}>
                    </textarea>
                </div></div>
        )
    };
}

export default Bibtex;

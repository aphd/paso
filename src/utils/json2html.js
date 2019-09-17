import React from "react";

export function json2html(types) {
    const items = [];
    Object.keys(types).map((v, i) =>
        items.push(
            <tr key={i}>
                <th>{v}</th>
                <td>{types[v]}</td>
            </tr>
        )
    );
    return items;
};

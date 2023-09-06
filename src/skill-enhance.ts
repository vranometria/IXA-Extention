import { BusyoRow } from "./classes/busyo-row";
import { scrollToBottom, controlPanel } from "./index";

let busyoRows = [];

const reloadBusyoRows = () => {
    let divs = Array.from(document.getElementsByClassName('tr_gradient'));
    busyoRows = divs.filter( (x) => x.getElementsByClassName('new_union_busho_name').length>0 ).map( (div) => new BusyoRow(div) );
}

document.addEventListener('scroll', () => {
    reloadBusyoRows();
});


window.addEventListener('load', () => {
    reloadBusyoRows();

    // 素材10セットボタン
    let b = document.createElement('button');
    b.innerText = '素材10セット';
    b.onclick = () => {
        reloadBusyoRows();
        busyoRows.filter( (x) => x.isSelectable() ).slice(0, 10).forEach( (x) => { x.setButton.click(); });
        scrollToBottom();
    };
    controlPanel.appendChild(b);
});
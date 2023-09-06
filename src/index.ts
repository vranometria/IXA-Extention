export const scrollToBottom = () => {
    let elm = document.documentElement;

    // scrollHeight ページの高さ clientHeight ブラウザの高さ
    let bottom = elm.scrollHeight - elm.clientHeight;

    // 垂直方向へ移動
    window.scroll(0, bottom);
};

export const scrollToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'});
}

export let controlPanel = null;

window.addEventListener( 'load', () => {
    let div = document.getElementById('wrapper_side');

    // 操作盤
    let p = document.createElement('div');
    p.id = "control-panel";
    p.style.width = "300px";
    p.style.height = "300px";
    p.style.position = "fixed";
    p.style.bottom = '0';
    p.style.right = '0';
    p.style.display = 'grid';
    p.style.gridTemplateColumns = '1fr 1fr 1fr';
    p.style.gridTemplateRows = '100px 100px 100px';
    p.style.backgroundColor = 'white';
    p.style.float = 'right';
    div.appendChild(p);

    let ub = document.createElement('button');
    ub.innerText = '最上部';
    ub.onclick = () => { scrollToTop(); };

    let db = document.createElement('button');
    db.innerText = '最下部';
    db.onclick = () => { scrollToBottom(); };

    p.appendChild(ub);
    p.appendChild(db);
    controlPanel = p;
});

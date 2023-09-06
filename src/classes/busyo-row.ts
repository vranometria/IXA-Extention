export class BusyoRow {

    div:Element;
    setButton:HTMLDivElement;
    unsetButton:HTMLDivElement;

    constructor(div:Element){
        this.div = div;
        // セットボタン
        this.setButton = this.div.getElementsByClassName('card_set_btn_img')[0] as HTMLDivElement;
        // 解除ボタン
        this.unsetButton = this.div.getElementsByClassName('card_unset_btn_img')[0] as HTMLDivElement;
    }

    // セットボタンが押せる状態
    isSelectable = () => this.unsetButton.style.display === 'none';
}
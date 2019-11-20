// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const ROWS = 3;  // 行数
const NUMBERS = [2, 4];  // 随机生成的数字
const MIN_LENGTH = 50;  // 最起码拖动的长度
const MOVE_DURATION = 0.1;  // 移动的时长
cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab,
        gap: 100,
        bg: cc.Node,
    },

  

    start () {
        this.drawBgBlocks();
    },
    drawBgBlocks() {
        this.blockSize = (cc.winSize.width - this.gap * (ROWS + 1)) / ROWS;
        let x = this.gap + this.blockSize / 2;
        console.log(x,this.blockSize)
        let y = cc.winSize.height/3
        this.positions = [];
        for (let i = 0; i < ROWS; ++i) {
            this.positions.push([0, 0, 0, 0]);
            for (let j = 0; j < ROWS; ++j) {
                let block = cc.instantiate(this.blockPrefab);
                block.width = this.blockSize;
                block.height = this.blockSize;
                this.bg.addChild(block);
                block.setPosition(cc.v2(x, y));
                this.positions[i][j] = cc.v2(x, y);
                x += this.gap + this.blockSize;
                // block.getComponent('block').setNumber(0);
            }
            y += this.gap + this.blockSize;
            x = this.gap + this.blockSize / 2;
        }
    },

    // update (dt) {},
});

let f = "";
class praiseButton {
    constructor(num, ele) {
        this.num = num;
        this.ele = ele;

    }
    clickAction() {
        this.ele.on('click', () => {
        	if(f){
        		clearTimeout(f);
        	}
            f = setTimeout(() => {
                if (this.num < 10) {
                    this.num = add(this.num);
                    this.ele.css('backgroundColor', '#f8c8ab');
                    axios.get('/index/update')
                        .then(function(res) {
                            console.log(res);
                        })
                        .catch(function(error) {
                            console.log(error);
                        })
                } else {
                    this.ele.css('backgroundColor', 'gray');
                    this.num = 0;
                }
                console.log(this.num);
            },800);
        })
    }
}
class Thumb extends praiseButton {
    constructor(num, ele) {
        super(num, ele);
    }
}
export default { Thumb }
import PraiseButton from './index.es';
const f=new PraiseButton();
xtag.register('x-praise', {
    content: '<div class="box-warp">'+
    '<div>'+
    '</div>'+
    '<div class="fingerAll">'+
       ' <div class="fingerTwo">'+
            '<div class="fingerBig" id="fingerBig">'+
            '</div>'+
        '</div>'+
        '<div class="fingerThree"></div>'+
        '<div class="fingerFour"></div>'+
        '<div class="fingerFive"></div>'+
    '</div>'+
'</div>',
    methods: {
        praise:function(){
            f.clickAction();
        }
    },
    events: {
        click:function(e){
            let _this=this;
            _this.num=0;
            if(e.target.id=="fingerBig"){
                if(t){
                    clearTimeout(t);
                }
                t=setTimeout(()=>{
                    _this.num++;
                    console.log(_this.num);
                    _this.praise();
                },800);
            }
        }
    }
});
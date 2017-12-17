import {Star} from './index.es';
const f = new Star();
xtag.register('x-star', {
    content: '<div class="star" id="star">' +
        '<div class="star1"></div>' +
        '五角星'+
        '</div>' +
        '<div id="animation" class="animation">+1</div>',
    methods: {
        praise: function() {
            let _this = this;
            f.clickAction();
            let animation = _this.querySelector("#animation");
            animation.className = "num";
            setTimeout(function() {
                animation.className = "";
            }, 1000);
        }
    },
    events: {
        click: function(e) {
            let _this = this;
            if (e.target.id == "star") {
                if (t) {
                    clearTimeout(t);
                }
                var t = setTimeout(() => {
                    _this.praise();
                }, 500)
            }
        }
    }
});
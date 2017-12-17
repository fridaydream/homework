import {Thumb} from './index.es';
const f = new Thumb();
xtag.register('x-praise', {
    content: '<div class="hand" id="hand">' +
        '<div class="finger"></div>' +
        '<div class="thumb" id="thumb"></div>' +
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
            if (e.target.id == "hand") {
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
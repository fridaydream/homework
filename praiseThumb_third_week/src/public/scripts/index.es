import css from "../styles/index.css"
let f = "";
class praiseButton {
    constructor(num, ele) {
      
    }
    clickAction() {
       axios.get('/index/update')
            .then(function(res) {
                console.log(res);
            })
            .catch(function(error) {
                console.log(error);
            })
    }
}

export default { praiseButton }
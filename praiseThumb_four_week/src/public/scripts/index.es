import css from '../css/index.css';
class PraiseButton {
    clickAction() {
        axios.get('/index/update')
            .then(function(res){
                console.log(res);
            })
            .catch(function(error){
                console.log(error);
            })
    }
}
class Thumb extends PraiseButton{
	constructor(){
		super();
	}
}
class Star extends PraiseButton{
	constructor(){
		super();
	}
}
export {Thumb,Star};
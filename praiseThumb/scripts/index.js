class praiseButton{
	constructor(num,ele){
		this.num=num;
		this.ele=ele;

	}
	clickAction(){
		this.ele.on('click',()=>{
			if(this.num<10){
				this.num=add(this.num);
				this.ele.css('backgroundColor','#f8c8ab');
			}else{
				this.ele.css('backgroundColor','gray');
				this.num=0;
			}
			console.log(this.num);
		})
	}
}
class Thumb extends praiseButton{
	constructor(num,ele){
		super(num,ele);
	}
}
export default{Thumb}





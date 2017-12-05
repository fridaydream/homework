const _=require('./underscore.js');
console.log(_);
class praiseButton{
	constructor(num,ele){
		this.num=num;
		this.ele=ele;
	}
	clickAction(){
		this.ele.on('click',()=>{
			console.log('=======',_.throttle);
			setTimeout(()=>{
				console.log('_____');
				$.ajax({
					url:'/index/index',
					type:'post',
					dataType:'json',
					success:function(data){
						if(this.num<10){
							this.num=add(this.num);
							this.ele.css('backgroundColor','#f8c8ab');
						}else{
							this.ele.css('backgroundColor','gray');
							this.num=0;
						}
						console.log(this.num);
					}
				})
			},1000);
		});
	}
}
class Thumb extends praiseButton{
	constructor(num,ele){
		super(num,ele);
	}
}
export default{Thumb}





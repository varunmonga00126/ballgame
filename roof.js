class roof{
constructor(x,y,width,height){
this.body=bodies.rectangle(x,y,width,height,{isStatic:true});
this.width=width
this.height=height
World.add(World,this.body);

}

display(){
Push();
rectMode(CENTER);
fill(128,128,128);
rect(this.body.postion.x,this.body.position.y,this.width,this.height);
Pop();



}














}
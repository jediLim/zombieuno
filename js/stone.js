class Stone{
    constructor(x,y,w,h){
        var options ={resitiution:0.01}
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        
        World.add(world,this.body)

        
        



    }

show(){
  var position = this.body.position
  push()
  translate(position.x,position.y)
  fill('white')
  ellipse(0,0,this.w,this.h)
  pop()
  
}




}
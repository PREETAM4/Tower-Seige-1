class Polygon{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:2			
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}
	display(){			
			var polypos=this.body.position;		
			push();
			translate(polypos.x, polypos.y);
			rectMode(CENTER)
			fill(255,0,25)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
        	pop();
    }

} 
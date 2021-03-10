class Ball{
	constructor(x,y,r)
	{
		var options={
			
			restitution :0,
            friction :1,
            density:5
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(0)
		imageMode(CENTER);
		ellipseMode(CENTER);
		ellipse(0,0,this.r*2, this.r*2)
		pop()
 }
}
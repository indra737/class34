class Building{
    
        constructor(x,y,w,h)
        {
            var options={
                restitution :0,
                friction :1,
                }
            this.x=x;
            this.y=y;
            this.w=w;
            this.h=h;
            this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
            World.add(world, this.body);
        }
    
        display()
        {
            var pos=this.body.position;	
            push()
            translate(pos.x, pos.y);
            // rectMode(CENTER);
            rotate(this.body.angle)
            fill(255,255,120)
            imageMode(CENTER);
            rectMode(CENTER);
            noStroke()
            rect( 0,0,this.w, this.h)
            pop()
     }
    }


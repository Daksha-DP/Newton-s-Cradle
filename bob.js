class Bob {
    constructor(x,y,radius) {
        var opt = {
            'resitution':1,
            'isStatic': false,
            'density': 0.5
        }
        this.x = x;
        this.y = y;
        this.body - Bodies.circle(x,y,radius,opt);

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.positionl
        var angle = this.body.angle;
        push();
        translate(pos.y,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("lightblue");
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
}
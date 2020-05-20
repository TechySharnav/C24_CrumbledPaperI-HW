class PaperBall {
    constructor(x, y, radius) {

        var options = {
            restituiton: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill('#F5F5F5');
        circle(0, 0, this.radius * 2);
        pop()
    }
}


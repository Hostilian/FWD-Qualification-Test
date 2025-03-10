class Character {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.bodyType = 'circle'; // circle, square, triangle
        this.bodyColor = '#FF5733';
        this.bodySize = 100;
        this.expression = 'happy'; // happy, sad, surprised

        this.hasHat = false;
        this.hasArms = false;
        this.hasLegs = false;

        this.rotation = 0;
        this.rotationSpeed = 0;
        this.isAnimating = false;

        // 3D properties
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
        this.autoRotate = false;
    }

    setBodyType(type) {
        if (['circle', 'square', 'triangle'].includes(type)) {
            this.bodyType = type;
        }
    }

    setExpression(expression) {
        if (['happy', 'sad', 'surprised'].includes(expression)) {
            this.expression = expression;
        }
    }

    toggleFeature(feature) {
        if (feature === 'hat') this.hasHat = !this.hasHat;
        if (feature === 'arms') this.hasArms = !this.hasArms;
        if (feature === 'legs') this.hasLegs = !this.hasLegs;
    }

    startAnimation(speed) {
        this.isAnimating = true;
        this.rotationSpeed = speed / 100;
    }

    stopAnimation() {
        this.isAnimating = false;
        this.rotationSpeed = 0;
    }

    update() {
        if (this.isAnimating) {
            this.rotation += this.rotationSpeed;
        }

        if (this.autoRotate) {
            this.rotationY += 0.01;
        }
    }

    draw(p) {
        p.push();
        p.translate(this.x, this.y);
        p.rotate(this.rotation);

        // Draw body
        p.fill(this.bodyColor);
        p.stroke(0);
        p.strokeWeight(2);

        if (this.bodyType === 'circle') {
            p.ellipse(0, 0, this.bodySize, this.bodySize);
        } else if (this.bodyType === 'square') {
            p.rectMode(p.CENTER);
            p.rect(0, 0, this.bodySize, this.bodySize);
        } else if (this.bodyType === 'triangle') {
            p.triangle(
                0, -this.bodySize/2,
                -this.bodySize/2, this.bodySize/2,
                this.bodySize/2, this.bodySize/2
            );
        }

        // Draw face/expression
        const eyeSize = this.bodySize * 0.15;
        const eyeOffset = this.bodySize * 0.2;
        const mouthSize = this.bodySize * 0.4;

        // Eyes
        p.fill(255);
        p.ellipse(-eyeOffset, -eyeOffset * 0.5, eyeSize, eyeSize);
        p.ellipse(eyeOffset, -eyeOffset * 0.5, eyeSize, eyeSize);

        // Pupils
        p.fill(0);
        p.ellipse(-eyeOffset, -eyeOffset * 0.5, eyeSize * 0.5, eyeSize * 0.5);
        p.ellipse(eyeOffset, -eyeOffset * 0.5, eyeSize * 0.5, eyeSize * 0.5);

        // Mouth based on expression
        p.noFill();
        p.stroke(0);
        p.strokeWeight(2);

        if (this.expression === 'happy') {
            p.arc(0, eyeOffset * 0.8, mouthSize, mouthSize * 0.6, 0, p.PI);
        } else if (this.expression === 'sad') {
            p.arc(0, eyeOffset, mouthSize, mouthSize * 0.6, p.PI, p.TWO_PI);
        } else if (this.expression === 'surprised') {
            p.ellipse(0, eyeOffset * 0.8, mouthSize * 0.4, mouthSize * 0.4);
        }

        // Draw additional features
        if (this.hasHat) {
            this.drawHat(p);
        }

        if (this.hasArms) {
            this.drawArms(p);
        }

        if (this.hasLegs) {
            this.drawLegs(p);
        }

        p.pop();
    }

    drawHat(p) {
        p.fill(50);
        p.stroke(0);
        p.strokeWeight(2);

        const hatWidth = this.bodySize * 0.8;
        const hatHeight = this.bodySize * 0.4;

        // Hat brim
        p.ellipse(0, -this.bodySize/2 - hatHeight/4, hatWidth, hatHeight/2);

        // Hat top
        p.ellipse(0, -this.bodySize/2 - hatHeight, hatWidth * 0.7, hatHeight);
    }

    drawArms(p) {
        p.stroke(0);
        p.strokeWeight(4);

        const armLength = this.bodySize * 0.7;
        const armY = -this.bodySize * 0.1;

        // Left arm
        p.line(-this.bodySize/2, armY, -this.bodySize/2 - armLength, armY - armLength/2);

        // Right arm
        p.line(this.bodySize/2, armY, this.bodySize/2 + armLength, armY - armLength/2);
    }

    drawLegs(p) {
        p.stroke(0);
        p.strokeWeight(4);

        const legLength = this.bodySize * 0.6;

        // Left leg
        if (this.bodyType === 'triangle') {
            p.line(-this.bodySize/4, this.bodySize/2, -this.bodySize/4, this.bodySize/2 + legLength);
        } else {
            p.line(-this.bodySize/4, this.bodySize/2, -this.bodySize/4, this.bodySize/2 + legLength);
        }

        // Right leg
        if (this.bodyType === 'triangle') {
            p.line(this.bodySize/4, this.bodySize/2, this.bodySize/4, this.bodySize/2 + legLength);
        } else {
            p.line(this.bodySize/4, this.bodySize/2, this.bodySize/4, this.bodySize/2 + legLength);
        }
    }

    // 3D drawing approximation
    draw3D(p) {
        p.push();

        p.translate(this.x, this.y);
        p.rotateX(this.rotationX);
        p.rotateY(this.rotationY);
        p.rotateZ(this.rotationZ);

        // Basic 3D shape
        p.fill(this.bodyColor);
        p.stroke(0);
        p.strokeWeight(2);

        if (this.bodyType === 'circle') {
            p.sphere(this.bodySize/2);
        } else if (this.bodyType === 'square') {
            p.box(this.bodySize);
        } else if (this.bodyType === 'triangle') {
            // Approximate a pyramid
            p.cone(this.bodySize/2, this.bodySize);
        }

        // Simple face in 3D
        const eyeOffset = this.bodySize * 0.2;
        const eyeSize = this.bodySize * 0.1;

        // Eyes
        p.push();
        p.translate(eyeOffset, -eyeOffset * 0.5, this.bodySize/2 * 0.9);
        p.fill(255);
        p.sphere(eyeSize);

        p.translate(-eyeOffset * 2, 0, 0);
        p.sphere(eyeSize);
        p.pop();

        p.pop();
    }
}

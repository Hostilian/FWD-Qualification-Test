let character;
let currentTab = 'design';
let screenshotCounter = 1;

function setup() {
    const canvas = createCanvas(600, 400, WEBGL);
    canvas.parent('canvas-container');

    character = new Character();
    character.x = 0;
    character.y = 0;

    setupEventListeners();
}

function draw() {
    background(240);

    character.update();

    if (currentTab === 'design' || currentTab === 'animate') {
        ortho();
        character.draw(window);
    } else if (currentTab === '3d') {
        perspective();
        lights();
        character.draw3D(window);
    }
}

function setupEventListeners() {
    // Tab navigation
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            currentTab = tab.dataset.tab;

            // Hide all control panels
            document.getElementById('design-controls').style.display = 'none';
            document.getElementById('animate-controls').style.display = 'none';
            document.getElementById('3d-controls').style.display = 'none';

            // Show the selected control panel
            document.getElementById(`${currentTab}-controls`).style.display = 'block';

            // Reset character rotation when switching tabs
            if (currentTab !== 'animate') {
                character.stopAnimation();
                character.rotation = 0;
            }

            if (currentTab !== '3d') {
                character.autoRotate = false;
                character.rotationX = 0;
                character.rotationY = 0;
                character.rotationZ = 0;
            }
        });
    });

    // Shape buttons
    document.getElementById('circle-btn').addEventListener('click', () => {
        character.setBodyType('circle');
    });

    document.getElementById('square-btn').addEventListener('click', () => {
        character.setBodyType('square');
    });

    document.getElementById('triangle-btn').addEventListener('click', () => {
        character.setBodyType('triangle');
    });

    // Color picker
    document.getElementById('body-color').addEventListener('input', (e) => {
        character.bodyColor = e.target.value;
    });

    // Expression buttons
    document.getElementById('happy-btn').addEventListener('click', () => {
        character.setExpression('happy');
    });

    document.getElementById('sad-btn').addEventListener('click', () => {
        character.setExpression('sad');
    });

    document.getElementById('surprised-btn').addEventListener('click', () => {
        character.setExpression('surprised');
    });

    // Feature buttons
    document.getElementById('add-hat').addEventListener('click', () => {
        character.toggleFeature('hat');
    });

    document.getElementById('add-arms').addEventListener('click', () => {
        character.toggleFeature('arms');
    });

    document.getElementById('add-legs').addEventListener('click', () => {
        character.toggleFeature('legs');
    });

    // Reset button
    document.getElementById('reset').addEventListener('click', () => {
        character = new Character();
        character.x = 0;
        character.y = 0;
    });

    // Screenshot button
    document.getElementById('save').addEventListener('click', () => {
        saveCanvas(`character_design_${screenshotCounter}`, 'png');
        screenshotCounter++;
    });

    // Animation controls
    document.getElementById('start-animation').addEventListener('click', () => {
        const speed = document.getElementById('speed-slider').value;
        character.startAnimation(speed);
    });

    document.getElementById('stop-animation').addEventListener('click', () => {
        character.stopAnimation();
    });

    document.getElementById('speed-slider').addEventListener('input', (e) => {
        if (character.isAnimating) {
            character.startAnimation(e.target.value);
        }
    });

    // 3D controls
    document.getElementById('rotate-x').addEventListener('click', () => {
        character.rotationX += PI / 4;
    });

    document.getElementById('rotate-y').addEventListener('click', () => {
        character.rotationY += PI / 4;
    });

    document.getElementById('rotate-z').addEventListener('click', () => {
        character.rotationZ += PI / 4;
    });

    document.getElementById('auto-rotate').addEventListener('click', () => {
        character.autoRotate = !character.autoRotate;
    });
}

function keyPressed() {
    // Press 's' to save screenshot
    if (key === 's' || key === 'S') {
        saveCanvas(`character_design_${screenshotCounter}`, 'png');
        screenshotCounter++;
    }
}

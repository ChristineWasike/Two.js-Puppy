$(document).ready(function () {

    // START OF PUPPY
    var element = document.getElementById('doodle');
    var two = new Two({ fullscreen: false }).appendTo(element);

    var position = new Two.Vector(two.width / 2, two.height / 2);

    var head = two.makeCircle(position.x, position.y, 100);
    head.fill = "#52C5DC";
    head.noStroke();

    var nose;
    nose = two.makeCircle(position.x, position.y + 30, 32);
    nose.fill = "#EFB8D2";
    nose.noStroke();

    // Left side of head
    var eyeLeft;
    eyeLeft = two.makeCircle(position.x + 42, position.y - 26, 32);
    eyeLeft.fill = "#FFFFFF";
    eyeLeft.noStroke();

    var pupilLeft;
    pupilLeft = two.makeCircle(position.x + 42, position.y - 26, 20);
    pupilLeft.fill = "#7FC35E";
    pupilLeft.noStroke();

    var earLeft;
    earLeft = two.makeEllipse(position.x - 100, position.y - 80, 26, 46);
    earLeft.fill = "#52C5DC";
    earLeft.noStroke();
    earLeft.rotation = Math.PI / 4;

    //Right side of head

    var eyeRight;
    eyeRight = two.makeCircle(position.x - 42, position.y - 26, 32);
    eyeRight.fill = "#FFFFFF";
    eyeRight.noStroke();

    var pupilRight;
    pupilRight = two.makeCircle(position.x - 42, position.y - 26, 20);
    pupilRight.fill = "#7FC35E";
    pupilRight.noStroke();

    var earRight;
    earRight = two.makeEllipse(position.x + 100, position.y - 80, 26, 46);
    earRight.fill = "#52C5DC";
    earRight.noStroke();
    earRight.rotation = - Math.PI / 4;


    // Lickity Split

    var tongue = two.makePolygon(0, 0, 100, 0, 100, 0, 90, 58, 50, 80, 10, 58, 0, 0);
    tongue.curved = true;
    tongue.fill = "#EE3E36";
    tongue.noStroke();
    tongue.translation.x = position.x - 40;
    tongue.translation.y = position.y + 86;
    tongue.scale = 0.4;
    tongue.rotation = Math.PI / 4;

    two.update();

    // END OF PUPPY

    //START OF CAT
    var secondElement = document.getElementById('secondDoodle');
    var secondTwo = new Two({ fullscreen: false }).appendTo(secondElement);

    var secondPosition = new Two.Vector(secondTwo.width / 2, secondTwo.height / 2);

    var catHead = secondTwo.makeCircle(secondPosition.x + 45, secondPosition.y, 100);
    catHead.fill = "#FFCE42";
    catHead.noStroke();

    var catNose;
    catNose = secondTwo.makeCircle(secondPosition.x + 45, secondPosition.y + 30, 32);
    catNose.fill = "#EFB8D2";
    catNose.noStroke();

    // Left side of head
    var catEyeLeft;
    catEyeLeft = secondTwo.makeCircle(secondPosition.x + 87, secondPosition.y - 26, 32);
    catEyeLeft.fill = "#FFFFFF";
    catEyeLeft.noStroke();

    var catPupilLeft;
    catPupilLeft = secondTwo.makeCircle(secondPosition.x + 78, secondPosition.y - 29, 20);
    catPupilLeft.fill = "#52C5DC"
    catPupilLeft.noStroke();

    // Cat left ear took so much time!
    var catEarLeft;
    catEarLeft = secondTwo.makePolygon(0, 40, 80, 0, 80, 0, 95, 50);
    catEarLeft.fill = "#FFCE42";
    catEarLeft.scale = 0.8;
    catEarLeft.translation.x = position.x + 115;
    catEarLeft.translation.y = position.y - 85;
    catEarLeft.rotation = Math.PI / 1.3;
    catEarLeft.noStroke();

    // Right side of head
    var catEyeRight;
    catEyeRight = secondTwo.makeCircle(secondPosition.x + 3, secondPosition.y - 26, 32);
    catEyeRight.fill = "#FFFFFF";
    catEyeRight.noStroke();

    var catPupilRight;
    catPupilRight = secondTwo.makeCircle(secondPosition.x - 6, secondPosition.y - 29, 20);
    catPupilRight.fill = "#52C5DC";
    catPupilRight.noStroke();

    var catEarRight;
    catEarRight = secondTwo.makePolygon(0, 40, 80, 0, 80, 0, 95, 50);
    catEarRight.fill = "#FFCE42";
    catEarRight.scale = 0.8;
    catEarRight.translation.x = position.x - 15;
    catEarRight.translation.y = position.y - 89;
    catEarRight.rotation = Math.PI / 2.5;
    catEarRight.noStroke();

    secondTwo.update();
    // END OF CAT
});
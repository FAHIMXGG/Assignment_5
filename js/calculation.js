//all important ID
// triangle-input-b
// triangle-input-h
// triangle-calculate

//rectangle-input-w
//rectangle-input-i
//rectangle-calculate

// parallelogram-input-b
// parallelogram-input-h
// parallelogram-calculate

// rhombus-input-d1
// rhombus-input-d2
// rhombus-calculate

// pentagon-input-p
// pentagon-input-b
// pentagon-calculate

// ellipse-input-a
// ellipse-input-b
// ellipse-calculate
// results


document.getElementById('triangle-calculate').addEventListener('click', function(){

    //input
    const triangleB = InputValue('triangle-input-b');
    const triangleH = InputValue('triangle-input-h');
    //validation
    if(isNaN(triangleB) || isNaN(triangleH)){
        alert('Input Valid Number');
        return;
    }

    if (triangleB < 0.001 || triangleH < 0.001) {
        alert('Input cannot be < 0.001');
        return;
    }
    // calculate
    const triangleTotal = (0.5 * triangleB * triangleH).toFixed(2);
    //append
    createResultListItem('Triangle', triangleTotal, 'cm', 'Convert to m<sup>2</sup>', function() {
        // Function to convert to square meters
      });


})
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    //input
    const rectangleW = InputValue('rectangle-input-w');
    const rectangleI = InputValue('rectangle-input-i');
    //validation
    if(isNaN(rectangleW) || isNaN(rectangleI)){
        alert('Input Valid Number');
        return;
    }

    if (rectangleW < 0.001 || rectangleI < 0.001) {
        alert('Input cannot be < 0.001');
        return;
    }
    //calculate
    const rectangleTotal = (rectangleW * rectangleI).toFixed(2);
    //console.log(rectangleTotal);
    //append
    createResultListItem('Rectangle', rectangleTotal, 'cm', 'Convert to m<sup>2</sup>', function() {
        // Function to convert to square meters
      });
    

})
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    //input
    const parallelogramB = InputValue('parallelogram-input-b');
    const parallelogramH = InputValue('parallelogram-input-h');
    //validation
    if(isNaN(parallelogramB) || isNaN(parallelogramH)){
        alert('Input Valid Number');
        return;
    }

    if (parallelogramB < 0.001 || parallelogramH < 0.001) {
        alert('Input cannot be < 0.001');
        return;
    }
    //calculation
    const parallelogramTotal = (parallelogramB * parallelogramH).toFixed(2);
    //console.log(parallelogramTotal);
    //append
    createResultListItem('Parallelogram', parallelogramTotal, 'cm', 'Convert to m<sup>2</sup>', function() {
        // Function to convert to square meters
      });

})
document.getElementById('rhombus-calculate').addEventListener('click', function(){
    const rhombusD1 = InputValue('rhombus-input-d1');
    const rhombusD2 = InputValue('rhombus-input-d2');

    if(isNaN(rhombusD1) || isNaN(rhombusD2)){
        alert('Input Valid Number');
        return;
    }

    if (rhombusD1 < 0.001 || rhombusD2 < 0.001) {
        alert('Input cannot be < 0.001');
        return;
    }
    const rhombusTotal = (0.5 * rhombusD1 * rhombusD2).toFixed(2);
    //console.log(rhombusTotal);
    
    createResultListItem('Rhombus', rhombusTotal, 'cm', 'Convert to m<sup>2</sup>', function() {
        // Function to convert to square meters
      });
   

})
document.getElementById('pentagon-calculate').addEventListener('click', function(){
    const pentagonP = InputValue('pentagon-input-p');
    const pentagonB = InputValue('pentagon-input-b');

    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert('Input Valid Number');
        return;
    }

    if (pentagonP < 0.001 || pentagonB < 0.001) {
        alert('Input cannot be < 0.001');
        return;
    }

    const pentagonTotal = (0.5 * pentagonP * pentagonB).toFixed(2);
    //console.log(pentagonTotal);
    createResultListItem('Pentagon', pentagonTotal, 'cm', 'Convert to m<sup>2</sup>', function() {
        // Function to convert to square meters
      });


})
document.getElementById('ellipse-calculate').addEventListener('click', function(){
    const ellipseA = InputValue('ellipse-input-a');
    const ellipseB = InputValue('ellipse-input-b');

    if(isNaN(ellipseA) || isNaN(ellipseB)){
        alert('Input Valid Number');
        return;
    }
    if (ellipseA < 0.001 || ellipseB < 0.001) {
        alert('Input cannot be < 0.001');
        return;
    }

    const ellipseTotal = (3.1416 * ellipseA * ellipseB).toFixed(2);
    //console.log(ellipseTotal);

    createResultListItem('Ellipse', ellipseTotal, 'cm', 'Convert to m<sup>2</sup>', function() {
        // Function to convert to square meters
      });

})




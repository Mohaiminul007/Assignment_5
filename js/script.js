
document.getElementById('btn-tr').addEventListener('click', function () {
    //triangle-base
    const triangleBaseField = document.getElementById('triangle-base-field');
    const baseValue = triangleBaseField.value;
    const base = parseFloat(baseValue);




    //triangle-height
    const heightField = document.getElementById('triangle-height-field')
    const heighValue = heightField.value;
    const hight = parseFloat(heighValue)

    const area = 0.5 * base * hight;


    const areaCalculate = area;
    const printAreaT = document.getElementById('triangle-cal')
    printAreaT.innerText = 'Traingle Area: ' + areaCalculate;
    console.log('Traingle Area:', areaCalculate)
})
//rectangle-height-field
document.getElementById('btn-rectangle').addEventListener('click', function () {

    const rectangleBaseField = document.getElementById('rectangle-base-field');
    const rectangleBaseString = rectangleBaseField.value;
    const rectangleBase = parseFloat(rectangleBaseString);


    //rectangle-height-field

    const rectangleHeightField = document.getElementById('rectangle-height-field')
    const rectangleHeightString = rectangleHeightField.value;
    const rectangleHeight = parseFloat(rectangleHeightString);

    const rectangleAns = rectangleBase * rectangleHeight
    // console.log(rectangleAns)


    
    const printAreaR = document.getElementById('rectangle-caluc')
    printAreaR.innerText = "rectangle area :"+ rectangleAns;


})
//parallelogram-heitht-field
document.getElementById('parallelogram-btn').addEventListener('click',function(){

    const parallelogramBaseField = document.getElementById('parallelogram-base-field');
    const parallelogramBaseString = parallelogramBaseField.value;
    const parallelogramBase = parseFloat(parallelogramBaseString);
     
    // console.log(parallelogramBase)

    //parallelogram-heitht-field

    const parallelogramHeithtField = document.getElementById('parallelogram-heitht-field');
    const parallelogramHeithtString = parallelogramHeithtField.value;
    const parallelogramHeitht = parseFloat(parallelogramHeithtString)
    

    const parallelogramAns = parallelogramBase * parallelogramHeitht;




    const printAreaP = document.getElementById('parallelogram-calcu')
    printAreaP.innerText = 'parallelogram area:'+ parallelogramAns;

})

//Rhombus
document.getElementById('rhombus-btn').addEventListener('click',function(){

    const rhombusBaseField = document.getElementById('rhombus-base-field');
    const rhombusBaseString = rhombusBaseField.value;
    const rhombusBase = parseFloat(rhombusBaseString);
     


    //rhombus-height-field

    const rhombusHeithtField = document.getElementById('rhombus-height-field');
    const rhombusHeithtString = rhombusHeithtField.value;
    const rhombusHeitht = parseFloat(rhombusHeithtString)
    

    const rhombusAns =0.5* rhombusBase * rhombusHeitht;




    const printAreaR = document.getElementById('rhombus-calcu')
    printAreaR.innerText = 'rhombus area:'+ rhombusAns;


})

document.getElementById('pentagon-btn').addEventListener('click',function(){

    const pentagonBaseField = document.getElementById('pentagon-base-field');
    const pentagonBaseString = pentagonBaseField.value;
    const pentagonBase = parseFloat(pentagonBaseString);
     


    //rhombus-height-field

    const pentagonHeithtField = document.getElementById('pentagon-height-field');
    const pentagonHeithtString = pentagonHeithtField.value;
    const pentagonHeitht = parseFloat(pentagonHeithtString)
    

    const pentagonAns =0.5* pentagonBase * pentagonHeitht;




    const printAreaP = document.getElementById('pentagon-calcu')
    printAreaP.innerText = 'pentagon area:'+ pentagonAns;

})
document.getElementById('ellipse-btn').addEventListener('click',function(){

    const ellipseBaseField = document.getElementById('ellipse-base-field');
    const ellipseBaseString = ellipseBaseField.value;
    const ellipseBase = parseFloat(ellipseBaseString);
     


    //rhombus-height-field

    const ellipseHeithtField = document.getElementById('ellipse-Height-field');
    const ellipseHeithtString = ellipseHeithtField.value;
    const ellipseHeitht = parseFloat(ellipseHeithtString)
    

    const ellipseAns =3.14* ellipseBase * ellipseHeitht;




    const printAreaE = document.getElementById('ellipse-calcu')
    printAreaE.innerText = 'ellipse area:'+ ellipseAns;

})

function BMICalculator(){
  this.metric_bmi = function (object) {
    const weight = object.weight;
    const height = object.height;
    if (weight > 0 && height > 0) {
        const finalBmi = weight / (height / 100 * height / 100);
        object.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(object)
    }

 }
};

function setBMIMessage (obj){
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
      obj.bmiMessage = "Healthy"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
      obj.bmiMessage = "Overweight"
    }
    if (obj.bmiValue > 30) {
      obj.bmiMessage = "Obese"
    }
  }

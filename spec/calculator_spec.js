const { Person, BMICalculator } = require('./spec.helper')

describe("BMICalculator", function() {
  let bmi_calculator;
  let person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    bmi_calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    bmi_calculator.metric_bmi(person);
    expect(person.bmiValue).to.equal(26.01);
  });

});
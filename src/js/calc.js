const form = document.querySelector('.sign-in-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting

    const inputs = form.querySelectorAll('input');
    const grades = [];

    for (let i = 0; i < inputs.length; i++) {
        grades.push(parseFloat(inputs[i].value));
    }

    const finalGradeElem = document.getElementById('final-grade');
    const finalGrade = calculateGrade(grades);

    console.log(`The final grade is: ${finalGrade}`);
    finalGradeElem.textContent = `The final grade is: ${finalGrade}`;
});

function calculateGrade(grades) {
    return (
        (grades[0] / 100 * 0.06) +
        (grades[1] / 100 * 0.07) +
        (grades[2] / 50 * 0.07) +
        (grades[3] / 30 * 0.15) +
        (grades[4] / 65 * 0.15)
    ) * 50;
}
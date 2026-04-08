const weeklyPlan = [
    { day: "Monday", workout: "Push-ups" },
    { day: "Wednesday", workout: "Squats" },
    { day: "Friday", workout: "Plank" }
];

function loadPlan() {
    const plan = document.getElementById("plan");

    const output = weeklyPlan.map(item =>
        `<div class="card">
            <h3>${item.day}</h3>
            <p>${item.workout}</p>
        </div>`
    ).join("");

    plan.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bmiForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const weight = document.getElementById("weight").value;
            const height = document.getElementById("height").value;

            const bmi = weight / (height * height);

            let status;

            if (bmi < 18.5) status = "Underweight";
            else if (bmi < 25) status = "Normal";
            else status = "Overweight";

            const result = `BMI: ${bmi.toFixed(2)} (${status})`;

            document.getElementById("result").textContent = result;

            localStorage.setItem("bmi", result);
        });
    }

    const saved = localStorage.getItem("bmi");
    if (saved && document.getElementById("result")) {
        document.getElementById("result").textContent = saved;
    }
});
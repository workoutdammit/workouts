// script.js

const workouts = [
  { name: "Jumping jacks", tip: "Great for warming up and increasing heart rate." },
  { name: "Dynamic stretching", tip: "Prepares your muscles and joints for activity." },
  { name: "Push-ups", tip: "Excellent upper body and core strength exercise." },
  { name: "Dumbbell bicep curls", tip: "Targets your biceps effectively with weights." },
  { name: "Tricep dips", tip: "Strengthens the triceps and shoulder stability." },
  { name: "Squats", tip: "A powerful lower body compound movement." },
  { name: "Lunges", tip: "Improves balance and works quads and glutes." },
  { name: "Calf raises", tip: "Isolates and tones the calf muscles." },
  { name: "Plank", tip: "Great for core strength and stability." },
  { name: "Russian twists", tip: "Engages the obliques for core rotation." },
  { name: "Leg raises", tip: "Targets the lower abdominal muscles." },
  { name: "Classic crunches", tip: "Basic yet effective abdominal workout." },
  { name: "Bicycle crunches", tip: "Engages entire core with added twist." },
  { name: "Reverse crunches", tip: "Focuses on lower abs with a curl up motion." },
  { name: "Hanging leg raises", tip: "Intensely works the lower abs and hip flexors." },
  { name: "Flutter kicks", tip: "A dynamic move for lower abs and endurance." }
];

const list = document.getElementById("workout-list");
const gifTitle = document.getElementById("gif-title");
const gifDisplay = document.getElementById("gif-display");
const tipText = document.getElementById("tip-text");
const gifViewer = document.getElementById("gif-viewer");

document.addEventListener("DOMContentLoaded", () => {
  workouts.forEach(workout => {
    const li = document.createElement("li");
    li.textContent = workout.name;
    li.addEventListener("click", () => showGif(workout));
    list.appendChild(li);
  });
});

function showGif(workout) {
  const filename = workout.name.toLowerCase().replace(/ /g, "-") + ".gif";
  gifTitle.textContent = workout.name;
  gifDisplay.src = "gifs/" + filename;
  tipText.textContent = workout.tip;
  gifViewer.classList.remove("hidden");
}

function closeViewer() {
  gifViewer.classList.add("hidden");
  gifDisplay.src = "";
  gifTitle.textContent = "Workout Name";
  tipText.textContent = "";
}

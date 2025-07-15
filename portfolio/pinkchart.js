document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("pinkChart")?.getContext("2d"); // Updated ID

    if (!ctx) {
        console.error("Pink Chart canvas not found!");
        return;
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#ff00ff");
    gradient.addColorStop(1, "#ff007f");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["", "", "", "", "", "", "", "", "", ""],
            datasets: [{
                label: "Clicks",
                data: [5, 10, 15, 22, 30, 38, 50, 60, 75, 90],
                backgroundColor: gradient,
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { display: false },
                x: { display: false }
            },
            plugins: { legend: { display: false } },
            animation: {
                duration: 2000,
                easing: "easeInOutQuart"
            }
        }
    });
});

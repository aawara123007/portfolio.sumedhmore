document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("yellowChart")?.getContext("2d");
  
    if (!ctx) {
      console.error("Yellow Chart canvas not found!");
      return;
    }
  
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(255, 204, 0, 0.8)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
          label: "Accounts",
          data: [100, 120, 80, 160, 90, 150, 130, 180, 140, 70],
          backgroundColor: gradient,
          borderColor: "#ffcc00",
          fill: true,
          borderWidth: 4,
          pointRadius: 0,
          tension: 0.4
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
          duration: 200,
          easing: "easeInOutQuart"
        }
      }
    });
  });
  
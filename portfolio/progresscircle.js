const attackData = [
    { year: 2010, percent: 40 },
    { year: 2011, percent: 45 },
    { year: 2012, percent: 50 },
    { year: 2013, percent: 55 },
    { year: 2014, percent: 60 },
    { year: 2015, percent: 65 },
    { year: 2016, percent: 70 },
    { year: 2017, percent: 75 },
    { year: 2018, percent: 80 },
    { year: 2019, percent: 85 },
    { year: 2020, percent: 90 },
    { year: 2021, percent: 92 },
    { year: 2022, percent: 93 },
    { year: 2023, percent: 95 },
    { year: 2024, percent: 96 },
    { year: 2025, percent: 97 }
  ];
  
  const container = document.getElementById('progressCircleContainer');
  
  // Generate progress circles dynamically
  attackData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'col-md-2 risk-card';
  
    card.innerHTML = `
      <div class="progress-circle" style="--percent: ${data.percent};">
        <div class="percent">${data.percent}%</div>
      </div>
      <div class="risk-label">${data.year}</div>
    `;
  
    container.appendChild(card);
  });
  
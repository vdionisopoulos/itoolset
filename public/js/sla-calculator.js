document.addEventListener("DOMContentLoaded", function () {
  const uptimeInput = document.getElementById('uptime');
  const resultsBox = document.getElementById('results');

  function calculateDowntime(uptime, days) {
    const totalMinutes = days * 24 * 60;
    const downtime = totalMinutes * ((100 - uptime) / 100);
    const hours = Math.floor(downtime / 60);
    const minutes = Math.round(downtime % 60);
    return `${hours}h ${minutes}m`;
  }

  function updateResults() {
    const uptime = parseFloat(uptimeInput.value);
    if (!uptime || uptime < 90 || uptime > 100) {
      resultsBox.style.display = 'none';
      return;
    }

    function setRow(days, totalId, avgId) {
      const total = calculateDowntime(uptime, days);
      const avg = calculateDowntime(uptime, 1);
      document.getElementById(totalId).textContent = total;
      document.getElementById(avgId).textContent = avg;
    }

    setRow(1, 'dayResult', 'dayAvg');
    setRow(30.4375, 'monthResult', 'monthAvg');
    setRow(91.3125, 'quarterResult', 'quarterAvg');
    setRow(365.25, 'yearResult', 'yearAvg');

    resultsBox.style.display = 'flex';
  }

  uptimeInput.addEventListener('input', updateResults);
  updateResults();
});

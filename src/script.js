function createChart(ctxId, type, labels, data, colors, labelText) {
  return new Chart(document.getElementById(ctxId), {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: labelText,
        data: data,
        backgroundColor: colors
      }]
    }
  });
}

createChart('expenseChart', 'bar', ["Week 1", "Week 2", "Week 3", "Week 4"], [150, 200, 120, 180], '#3498db', 'Monthly Expenses');
createChart('weeklyChart', 'line', ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], [30, 45, 25, 50, 40, 20, 35], '#9b59b6', 'Weekly Expenses');
createChart('categoryChart', 'pie', ["Food", "Transport", "Rent"], [300, 150, 450], ['#e67e22', '#2ecc71', '#e74c3c'], 'Category-wise');
createChart('reportChart', 'doughnut', ["Savings", "Expenses"], [600, 400], ['#1abc9c', '#c0392b'], 'Monthly Report');

function filterExpenses(type) {
  alert(`Filtering by ${type}...`);
}

function filterCategory(category) {
  alert(`Filtering by category: ${category}`);
}

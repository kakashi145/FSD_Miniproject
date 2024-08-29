// Salary Component Chart
const salaryCtx = document.getElementById('salaryChart').getContext('2d');
const salaryChart = new Chart(salaryCtx, {
    type: 'pie',
    data: {
        labels: ['Basic salary', 'HRA', 'DA', 'TA'],
        datasets: [{
            data: [60, 20, 10, 10],
            backgroundColor: ['#4caf50', '#2196f3', '#ffeb3b', '#f44336']
        }]
    }
});

// Employee Composition Chart
const compositionCtx = document.getElementById('compositionChart').getContext('2d');
const compositionChart = new Chart(compositionCtx, {
    type: 'doughnut',
    data: {
        labels: ['Female', 'Male'],
        datasets: [{
            data: [35, 65],
            backgroundColor: ['#ff6384', '#36a2eb']
        }]
    }
});

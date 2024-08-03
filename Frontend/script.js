document.addEventListener('DOMContentLoaded', (event) => {
    //  skills chart
    const ctx = document.getElementById('skillsChart').getContext('2d');
     new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Java', 'HTML', 'CSS', 'JavaScript', 'React', 'ExpressJs', 'NodeJs', 'MongoDB'],
            datasets: [{
                label: 'Proficiency (%)',
                data: [70, 82, 76, 73, 68, 80, 87, 92] ,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#4BC0C0', '#9966FF'],
                borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#4BC0C0', '#9966FF'],
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            display : false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
            }
        }
    });


document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:3000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message.');
    }
});
});

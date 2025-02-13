document.getElementById('fertilizerForm').addEventListener('submit', function(event) {  
    event.preventDefault();  

    const location = document.getElementById('location').value;  
    const cropType = document.getElementById('cropType').value;  

    // Simulated fertilizer recommendation logic  
    let recommendation = '';  
    let imagePath = 'D:\projects\images'; // Add a variable to hold the image path

    if (cropType === 'Wheat') {  
        recommendation = 'Recommended Fertilizer: NPK 20-10-10';  
        imagePath = 'images/Wheat.jpg'; // Path to the Wheat image
    } else if (cropType === 'Rice') {  
        recommendation = 'Recommended Fertilizer: NPK 15-15-15';  
        imagePath = 'images/rice.jpg'; // Path to the Rice image
    } else if (cropType === 'Corn') {  
        recommendation = 'Recommended Fertilizer: NPK 30-10-10';  
        imagePath = 'images/Corn.jpg'; // Path to the Corn image (placeholder)
    } else if (cropType === 'Soybean') {  
        recommendation = 'Recommended Fertilizer: NPK 10-20-10';  
        imagePath = 'images/Soybean.jpg'; // Path to the Soybean image
    }  else if (cropType === 'Barley') {  
        recommendation = 'Recommended Fertilizer: NPK 20-10-10';  
        imagePath = 'images/Barley.jpg'; // Path to the Soybean image
    }  else if (cropType === 'Millet') {  
        recommendation = 'Recommended Fertilizer: NPK 30-15-10';  
        imagePath = 'images/Millet.jpg'; // Path to the Soybean image
    } else {  
        recommendation = 'Please select a valid crop type.';  
    }  

    // Display the result along with the image
    if (imagePath !== '') {
        document.getElementById('result').innerHTML = `  
            <h2>Fertilizer Recommendation for ${cropType} in ${location}:</h2>  
            <p>${recommendation}</p>  
            <img src="${imagePath}" alt="${cropType}" style="max-width: 200px; height: auto;"/>  
        `;  
    } else {
        document.getElementById('result').innerHTML = `  
            <h2>${recommendation}</h2>  
        `;
    }
});

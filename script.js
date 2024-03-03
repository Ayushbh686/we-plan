function planTrip() {
    const destination = document.getElementById("destination").value;
    const days = document.getElementById("days").value;
    const budget = document.getElementById("budget").value;
  
    // Here, you can implement logic to generate the itinerary
    const itineraryDetails = `Destination: ${destination}<br>Days: ${days}<br>Budget: ${budget}`;
  
    // Display the itinerary
    document.getElementById("itineraryDetails").innerHTML = itineraryDetails;
    document.getElementById("itinerarySection").style.display = "block";
  }
  
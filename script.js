function calculateBulkTimeDifference() {
  const timePairsInput = document.getElementById("time-pairs");
  const resultElement = document.getElementById("result");

  const timePairs = timePairsInput.value.trim().split("\n");
  if (timePairs.length < 2) {
    resultElement.textContent =
      "Please enter at least two time pairs, one per line.";
    return;
  }

  let result = "";
  for (let i = 0; i < timePairs.length - 1; i++) {
    const startTime = timePairs[i].trim();
    const endTime = timePairs[i + 1].trim();

    // Convert start and end time to Date objects
    const startDate = new Date(`1970-01-01 ${startTime}`);
    const endDate = new Date(`1970-01-01 ${endTime}`);

    // Calculate the time difference in milliseconds
    let diff = endDate.getTime() - startDate.getTime();

    // Convert the time difference to hours and minutes
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Format the result as "hh:mm"
    let timeDifference = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    result += `${startTime} - ${endTime}: ${timeDifference}\n`;
  }

  resultElement.textContent = result;
}

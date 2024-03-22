const getEvents = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/events', { // Update the URL to match your API endpoint
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Assuming your API returns an object with an 'authentication' field
    // indicating the user's authentication level or a similar mechanism.
    console.log(data.response)
    return data.response
  } catch (error) {
    console.error("Failed to get events:", error);
    throw error; // Re-throw to be caught by the caller
  }
};

export default getEvents;
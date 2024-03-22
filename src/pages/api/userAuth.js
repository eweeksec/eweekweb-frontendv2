const authenticateUser = async (username, password) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/login', { // Update the URL to match your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
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
    console.error("Failed to login:", error);
    throw error; // Re-throw to be caught by the caller
  }
};

export default authenticateUser;
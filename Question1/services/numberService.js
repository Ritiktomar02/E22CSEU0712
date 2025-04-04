const axios = require('axios');
const { updateWindow, getWindow } = require('../utils/windowManager');

// Map of type codes to endpoint names
const API_MAP = {
  p: 'primes',
  f: 'fibo',
  e: 'even',
  r: 'rand'
};

const BASE_URL = 'http://20.244.56.144/evaluation-service';

// Main function to get numbers based on type
async function getNumbers(type) {
  console.log(`[getNumbers] Type received: "${type}"`);

  const endpoint = API_MAP[type?.toLowerCase()];
  if (!endpoint) {
    console.error(`❌ Invalid type: "${type}". Must be one of: ${Object.keys(API_MAP).join(', ')}`);
    return {
      error: "Invalid type",
      windowPrevState: [],
      windowCurrState: [],
      numbers: [],
      avg: 0
    };
  }

  const url = `${BASE_URL}/${endpoint}`;
  console.log("✅ Final URL:", url);

  let numbers = [];
  const prevWindow = getWindow();

  try {
    const response = await axios.get(url, {
      timeout: 500,
      headers: {
        Authorization: process.env.ACCESS_TOKEN
      }
    });

    numbers = response.data.numbers || [];
    console.log("📥 Numbers received:", numbers);
  } catch (error) {
    console.error(`⚠️ Error fetching numbers from ${url}: ${error.message}`);
  }

  const updatedWindow = updateWindow(numbers);
  const avg = updatedWindow.length === 0
    ? 0
    : +(updatedWindow.reduce((a, b) => a + b, 0) / updatedWindow.length).toFixed(2);

  return {
    windowPrevState: prevWindow,
    windowCurrState: updatedWindow,
    numbers,
    avg
  };
}

// ✅ Export all functions
module.exports = {
  getNumbers,
  updateWindow,
  getWindow
};

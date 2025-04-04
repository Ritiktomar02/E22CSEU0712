# 🔢 Number Evaluation Service

This Node.js-based backend project fetches numbers from an external API (primes, Fibonacci, even, or random), maintains a sliding window of the last 10 unique numbers, and returns useful insights like the updated window and its average.

## 📦 Tech Stack

- Node.js
- Express.js
- Axios
- dotenv

---

## 🚀 How It Works

The server exposes an endpoint `/numbers/:type`, where `type` can be:

| Type | Meaning         | Maps To Endpoint           |
|------|------------------|-----------------------------|
| `p`  | Prime numbers     | `/primes`                   |
| `f`  | Fibonacci numbers | `/fibo`                     |
| `e`  | Even numbers      | `/even`                     |
| `r`  | Random numbers    | `/rand`                     |

It fetches data from:  
`http://20.244.56.144/evaluation-service/:endpoint`

Then:
- Stores a unique, sliding window of up to 10 numbers.
- Returns previous and current window states, the numbers fetched, and their average.



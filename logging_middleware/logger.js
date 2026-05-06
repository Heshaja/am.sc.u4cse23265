const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoZXNoYWphdG90dGFsaUBnbWFpbC5jb20iLCJleHAiOjE3NzgwNjAwMjEsImlhdCI6MTc3ODA1OTEyMSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjI4ODVlYzFkLTVhNWYtNDgyNS04MDI0LWNkNDNjOWUwMjljMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InRvdHRhbGkgaGVzaGFqYSIsInN1YiI6Ijc5ZTkxZWU1LWFhZjgtNDQwMC1hODJkLTkyYjg4ZmY3ZjczYyJ9LCJlbWFpbCI6Imhlc2hhamF0b3R0YWxpQGdtYWlsLmNvbSIsIm5hbWUiOiJ0b3R0YWxpIGhlc2hhamEiLCJyb2xsTm8iOiJhbS5zYy51NGNzZTIzMjY1IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiNzllOTFlZTUtYWFmOC00NDAwLWE4MmQtOTJiODhmZjdmNzNjIiwiY2xpZW50U2VjcmV0Ijoic2RCa3NKblZTVXBQZmVZeiJ9.2zh9JxTYeKhXWZYM_DhLOEXTfOiFjygfPYg68PwGC84";

async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch(
      "http://20.207.122.201/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default Log;
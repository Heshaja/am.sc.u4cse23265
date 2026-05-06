import Log from "./logger";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoZXNoYWphdG90dGFsaUBnbWFpbC5jb20iLCJleHAiOjE3NzgwNjAwMjEsImlhdCI6MTc3ODA1OTEyMSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjI4ODVlYzFkLTVhNWYtNDgyNS04MDI0LWNkNDNjOWUwMjljMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InRvdHRhbGkgaGVzaGFqYSIsInN1YiI6Ijc5ZTkxZWU1LWFhZjgtNDQwMC1hODJkLTkyYjg4ZmY3ZjczYyJ9LCJlbWFpbCI6Imhlc2hhamF0b3R0YWxpQGdtYWlsLmNvbSIsIm5hbWUiOiJ0b3R0YWxpIGhlc2hhamEiLCJyb2xsTm8iOiJhbS5zYy51NGNzZTIzMjY1IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiNzllOTFlZTUtYWFmOC00NDAwLWE4MmQtOTJiODhmZjdmNzNjIiwiY2xpZW50U2VjcmV0Ijoic2RCa3NKblZTVXBQZmVZeiJ9.2zh9JxTYeKhXWZYM_DhLOEXTfOiFjygfPYg68PwGC84";

export async function getTopNotifications() {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications"
    );

    const response = await fetch(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    console.log(data);

    if (!data.notifications) {
      return [];
    }

    const priorityMap = {
      Placement: 3,
      Result: 2,
      Event: 1,
    };

    const sorted = data.notifications.sort((a, b) => {
      if (
        priorityMap[b.Type] !==
        priorityMap[a.Type]
      ) {
        return (
          priorityMap[b.Type] -
          priorityMap[a.Type]
        );
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    });

    await Log(
      "frontend",
      "info",
      "api",
      "Notifications sorted successfully"
    );

    return sorted.slice(0, 10);
  } catch (error) {
    console.log(error);

    await Log(
      "frontend",
      "error",
      "api",
      "Failed to fetch notifications"
    );

    return [];
  }
}
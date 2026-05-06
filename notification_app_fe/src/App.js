import React, { useEffect, useState } from "react";
import { getTopNotifications } from "./notificationService";
import Log from "./logger";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const data = await getTopNotifications();

      setNotifications(data);

      await Log(
        "frontend",
        "info",
        "component",
        "Top notifications displayed"
      );
    }

    loadNotifications();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top 10 Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.Type}</h3>

          <p>{item.Message}</p>

          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
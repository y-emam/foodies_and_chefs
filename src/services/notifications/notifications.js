const updateNotifications = async (connection, setNotifications) => {
    try {
        if (connection) {
            await connection.start();

            connection.on("ReceiveNotification", (notification) => {
                setNotifications(notification);
            });

            // Clean up the connection on component unmount
            return () => {
                connection
                    .stop()
                    .then(() => console.log("Disconnected from backend SignalR hub."))
                    .catch((error) => console.error("Error disconnecting:", error));
            };
        }
    } catch (err) {
        console.log("Error in notifications", err);
    }
}

export default updateNotifications;
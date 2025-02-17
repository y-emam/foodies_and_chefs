const getNotificationDuration = (date) => {
    const currentDate = new Date();
    const notificationDate = new Date(date);
    const diffTime = Math.abs(currentDate - notificationDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
        return `${diffDays} days ago`;
    } else if (diffDays <= 0) {
        return `Today`;
    }
}

export default getNotificationDuration;
const db = new Dexie("event_organ")

db.version(4).stores({
    users: "++id, username, email, password, userType",
    events: "++id, title, category, venue, startDate, endDate, startTime, endTime, image, description, agentId, isPublished",
    tickets: "++id, title, eventId, price, quantity, endTime, timeUnit",
    orders: "++id, userId, agentId, ticketId, eventId"
});
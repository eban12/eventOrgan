const db = new Dexie("event_organ")

db.version(2).stores({
    users: "++id, username, email, password, userType",
    events: "++id, title, category, venue, startDate, endDate, image, description, agentId, isPublished",
    tickets: "++id, title, eventId, price, quantity, endTime",
    orders: "++id, userId, agentId, ticketId, eventId"
});



const items = require("../items");

const getItems = (req, reply) => {
    reply.send(items);
}

const getItem = (req, reply) => {
    const { id } = req.params;
    const item = items.find((item) => {
        item.id === id;
    });
    reply.send(item);
}

module.exports = {
    getItems,
    getItem
};

const { connect } = require("./dbConnect");

const  upSertLocation = async ({ _id, name, location }) => {
    let result = null;
    try {
        const db = await connect();
        const inventoryLocation = db.collection("inventoryLocation");
        result = inventoryLocation.updateOne(
            { _id },
            { $set: { name, location } },
            { upsert: true }
        );
    } catch (exception) {
        console.error(exception);
    }

    return result;
};

module.exports = { upSertLocation };
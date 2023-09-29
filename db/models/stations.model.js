const Station = (sequelize, Sequelize) => (
    sequelize.define("Station", {
        name: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        }
    }, {
        tableName: "stations",
        timestamps: false,
        createdAt: false,
        updatedAt: false
}));

export default Station;
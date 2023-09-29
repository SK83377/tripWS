import db from "../../../db/db.js";
import { Op } from "sequelize";

export const findStation = async (findBy) => {
        try {
            return await db.stations.findAll(
            {
                where: {
                    [Op.or]: {
                        name: {
                            [Op.iLike]: db.sequelize.literal(`'%${findBy}%'`)
                        },
                        city: {
                            [Op.iLike]: db.sequelize.literal(`'%${findBy}%'`)
                        }
                    }
                }
            },
            {
                raw: true,
                attributes: ['id', 'name', 'city']
            });
        } catch (error) {
            console.log(error);
        }
    }
import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class HouseService {
    async getHouseS() {
        let houses = await dbContext.Houses.find()
        return houses
    }

    async getHouseById(houseId) {
        let house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest('Invalid House ID')
        }
    }

    async createHouse(houseData) {
        let house = await dbContext.Houses.create(houseData)
        return house
    }

    async editHouse(houseId, houseData) {
        let house = await this.getHouseById(houseId)

        house.make = houseData.make || house.make
        house.model = houseData.model || house.model
        house.price = houseData.price || house.price
        house.year = houseData.year || house.year
        house.img = houseData.img || house.img
        house.description = houseData.description || house.description



        await house.save()
        return house
    }
    async deleteHouse(houseId) {
        let house = await this.getHouseById(houseId)
        await house.remove()
        return houseHouse

    }
}
export const houseService = new HouseService()
import { CarsController } from './Controllers/CarsController.js';
import { AuthController } from './Controllers/AuthController.js';
// import { ValuesController } from './Controllers/ValuesController.js'
import { HouseController } from './Controllers/HousesController.js'
class App {
  authController = new AuthController();
  // valuesController = new ValuesController();
  carsController = new CarsController()
  houseController = new HouseController()
}

// @ts-ignore
window.app = new App()

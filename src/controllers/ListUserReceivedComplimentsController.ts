import { Request, Response } from "express"; 
import { ListUserReceivedCompliments } from "../services/ListUserReceivedComplimentsService";

class ListUserReceivedComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserReceivedCompliments = new ListUserReceivedCompliments();

        const compliments = await listUserReceivedCompliments.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReceivedComplimentsController };
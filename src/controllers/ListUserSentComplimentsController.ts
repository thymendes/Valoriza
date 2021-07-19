import { Request, Response } from "express"; 
import { ListUserSentCompliments } from "../services/ListUserSentComplimentsService";

class ListUserSentComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserSentCompliments = new ListUserSentCompliments();

        const compliments = await listUserSentCompliments.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSentComplimentsController };
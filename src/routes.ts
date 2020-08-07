import express, { response } from 'express';

const routes  = express.Router();

routes.post('/classes', (request, reponse) => {
    const data = request.body;

    console.log(data);

    return response.send();
});

export default routes;
import { Router } from 'express';
import PropertyControler from './controllers/propertyControler';
import Addres from './controllers/addresControle';
import Querry from './controllers/querryControle';

const routes = Router();

routes.get('/properties', PropertyControler.get);
routes.post('/properties', PropertyControler.create);
routes.put('/properties', PropertyControler.update);
routes.delete('/properties', PropertyControler.delete);

routes.get('/addres', Addres.get);
routes.post('/addres', Addres.create);
routes.put('/addres', Addres.update);
routes.delete('/addres', Addres.delete);

routes.get('/querry/addres', Querry.addres);
routes.get('/querry/property', Querry.property);

export default routes;

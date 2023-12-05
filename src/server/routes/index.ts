import { Router } from 'express';

import { AnimalsController, VaccinesController, AntiparasiticsController, DewormingController, UsersController } from '../controllers';
import { ensureAuthenticate } from '../shared/middleware';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Rodando!');
});

router.get('/animals', ensureAuthenticate, AnimalsController.getAllValidation, AnimalsController.getAll);
router.post('/animals', ensureAuthenticate, AnimalsController.createValidation, AnimalsController.create);
router.get('/animals/:id', ensureAuthenticate, AnimalsController.getByIdValidation, AnimalsController.getById);
router.put('/animals/:id', ensureAuthenticate, AnimalsController.updateByIdValidation, AnimalsController.updateById);
router.delete('/animals/:id', ensureAuthenticate, AnimalsController.deleteByIdValidation, AnimalsController.deleteById);

router.get('/vaccines', ensureAuthenticate, VaccinesController.getAllValidation, VaccinesController.getAll);
router.post('/vaccines', ensureAuthenticate, VaccinesController.createValidation, VaccinesController.create);
router.get('/vaccines/:id', ensureAuthenticate, VaccinesController.getByIdValidation, VaccinesController.getById);
router.put('/vaccines/:id', ensureAuthenticate, VaccinesController.updateByIdValidation, VaccinesController.updateById);
router.delete('/vaccines/:id', ensureAuthenticate, VaccinesController.deleteByIdValidation, VaccinesController.deleteById);

router.get('/antiparasitics', ensureAuthenticate, AntiparasiticsController.getAllValidation, AntiparasiticsController.getAll);
router.post('/antiparasitics', ensureAuthenticate, AntiparasiticsController.createValidation, AntiparasiticsController.create);
router.get('/antiparasitics/:id', ensureAuthenticate, AntiparasiticsController.getByIdValidation, AntiparasiticsController.getById);
router.put('/antiparasitics/:id', ensureAuthenticate, AntiparasiticsController.updateByIdValidation, AntiparasiticsController.updateById);
router.delete('/antiparasitics/:id', ensureAuthenticate, AntiparasiticsController.deleteByIdValidation, AntiparasiticsController.deleteById);

router.get('/deworming', ensureAuthenticate, DewormingController.getAllValidation, DewormingController.getAll);
router.post('/deworming', ensureAuthenticate, DewormingController.createValidation, DewormingController.create);
router.get('/deworming/:id', ensureAuthenticate, DewormingController.getByIdValidation, DewormingController.getById);
router.put('/deworming/:id', ensureAuthenticate, DewormingController.updateByIdValidation, DewormingController.updateById);
router.delete('/deworming/:id', ensureAuthenticate, DewormingController.deleteByIdValidation, DewormingController.deleteById);

router.post('/enter', UsersController.signInValidation, UsersController.signIn);
router.post('/register', UsersController.signUpValidation, UsersController.signUp);


export { router };
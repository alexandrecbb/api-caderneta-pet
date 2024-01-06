import { Router } from 'express';

import { AnimalController, UsersController, VaccineController} from '../controllers';
import { ensureAuthenticate } from '../shared/middleware';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Rodando!');
});

router.get('/animal', ensureAuthenticate, AnimalController.getAll);
router.post('/animal', ensureAuthenticate, AnimalController.createValidation, AnimalController.create);
router.get('/animal/:id', ensureAuthenticate, AnimalController.getByIdValidation, AnimalController.getById);
router.put('/animal/:id', ensureAuthenticate, AnimalController.updateByIdValidation, AnimalController.updateById);
router.delete('/animal/:id', ensureAuthenticate, AnimalController.deleteByIdValidation, AnimalController.deleteById);

// router.get('/vaccines', ensureAuthenticate, VaccinesController.getAllValidation, VaccinesController.getAll);
router.post('/vaccines', ensureAuthenticate, VaccineController.createValidation, VaccineController.create);
// router.get('/vaccines/:id', ensureAuthenticate, VaccineController.getByIdValidation, VaccineController.getById);
// router.put('/vaccines/:id', ensureAuthenticate, VaccineController.updateByIdValidation, VaccineController.updateById);
// router.delete('/vaccines/:id', ensureAuthenticate, VaccineController.deleteByIdValidation, VaccineController.deleteById);

// router.get('/antiparasitics', ensureAuthenticate, AntiparasiticsController.getAllValidation, AntiparasiticsController.getAll);
// router.post('/antiparasitics', ensureAuthenticate, AntiparasiticsController.createValidation, AntiparasiticsController.create);
// router.get('/antiparasitics/:id', ensureAuthenticate, AntiparasiticsController.getByIdValidation, AntiparasiticsController.getById);
// router.put('/antiparasitics/:id', ensureAuthenticate, AntiparasiticsController.updateByIdValidation, AntiparasiticsController.updateById);
// router.delete('/antiparasitics/:id', ensureAuthenticate, AntiparasiticsController.deleteByIdValidation, AntiparasiticsController.deleteById);

// router.get('/deworming', ensureAuthenticate, DewormingController.getAllValidation, DewormingController.getAll);
// router.post('/deworming', ensureAuthenticate, DewormingController.createValidation, DewormingController.create);
// router.get('/deworming/:id', ensureAuthenticate, DewormingController.getByIdValidation, DewormingController.getById);
// router.put('/deworming/:id', ensureAuthenticate, DewormingController.updateByIdValidation, DewormingController.updateById);
// router.delete('/deworming/:id', ensureAuthenticate, DewormingController.deleteByIdValidation, DewormingController.deleteById);

router.post('/enter', UsersController.signInValidation, UsersController.signIn);
router.post('/register', UsersController.signUpValidation, UsersController.signUp);


export { router };
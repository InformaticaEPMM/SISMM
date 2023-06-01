import { NextFunction, Request } from 'express';
import passport from 'passport';

import { TeacherModel } from '../model/teacher.model';

class TeacherController {
  private readonly TeacherModel: TeacherModel = new TeacherModel();

  async register(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      'google',
      { failureRedirect: '/login' },
      (req: Request, res: Response, err) => {
        if (err) {
          return next(err);
        }
      },
    );

    console.log(req.user);

    /*  const { id, name, email } = req.user as {
      id: string;
      name: string;
      email: string;
    }; */
  }
}

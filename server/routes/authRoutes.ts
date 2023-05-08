import { Application, Request, Response } from 'express';
import passport from 'passport';

export default (app: Application) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req: Request, res: Response) => {
      res.json(req.user);
    },
  );

  app.get('/api/logout', (req: Request, res: Response) => {
    (req.logout as () => void)();
    res.redirect('/');
  });

  app.get('/api/current_user', (req: Request, res: Response) => {
    res.send(req.user);
  });
};

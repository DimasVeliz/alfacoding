import { Router } from 'express';
import ProblemRouter from './Problem/ProblemRouter';

class MasterRouter {
  private _router = Router();
  private _subrouterForProblems = ProblemRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/submit', this._subrouterForProblems);
  }
}

export = new MasterRouter().router;
import { NextFunction, Request, Response, Router } from 'express';
import ProblemController from '../../controllers/ProblemController';
import { Problem, problemDataSet, Code,languageHeaders, languageJsonFormaters, CodeBody } from '../../models/Problem';
import {codeFactory} from '../../factory/codeFactory';

import axios from 'axios';

interface UserSolutionDTO {
  extension: string;
  sourceCode: string;
  idProblem: number;
}

interface CustomRequest<T> extends Request {
  body: T
}


class ProblemRouter {
  private _router = Router();
  private _controller = ProblemController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.post('/', async (req: CustomRequest<UserSolutionDTO>, res: Response, next: NextFunction) => {

      const bodySent: UserSolutionDTO = req.body;



      let extension: string = bodySent.extension;
      let sourceCode: string = bodySent.sourceCode;
      let idProblem: number = bodySent.idProblem;

      let particularProblem: Problem | undefined = problemDataSet.find(p => p.id === idProblem);

      let entryFromProblem: Code | undefined = particularProblem?.languagesEntryPoint.find(p => p.extension == extension);

      let problemMainFunction: string | undefined = entryFromProblem?.main;

      let header:string| undefined = languageHeaders.find( l=>l.extension==extension)?.headers;

      let formater:string| undefined = languageJsonFormaters.find( l=>l.extension==extension)?.formater;


      let codeBody:CodeBody ={
        extension:extension,
        headers: header,
        jsonFormater:formater,
        userSolution:sourceCode,
        problemMain:problemMainFunction as string
      }

     
      let wholeBody: string = await codeFactory(codeBody);




      let endPoint: string = 'https://emkc.org/api/v1/piston/execute'
      let payload: object = {
        "language": extension,
        "source": wholeBody
      };

      let info = null;
      await axios.post(endPoint, payload).then(res => { info = res.data }).catch(err => info = err);



      res.status(200).json(info);
    });

    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {





      let idProblem = parseInt(req.query.idProblem as string);
      let language: string = req.query.language as string;

      let particularProblem: Problem | undefined = problemDataSet.find(p => p.id === idProblem);

      let entryFromProblem: Code | undefined = particularProblem?.languagesEntryPoint.find(p => p.extension == language);
      let problemBoilerPlate: string | undefined = entryFromProblem?.boilerPlate;

      res.status(200).send(problemBoilerPlate);

    });

    
  }
}

export = new ProblemRouter().router;
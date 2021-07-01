import {CodeBody} from '../models/Problem';

export const formatCSharpCode=(codeBody:CodeBody):string=>{


let wholeBody=`

${codeBody.headers}

class Program
{
    ${codeBody.userSolution}
    
    ${codeBody.jsonFormater}
    
    ${codeBody.problemMain}

}

`;
return wholeBody;
};

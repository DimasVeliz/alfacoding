import {CodeBody} from '../models/Problem';

export const formatPyCode=(codeBody:CodeBody):string=>{


let wholeBody=`
${codeBody.headers}

${codeBody.userSolution}

${codeBody.problemMain}
`;

return wholeBody;
};
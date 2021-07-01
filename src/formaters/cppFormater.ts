import {CodeBody} from '../models/Problem';


export const formatCppCode=(codeBody:CodeBody):string=>{



let wholeBody=`
${codeBody.headers}

${codeBody.userSolution}

${codeBody.jsonFormater}

${codeBody.problemMain}
`;

return wholeBody
};
import {formatCppCode} from '../formaters/cppFormater';
import {formatCSharpCode} from '../formaters/csFormater';
import {formatPyCode} from '../formaters/pyFormater';

import {CodeBody} from '../models/Problem';


interface LanguageInterface{
    [key:string]: (codeBody: CodeBody) => string

}[];

const languages:LanguageInterface={
    "cpp":formatCppCode,
    "cs":formatCSharpCode,
    "py":formatPyCode
}

export const codeFactory= async (codeBody:CodeBody)=>{
    let key:string=codeBody.extension;
    let caller: (codeBody: CodeBody) => string = languages[key];
    
    
    let wholeBody:string = caller(codeBody);
    return wholeBody;
};

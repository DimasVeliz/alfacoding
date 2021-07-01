export interface CodeHeaders{
    extension:string,
    headers:string
}

export interface JsonFormater{
    extension:string,
    formater:string
}

export interface Code{
    main:string;
    boilerPlate:string;
    extension:string;
}

export interface Problem {
    id: number | null;
    problemName: string;
    category: string;
    description: string;
    languagesEntryPoint:Array<Code>
}


export interface CodeBody{
    extension:string,
    headers:string| undefined,
    jsonFormater:string | undefined,
    userSolution:string
    problemMain:string
}

export const languageJsonFormaters:JsonFormater[]=[
    {
        extension:"cpp",
        formater:`
const string BoolToString(bool b)
{
    return b ? "True" : "False";
}
string MyDictionaryToJson(map<string, bool> dict)
{
    string monster = "";        
    for (auto it = dict.begin(); it != dict.cend(); it++)
    {
        string temp = "'" + it->first + "':" + BoolToString(it->second) + ",";
        monster += temp;
    }
    monster.substr(0, monster.size() - 1) ;       
    return "{" + monster.substr(0, monster.size() - 1) + "}";
}
`
    },
    {
        extension:"cs",
        formater:`
public static string MyDictionaryToJson(Dictionary < string, bool> dict)
{
    var entries = dict.Select(d =>string.Format("'{0}': {1}", d.Key, d.Value.ToString()));
    return "{" + string.Join(",", entries) + "}";
} 
`
    },
    {
        extension:"py",
        formater:`

`
    }
];



export const languageHeaders:CodeHeaders[]=[
    {
        extension:"cpp",
        headers:`
#include <iostream>
#include <vector>
#include <string>
#include <map>

`
    },
    {
        extension:"cs",
        headers:`
using System;
using System.Collections.Generic;
using System.Linq; 

`
    },
    {
        extension:"py",
        headers:`
`
    }
];

export const problemDataSet: Problem[] =[
    {
        id:0,
        problemName:"Average",
        category:"Linear Algorithms",
        description: "Given an array of numbers calculate the average",
        languagesEntryPoint:[
            {
                main:` 
int main(int argc, char *argv[])
{
                
    vector<int> case1Array = {2, 2, 2, 2, 4};
    double case1Answer = 2.4;
    double case1UserAnswer = Promedio(case1Array);
                
    vector<int> case2Array = {1};
    double case2Answer = 1.0;
    double case2UserAnswer = Promedio(case2Array);
                
    vector<int> case3Array = {2, 2, 2, 2, 2};
    double case3Answer = 2.0;
    double case3UserAnswer = Promedio(case3Array);
                
    map<string, bool> answers;
                
    answers.insert({"case1", case1Answer == case1UserAnswer});
    answers.insert({"case2", case2Answer == case2UserAnswer});
    answers.insert({"case3", case3Answer == case3UserAnswer});
                
    string dictionaryStringified = MyDictionaryToJson(answers);
    cout << dictionaryStringified << endl;
                
    return 0;
}
                `,
                    extension:"cpp",
                    boilerPlate: `
using namespace std;

int Promedio(vector<int>numbers)
{
}
`
            },
            {
                main:
                `
def main():
    answers={}
    case1Array= [2,2,2,2,4]
    case1Answer=2.4
    case1UserAnswer=Promedio(case1Array)
    answers["case1"]= (case1UserAnswer==case1Answer)
            
    case2Array= [1]
    case2Answer=1.0
    case2UserAnswer=Promedio(case2Array)
    answers["case2"]= (case2UserAnswer==case2Answer)
    
            
    case3Array= [2,2,2,2,2]
    case3Answer=2.0
    case3UserAnswer=Promedio(case3Array)
    answers["case3"]= (case3UserAnswer==case3Answer)
    print(answers)
            
main()
`,
                    extension:"py",
                    boilerPlate: `
def BinarySearch(list, value):
    pass
`
            },
            {
                main:` 
public static void Main(string []args)
{

    int [] case1Array= {2,2,2,2,4};
    double case1Answer=2.4;
    double case1UserAnswer=Promedio(case1Array);
                    
                
            
    int [] case2Array= {1};
    double case2Answer=1.0;
    double case2UserAnswer=Promedio(case2Array);
                    
                
    int [] case3Array= {2,2,2,2,2};
    double case3Answer=2.0;
    double case3UserAnswer=Promedio(case3Array);
    
    Dictionary <string,bool> answers= new Dictionary<string, bool>(){
        {"case1",case1Answer==case1UserAnswer},
        {"case2",case2Answer==case2UserAnswer},
        {"case3",case3Answer==case3UserAnswer}
    };
            
    string dictionaryStringified= MyDictionaryToJson(answers);
    System.Console.WriteLine(dictionaryStringified);
                
               
}
`,
                    extension:"cs",
                    boilerPlate: `


public static double Promedio(List<int>numbers)
{
}
`
            }
        ]
        
    }
];
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    public static string MyDictionaryToJson(Dictionary < string, bool> dict)
    {
        var entries = dict.Select(d =>string.Format("\"{0}\": {1}", d.Key, d.Value.ToString()));
        return "{" + string.Join(",", entries) + "}";
    }
    public static double Promedio(int [] elements)
    {
        double result=0;
        for (int i = 0; i < elements.Length; i++)
        {
            result+=elements[i];
        }
        return result/elements.Length;
    }
    public static void Main()
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
}
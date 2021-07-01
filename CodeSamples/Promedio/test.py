import numpy as np 

def Promedio(listOfNumbers):
    acumulator=0
    for item in listOfNumbers:
        acumulator+=item
    return acumulator/len(listOfNumbers)

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
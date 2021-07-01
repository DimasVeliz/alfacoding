# AlfaCoding BackEnd
This repository is a BackEnd written in Typescript belonging to an app called AlfaCoding.

AlfaCoding is a plataform that attempts to prepare candidates for a job interview via a Gym made of programming problems.

## To run it:
```
$ npm install
$ npm run dev
```

## This BackEnd provides three main end points described bellow to interact with the problems:

### get:
returns the list of all problems
```
GET http://localhost:PORT/api/

response
[
    {
        id:0,
        problemName:"Average",
        category:"Linear Algorithms",
        description: "Given an array of numbers calculate the average",        
        extension:"cpp",
        boilerPlate: `
        using namespace std;

        int Promedio(vector<int>numbers)
        {
        }
        `
    },
    {
        id:1,
        problemName:"Linear Search",
        category:"Linear Algorithms",
        description: "Given an array of numbers tell whether a number X is present or not in the list",        
        extension:"cpp",
        boilerPlate: `
        using namespace std;

        int Linear Search(vector<int>numbers, int x)
        {
        }
        `
    }
]

```

### get by id:
returns a specific problem from the list given its id
```
GET http://localhost:PORT/api/problems/1

response:
        {
            id:1,
            problemName:"Linear Search",
            category:"Linear Algorithms",
            description: "Given an array of numbers tell whether a number X is present or not in the list",        
            extension:"cpp",
            boilerPlate: `
            using namespace std;

            int Linear Search(vector<int>numbers, int x)
            {
                //TODO
            }
            `
        }
```

### post:
given a problem description and a code body, the system checks whether the solution is incorrect or not

```
POST http://localhost:PORT/api/problems/

Body:
{
    extension: "cpp",
    idProblem: 1
    sourceCode: `
    using namespace std;

    int Linear Search(vector<int>numbers, int x)
    {
        for(int i=0;i<numbers.size();i++)
        {
            if(numbers[i]==x)
            return 1
        }
        return 0;
    }
    `
}
```
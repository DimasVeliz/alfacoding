#include <iostream>
#include <vector>
#include <string>
#include <map>

using namespace std;

double Promedio(vector<int> elements)
{
    double result = 0;
    for (int i = 0; i < elements.size(); i++)
    {
        result += elements[i];
    }
    return result / elements.size();
}

const string BoolToString(bool b)
{
    return b ? "True" : "False";
}
string MyDictionaryToJson(map<string, bool> dict)
{
    string monster = "";
    int index=0;
    for (auto it = dict.begin(); it != dict.cend(); it++)
    {
        string val="case"+to_string(index);
        string temp = "'" + val + "':" + BoolToString(it->second) + ",";
        monster += temp;
    }
    monster.substr(0, monster.size() - 1);

    return "{" + monster.substr(0, monster.size() - 1) + "}";
}

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
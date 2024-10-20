const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generator = require('@babel/generator').default; // Import generator
const conditions = [
    '(salary < 25 && branch === "sales") && (exp > 4)',
    '(salary < 25000 && branch === "sales") && (exp > 10)',
    '(salary < 30000 && branch === "hr") && (exp < 5)',
    '(salary > 20000 && branch === "marketing") && (age > 25)',
];
const combineASTs = (asts) => {
    return asts.reduce((combined, current) => {
        if (!combined) {
            return current;
        }
        return types.logicalExpression('||', combined, current);
    }, null);
};
const evaluateAST = (ast, data) => {
    try {
        // Create a function that evaluates the AST with the provided data
        const conditionFunction = new Function('data', `
            const { salary, branch, exp, age } = data; // Destructure data properties
            return ${generator(ast).code};
        `);
        // Execute the function and return the result
        return conditionFunction(data);
    } catch (error) {
        console.error(`Error evaluating AST:`, error.message);
        return false;
    }
};
// Parse conditions into ASTs
const conditionASTs = conditions.map(condition => {
    try {
        const parsed = parser.parseExpression(condition);
        return parsed;
    } catch (error) {
        console.error(`Error parsing condition "${condition}":`, error.message);
        return null;
    }
}).filter(ast => ast !== null);
const AddRule=async(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
        data+=dt;
    });
    req.on("end",()=>{
        data=JSON.parse(data);
        const newExpression=data.expression;
        conditions.push(newExpression);
        const combinedAST = combineASTs(conditionASTs);
        const isValid=evaluateAST(combinedAST,{
            salary:15,
            branch:"sales",
            exp:8,
            age:20
        });
        res.send(isValid);
    })
}
module.exports=AddRule;
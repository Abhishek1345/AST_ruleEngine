const generator=require('@babel/generator').default;
const parser=require('@babel/parser');
const sampleExpression='(salary < 25 && branch === "sales") && (exp > 4)';
const sampleAst=parser.parseExpression(sampleExpression);
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
const Validate=async(req,res)=>{
    let data="";
    req.on("data",(dt)=>{
        data+=dt;
    });
    req.on("end",()=>{
        data=JSON.parse(data);
        const isValid=evaluateAST(sampleAst,data);
        res.send(isValid);
    })
}
module.exports=Validate;
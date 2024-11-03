import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./Explanation.css";

const Explanation = () => {
  const equation1 = `\\text{Weighted Score} = \\Sigma \\left( \\frac{\\text{Rank in category}}{\\text{number of programs}} \\times \\text{category weight} \\right)`;
  const equation2 = `\\text{Score for a program} = \\left( 1 - \\frac{\\text{weighted rank sum}}{\\text{maximum possible weighted sum}} \\right) \\times 100`;
  return (
    <div className="explanation-container">
      <h2>About This Tool</h2>
      <p>
        This tool helps you rank programs based on different categories and
        weights you assign. The overall score is calculated using the following
        equations:
      </p>
      <MathJaxContext>
        <div className="equation">
          <MathJax inline dynamic>{`\\(${equation1}\\)`}</MathJax>
        </div>
        <div className="equation">
          <MathJax inline dynamic>{`\\(${equation2}\\)`}</MathJax>
        </div>
      </MathJaxContext>
      <p>
        You can assign weights to categories that sum up to 100%, and the
        ranking for each program in each category will be used to calculate the
        weighted score. The final score for each program is calculated by
        normalizing the weighted score to a scale of 0 to 100.
      </p>
    </div>
  );
};

export default Explanation;

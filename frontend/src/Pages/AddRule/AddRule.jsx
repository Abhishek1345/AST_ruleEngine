// addRule.js
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { Link } from 'react-router-dom'; // Import Link for navigation

function AddRule() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Animated heading using framer-motion */}
      <motion.h1
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: '2.5rem', color: '#4A90E2' }}
      >
        RULE ENGINE AST
      </motion.h1>

      {/* Input section for entering the rule */}
      <div style={{ marginTop: '30px' }}>
        <label htmlFor="ruleInput" style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}>
          Input your rule as a string:
        </label>
        <input
          type="text"
          id="ruleInput"
          placeholder="Enter your rule here"
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
      </div>

      {/* Animated Go Back button */}
      <div style={{ marginTop: '30px' }}>
        <Link to="/" style={buttonStyle}>
          <motion.button
            style={{ ...buttonStyle, backgroundColor: '#4A90E2', color: 'white', border: 'none' }}
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
          >
            Go Back to Home
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

// Button style
const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background-color 0.3s',
};

export default AddRule;

import React from 'react';

const labelStyles = {
  textAlign: 'center',
  padding: 16,
  fontWeight: 'bolder'
};

const cellStyles = {
  textAlign: 'center',
  padding: 16,
  border: '1px solid #aaa'
};

const highlightedCellStyles = {
  textAlign: 'center',
  padding: 16,
  border: '1px solid #aaa',
  backgroundColor: '#60ebbf',
  fontWeight: 'bolder'
};

const TestingQuotient = ({ highlighted }) => {
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th style={labelStyles}>🚫Don't Write Test</th>
          <th style={labelStyles}>✅Write Test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={labelStyles}>❤️Love Test</td>
          <td style={cellStyles}>A</td>
          <td style={cellStyles}>B</td>
        </tr>
        <tr>
          <td style={labelStyles}>😐No Feeling</td>
          <td style={cellStyles}>C</td>
          <td
            style={highlighted ? highlightedCellStyles : cellStyles}
          >
            D
          </td>
        </tr>
        <tr>
          <td style={labelStyles}>🙅Hate Test</td>
          <td style={cellStyles}>E</td>
          <td
            style={highlighted ? highlightedCellStyles : cellStyles}
          >
            F
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TestingQuotient;

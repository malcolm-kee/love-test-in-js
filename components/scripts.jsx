import React from 'react';

const Scripts = ({ scriptSrc, async = true, charSet = 'utf-8' }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = async;
    script.charset = charSet;

    document.body.appendChild(script);

    return function() {
      document.body.removeChild(script);
    };
  }, [scriptSrc]);

  return null;
};

export default Scripts;

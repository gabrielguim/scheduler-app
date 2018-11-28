import React from 'react';
import { Fade, LinearProgress } from '@material-ui/core';

function CustomLinearProgress(props) {
    const { loading } = props;

    return (
      <div>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '200ms' : '200ms',
          }}
          unmountOnExit>
          <LinearProgress color="secondary" />
        </Fade>
      </div>
    );
};

export default CustomLinearProgress;
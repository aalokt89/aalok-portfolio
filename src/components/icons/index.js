import React from 'react';

import Logo from './logo';
import Home from './home';
import Work from './work';
import Experience from './experience';
import Contact from './contact';
import ArrowRightBounded from './arrow-right-bounded';
import ArrowDownBounded from './arrow-down-bounded';
import Dribbble from './dribbble';
import Pinterest from './pinterest';
import Logopond from './logopond';

const Icon = props => {
  switch (props.name) {
    //Ilustrative Icons
    case 'logo':
      return <Logo {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'work':
      return <Work {...props} />;
    case 'experience':
      return <Experience {...props} />;
    case 'contact':
      return <Contact {...props} />;

    //Functional Icons
    case 'arrow-right-bounded':
      return <ArrowRightBounded {...props} />;
    case 'arrow-down-bounded':
      return <ArrowDownBounded {...props} />;

    //Footer icons
    case 'dribbble':
      return <Dribbble {...props} />;
    case 'pinterest':
      return <Pinterest {...props} />;
    case 'logopond':
      return <Logopond {...props} />;
    default:
      return;
  }
};

export default Icon;

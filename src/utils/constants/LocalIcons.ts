import React from 'react';

import EYE from '../../../public/icons/eye.svg';
import DASHED_EYE from '../../../public/icons/dashed-eye.svg';
import RIGHT_ARROW from '../../../public/icons/right-arrow.svg';
import LEFT_ARROW from '../../../public/icons/left-arrow.svg';
import DOWN_ARROW from '../../../public/icons/down-arrow.svg';
import INDIVIDUAL_USER_TYPE from '../../../public/icons/individual-user-type.svg';
import ASSOCIATION_USER_TYPE from '../../../public/icons/association-user-type.svg';

// add this to satisfy the ts compiler and have it recognize the type of the keys in the LocalIcons object
type Icons =
    | 'EYE'
    | 'DASHED_EYE'
    | 'LEFT_ARROW'
    | 'DOWN_ARROW'
    | 'RIGHT_ARROW'
    | 'INDIVIDUAL_USER_TYPE'
    | 'ASSOCIATION_USER_TYPE';

const LocalIcons: Record<Icons, React.FC<React.SVGProps<SVGSVGElement>>> = {
    EYE,
    DASHED_EYE,
    LEFT_ARROW,
    DOWN_ARROW,
    RIGHT_ARROW,
    INDIVIDUAL_USER_TYPE,
    ASSOCIATION_USER_TYPE,
};

export { LocalIcons };

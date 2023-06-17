import React from 'react';

import EYE from '../../../public/icons/eye.svg';
import DASHED_EYE from '../../../public/icons/dashed-eye.svg';
import RIGHT_ARROW from '../../../public/icons/right-arrow.svg';
import LEFT_ARROW from '../../../public/icons/left-arrow.svg';
import DOWN_ARROW from '../../../public/icons/down-arrow.svg';
import INDIVIDUAL_USER_TYPE from '../../../public/icons/individual-user-type.svg';
import ASSOCIATION_USER_TYPE from '../../../public/icons/association-user-type.svg';
import SEARCH_PRIMARY from '../../../public/icons/search-primary.svg';
import SEARCH_SECONDARY from '../../../public/icons/search-secondary.svg';
import DROPDOWN from '../../../public/icons/dropdown.svg';
import LANGUAGE from '../../../public/icons/language.svg';
import NOTIFICATION from '../../../public/icons/notification.svg';

// add this to satisfy the ts compiler and have it recognize the type of the keys in the LocalIcons object
type Icons =
    | 'EYE'
    | 'DASHED_EYE'
    | 'LEFT_ARROW'
    | 'DOWN_ARROW'
    | 'RIGHT_ARROW'
    | 'INDIVIDUAL_USER_TYPE'
    | 'ASSOCIATION_USER_TYPE'
    | 'SEARCH_PRIMARY'
    | 'SEARCH_SECONDARY'
    | 'DROPDOWN'
    | 'LANGUAGE'
    | 'NOTIFICATION';

const LocalIcons: Record<Icons, React.FC<React.SVGProps<SVGSVGElement>>> = {
    EYE,
    DASHED_EYE,
    LEFT_ARROW,
    DOWN_ARROW,
    RIGHT_ARROW,
    INDIVIDUAL_USER_TYPE,
    ASSOCIATION_USER_TYPE,
    SEARCH_PRIMARY,
    SEARCH_SECONDARY,
    DROPDOWN,
    LANGUAGE,
    NOTIFICATION,
};

export { LocalIcons };

import React from 'react';

import EYE from '../../../public/icons/eye.svg';
import CHAT from '../../../public/icons/chat.svg';
import CHECK from '../../../public/icons/check.svg';
import SEND from '../../../public/icons/send.svg';
import SEARCH from '../../../public/icons/search.svg';
import DELETE from '../../../public/icons/delete.svg';
import UPLOAD from '../../../public/icons/upload.svg';
import LEFT_ARROW from '../../../public/icons/left-arrow.svg';
import DASHED_EYE from '../../../public/icons/dashed-eye.svg';
import DOWN_ARROW from '../../../public/icons/down-arrow.svg';
import WHITE_PEN from '../../../public/icons/white-pen.svg';
import RIGHT_ARROW from '../../../public/icons/right-arrow.svg';
import HAND_GIVING_HEART from '../../../public/icons/hand-giving-heart.svg';

import INDIVIDUAL_USER_TYPE from '../../../public/icons/individual-user-type.svg';
import ASSOCIATION_USER_TYPE from '../../../public/icons/association-user-type.svg';

// add this to satisfy the ts compiler and have it recognize the type of the keys in the LocalIcons object
type Icons =
    | 'EYE'
    | 'CHAT'
    | 'SEND'
    | 'SEARCH'
    | 'UPLOAD'
    | 'CHECK'
    | 'DELETE'
    | 'WHITE_PEN'
    | 'DASHED_EYE'
    | 'LEFT_ARROW'
    | 'DOWN_ARROW'
    | 'RIGHT_ARROW'
    | 'HAND_GIVING_HEART'
    | 'INDIVIDUAL_USER_TYPE'
    | 'ASSOCIATION_USER_TYPE';

const LocalIcons: Record<Icons, React.FC<React.SVGProps<SVGSVGElement>>> = {
    EYE,
    DELETE,
    CHAT,
    SEND,
    CHECK,
    SEARCH,
    UPLOAD,
    WHITE_PEN,
    DASHED_EYE,
    LEFT_ARROW,
    DOWN_ARROW,
    RIGHT_ARROW,
    HAND_GIVING_HEART,
    INDIVIDUAL_USER_TYPE,
    ASSOCIATION_USER_TYPE,
};

export { LocalIcons };

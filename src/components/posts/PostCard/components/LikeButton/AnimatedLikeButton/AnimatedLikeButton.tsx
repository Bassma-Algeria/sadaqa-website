import React from 'react';

import styles from './AnimatedLikeButton.module.scss';

interface Props {
  liked: boolean;
}

const AnimatedLikeButton: React.FC<Props> = ({ liked }) => {
  return (
    <div className={styles.animatedButton}>
      <div>
        <input type="checkbox" className={styles.checkbox} checked={liked} onChange={() => {}} />

        <svg
          id={styles['heart-svg']}
          viewBox="467 392 58 57"
          xmlns="http://www.w3.org/2000/svg"
          transform="scale(2, 1.8)"
        >
          <g id={styles.Group} fill="none" fillRule="evenodd" transform="translate(467 392)">
            <path
              d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
              id={styles.heart}
              fill="transparent"
              stroke={liked ? 'transparent' : '#000000'}
              strokeWidth="1.8px"
            />

            <circle
              id={styles['main-circ']}
              fill="#D7443E"
              opacity="0"
              cx="29.5"
              cy="29.5"
              r="1.5"
            />

            <g id={styles.grp7} opacity="0" transform="translate(7 6)">
              <circle id={styles.oval1} fill="#9CD8C3" cx="2" cy="6" r="2" />
              <circle id={styles.oval2} fill="#8CE8C3" cx="5" cy="2" r="2" />
            </g>

            <g id={styles.grp6} opacity="0" transform="translate(0 28)">
              <circle id={styles.oval1} fill="#CC8EF5" cx="2" cy="7" r="2" />
              <circle id={styles.oval2} fill="#91D2FA" cx="3" cy="2" r="2" />
            </g>

            <g id={styles.grp3} opacity="0" transform="translate(52 28)">
              <circle id={styles.oval2} fill="#9CD8C3" cx="2" cy="7" r="2" />
              <circle id={styles.oval1} fill="#8CE8C3" cx="4" cy="2" r="2" />
            </g>

            <g id={styles.grp2} opacity="0" transform="translate(44 6)">
              <circle id={styles.oval2} fill="#CC8EF5" cx="5" cy="6" r="2" />
              <circle id={styles.oval1} fill="#CC8EF5" cx="2" cy="2" r="2" />
            </g>

            <g id={styles.grp5} opacity="0" transform="translate(14 50)">
              <circle id={styles.oval1} fill="#91D2FA" cx="6" cy="5" r="2" />
              <circle id={styles.oval2} fill="#91D2FA" cx="2" cy="2" r="2" />
            </g>

            <g id={styles.grp4} opacity="0" transform="translate(35 50)">
              <circle id={styles.oval1} fill="#F48EA7" cx="6" cy="5" r="2" />
              <circle id={styles.oval2} fill="#F48EA7" cx="2" cy="2" r="2" />
            </g>

            <g id={styles.grp1} opacity="0" transform="translate(24)">
              <circle id={styles.oval1} fill="#9FC7FA" cx="2.5" cy="3" r="2" />
              <circle id={styles.oval2} fill="#9FC7FA" cx="7.5" cy="2" r="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export { AnimatedLikeButton };

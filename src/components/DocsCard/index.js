import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

function DocsCard({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);

  return(
    <div className="col col--4" style={{marginBottom: '2rem'}}>
      <Link to={link} className="card-link">
        <div className={classnames('card shadow--tl', styles.card)}>
          <div className="card__image" style={{textAlign: 'center'}}>
            <img
              src={imgUrl}
              alt={title}
              title={title}
              style={{'height': 200}}
            />
          </div>
          <div className="card__body">
            <h4 style={{textAlign: 'center'}}>{title}</h4>
            <small>
              {description}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DocsCard;
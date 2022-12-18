import { FC } from 'react';
import { Link } from '../Link/Link';
import {
    TITLE_LOGO_IMAGE_URL,
    TITLE_LOGO_IMAGE_ALT,
    TITLE_LOGO_LINK_TITLE,
} from '../../../constants';
import * as style from './GlobalHeaderMain.css';

export const GlobalHeaderMain: FC = () => (
    <div className={style.wrapper}>
        <div className={style.globalHeaderMain}>
            <Link href="/" title={TITLE_LOGO_LINK_TITLE}>
                <img
                    src={TITLE_LOGO_IMAGE_URL}
                    alt={TITLE_LOGO_IMAGE_ALT}
                    className={style.titleLogoImg}
                    width={438}
                    height={38}
                    decoding="async"
                />
            </Link>
        </div>
    </div>
);

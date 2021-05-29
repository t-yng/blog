import React, { FC } from 'react';
import { Link } from '../Link/Link';

import {
    TITLE_LOGO_IMAGE_URL,
    TITLE_LOGO_IMAGE_ALT,
    TITLE_LOGO_LINK_TITLE,
} from '../../../constants';

export const GlobalHeaderMain: FC = () => (
    <div className="bg-global-header">
        <div className="flex justify-center py-4 px-5">
            <Link href="/" anchorProps={{ title: TITLE_LOGO_LINK_TITLE }}>
                <img
                    src={TITLE_LOGO_IMAGE_URL}
                    alt={TITLE_LOGO_IMAGE_ALT}
                    className="w-full"
                />
            </Link>
        </div>
    </div>
);

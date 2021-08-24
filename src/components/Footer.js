import React from 'react';
import _ from 'lodash';

import { htmlToReact } from '../utils';
import Action from './Action';

export default class Footer extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const copyright = _.get(footer, 'content');
        const links = _.get(footer, 'links');
        const hasSocial = _.get(footer, 'has_social');
        const socialLinks = _.get(footer, 'social_links');

       < return (
              "footer": {
        "content": "ALL RIGHTS RESERVED - ",
        "has_social": true,
        "social_links": [
            {
                "label": "Facebook",
                "url": "https://www.facebook.com/bakedbyacherryontop/",
                "style": "icon",
                "icon_class": "facebook",
                "new_window": true
            },
            {
                "label": "Instagram",
                "url": "https://www.instagram.com/bakedbyacherryontop/",
                "style": "icon",
                "icon_class": "instagram",
                "new_window": true
            },
            {
                "label": "Baked by a Cherry on Top",
                "url": "https://wa.me/message/WYKY5SMM27SEH1",
                "style": "link",
                "icon_class": "dev",
                "new_window": false,
                "no_follow": false,
                "type": "action"
            }
        ],
        "links": [
            {
                "label": "Designed by Harteliefie & Netgitry",
                "url": "https://www.facebook.com/Harteliefie/",
                "style": "link",
                "icon_class": "facebook",
                "new_window": false,
                "no_follow": false,
                "type": "action"
            }
        ]
     },

}


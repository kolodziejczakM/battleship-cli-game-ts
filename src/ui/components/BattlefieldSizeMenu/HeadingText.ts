/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { text } from 'blessed';
import { BattlefieldSizeMenu } from '../../scenes/BattlefieldSizeMenu';

const HeadingText = text({
    parent: BattlefieldSizeMenu,
    top: '15%',
    left: 'center',
    width: '80%',
    content: 'Please choose the size of the battlefield:',
    style: {
        fg: '#ffffff',
        bg: '#000000'
    }
});

export default HeadingText;

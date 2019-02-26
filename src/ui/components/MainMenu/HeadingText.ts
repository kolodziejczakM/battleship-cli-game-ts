/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { text } from 'blessed';
import { MainMenu } from '../../scenes/MainMenu';

const HeadingText = text({
    parent: MainMenu,
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

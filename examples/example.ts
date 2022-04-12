import {
    generate24BitBackground,
    generate24BitForeground,
    generate8BitForeground,
    SuperColor,
    SuperColorStyle,
} from '../src';

const superColor = new SuperColor();

superColor.log('hi there');

superColor.setStyle([SuperColorStyle.FG_GREEN]);

superColor.log('hi there with green text');

superColor.addStyle([SuperColorStyle.BG_BLUE, SuperColorStyle.BOLD]);

superColor.log('hi there with green text and blue background');

superColor.resetStyle();

superColor.log('hi there after reset');

superColor.setStyle([generate8BitForeground(52)]);

superColor.log('testing 8bit style');

superColor.setStyle([
    generate24BitForeground([128, 0, 0]),
    generate24BitBackground([240, 230, 140]),
]);

superColor.log('testing 24bit style');

'use strict';
/**
 * @author: effus (https://github.com/effus)
 * @version: 1.0.0
 * @license: https://github.com/effus/social-buttons/blob/master/LICENSE
 * @example: https://github.com/effus/social-buttons/blob/master/demo/sample.html
 */
(function() {
    var socialButtonsWidget = {
        btns: {
            position: 'horizontal',
            size: '60px',
            facebook: {
                img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_Logo_Mini.svg'
            },
            vk: {
                img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'
            },
            instagram: {
                img: 'https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png'
            },
            youtube: {
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/YouTube_play_button_rounded_square_%282013-2017%29.svg'
            }
        },
        attachStyles(el) {
            var css =
                '.social-btns-widget.' + this.btns.position +
                ' a:hover {opacity:0.7;} .social-btns-widget.vertical {width:' +
                this.btns.size + ';display: block;}',
                head = document.head || document.getElementsByTagName(
                    'head')[0],
                style = document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            el.appendChild(style);
        },
        getBtnsPosition(el) {
            for (var i in el.classList) {
                if (typeof el.classList[i] === 'string') {
                    if (el.classList[i] === 'vertical') {
                        return 'vertical';
                    } else if (el.classList[i] === 'horizontal') {
                        return 'horizontal';
                    }
                }
            }
        },
        getBtnsSize: function(el) {
            var btnSize = el.dataset.btnSize;
            if (typeof btnSize == 'undefined') {
                btnSize = this.btns.size;
            }
            return btnSize;
        },
        getBtnsList(el) {
            return el.querySelectorAll('a');
        },
        setupBtn(el) {
            var classList = el.classList;
            for (var i in classList) {
                if (typeof el.classList[i] === 'string') {
                    var btnClass = el.classList[i];
                    if (typeof this.btns[btnClass] !== 'undefined') {
                        var opts = this.btns[btnClass];
                        el.style =
                            'display:inline-block;width:' + this.btns.size +
                            ';height:' + this.btns.size + ';opacity:1;' +
                            'background-image:url(' + opts.img + ');' +
                            'background-size:100%;';
                    }
                }
            }
        },
        init: function() {
            var els = document.querySelectorAll(
                '.social-btns-widget');
            if (els.length > 0) {
                for (var i in els) {
                    var el = els[i];
                    if (typeof el === 'object') {
                        this.btns.position = this.getBtnsPosition(
                            el);
                        this.btns.size = this.getBtnsSize(
                            el);
                        this.attachStyles(el);
                        var btnsList = this.getBtnsList(el);
                        for (var i in btnsList) {
                            if (typeof btnsList[i] === 'object') {
                                this.setupBtn(btnsList[i]);
                            }
                        }
                    }
                }
            }
        }
    }
    socialButtonsWidget.init();
})();

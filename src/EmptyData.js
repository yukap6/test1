import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import i18n from './i18n';
import './style/index.scss';

const i18nDefault = 'zh-cn';

export default class EmptyData extends React.Component {
  static displayName = 'ewt-empty-data';

  static propTypes = {
    children: PropTypes.any,
    lang: PropTypes.string,
    icon: PropTypes.string,
    iconSmall: PropTypes.string,
    iconLarge: PropTypes.string,
    prefixCls: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    children: i18n[i18nDefault].description,
    lang: i18nDefault,
    iconSmall: '//web.ewt360.com/common/eui/images/empty.png',
    icon: '//web.ewt360.com/common/eui/images/empty.png',
    iconLarge: '//web.ewt360.com/common/eui/images/empty.png',
    prefixCls: 'ewt-empty-data',
    theme: 'default',
    style: {},
    className: '',
    type: 'medium',
  };

  render() {
    const {
      prefixCls,
      children,
      icon,
      iconSmall,
      iconLarge,
      style,
      type,
      className,
    } = this.props;

    const iconMap = {
      small: iconSmall,
      medium: icon,
      large: iconLarge,
    };

    return (
      <div
        className={classnames({ [`${prefixCls} ${type}`]: true }, { [className]: !!className })}
        style={style}
      >
        <div
          className={`${prefixCls}-icon`}
          style={{
            backgroundImage: `url(${iconMap[type]})`,
          }}
        />
        <div className={`${prefixCls}-content`}>
          {children}
        </div>
      </div>
    );
  }
}

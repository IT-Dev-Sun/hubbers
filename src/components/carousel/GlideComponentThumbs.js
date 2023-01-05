/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';
import { getDirection } from '../../helpers/Utils';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

let resizeTimeOut = -1;
let mountTimeOut = -1;

class GlideComponentThumbs extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.thumbsResize = this.thumbsResize.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
    this.imagesSwipeEnd = this.imagesSwipeEnd.bind(this);
    this.renderDots = this.renderDots.bind(this);
    this.updateThumbBreakpoints = this.updateThumbBreakpoints.bind(this);
    const { settingsImages, settingsThumbs } = this.props;
    this.state = {
      total: settingsImages.data.length,
      activeIndex: 0,
      thumbsPerView: Math.min(
        settingsThumbs.perView,
        settingsImages.data.length
      ),
      renderArrows: true,
    };
    this.updateThumbBreakpoints();
  }

  componentDidMount() {
    const { settingsImages, settingsThumbs } = this.props;
    this.glideCarouselImages = new Glide(this.carouselImages, {
      ...settingsImages,
      direction: getDirection().direction,
    });
    this.glideCarouselImages.mount();

    this.glideCarouselThumbs = new Glide(this.carouselThumbs, {
      ...settingsThumbs,
      direction: getDirection().direction,
    });
    this.glideCarouselThumbs.mount();

    this.glideCarouselThumbs.on('resize', this.thumbsResize);
    this.glideCarouselImages.on('swipe.end', this.imagesSwipeEnd);

    mountTimeOut = setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
      this.glideCarouselImages.on('resize', this.onResize);
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(resizeTimeOut);
    clearTimeout(mountTimeOut);
    this.glideCarouselImages.destroy();
    this.glideCarouselThumbs.destroy();
  }

  onThumbClick(index) {
    this.setState({ activeIndex: index });
    this.glideCarouselImages.go(`=${index}`);
  }

  onResize() {
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(() => {
      this.glideCarouselImages.update();
      this.glideCarouselThumbs.update();
      resizeTimeOut = -1;
    }, 500);
  }

  imagesSwipeEnd() {
    const { thumbsPerView, activeIndex } = this.state;
    const gap = this.glideCarouselThumbs.index + thumbsPerView;
    this.setState({ activeIndex: this.glideCarouselImages.index });
    if (activeIndex >= gap) {
      this.glideCarouselThumbs.go('>');
    }
    if (activeIndex < this.glideCarouselThumbs.index) {
      this.glideCarouselThumbs.go('<');
    }
  }

  thumbsResize() {
    const { settingsImages, settingsThumbs } = this.props;
    const { total } = this.state;
    const perView = Math.min(
      settingsThumbs.perView,
      settingsImages.data.length
    );
    this.setState({ thumbsPerView: perView });
    if (total <= perView) {
      this.setState({ renderArrows: false });
    }
  }

  updateThumbBreakpoints() {
    const { settingsThumbs } = this.props;
    const { total } = this.state;
    const thumbBreakpoints = settingsThumbs.breakpoints;
    const newBreakpoints = {};
    for (const prop in thumbBreakpoints) {
      newBreakpoints[prop] = {
        perView: Math.min(thumbBreakpoints[prop].perView, total),
      };
    }
    settingsThumbs.breakpoints = newBreakpoints;
  }

  renderDots() {
    const { total } = this.state;
    const dots = [];
    /* eslint-disable no-plusplus */
    for (let i = 0; i < total; i++) {
      dots.push(
        <button
          className="glide__bullet slider-dot"
          key={i}
          data-glide-dir={`=${i}`}
        />
      );
    }
    return dots;
  }

  render() {
    /* eslint-disable no-return-assign */
    const { settingsImages, settingsThumbs } = this.props;
    const { activeIndex, renderArrows } = this.state;
    return (
      <div>
        <div
          className="glide details"
          ref={(node) => (this.carouselImages = node)}
        >
          <div data-glide-el="track" className="glide__track">
            <div className="glide__slides">
              {settingsImages.data.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="glide__slide">
                      <img
                        alt="detail"
                        src={item.img}
                        className="responsive border-0 border-radius img-fluid mb-3"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="glide thumbs"
          ref={(node) => (this.carouselThumbs = node)}
        >
          <div data-glide-el="track" className="glide__track">
            <div className="glide__slides">
              {settingsThumbs.data.map((item, index) => {
                return (
                  <div
                    className={
                      index === activeIndex
                        ? 'glide__slide active'
                        : 'glide__slide'
                    }
                    key={item.id}
                    onClick={() => {
                      this.onThumbClick(index);
                    }}
                  >
                    <img
                      alt="detail"
                      src={item.img}
                      className="responsive border-0 border-radius img-fluid"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {renderArrows && (
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <i className="simple-icon-arrow-left" />
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <i className="simple-icon-arrow-right" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

GlideComponentThumbs.defaultProps = {
  settingsImages: {},
  settingsThumbs: {},
};

/* eslint-disable react/forbid-prop-types */
GlideComponentThumbs.propTypes = {
  settingsImages: PropTypes.shape({
    type: PropTypes.string,
    startAt: PropTypes.number,
    perView: PropTypes.number,
    focusAt: PropTypes.number,
    gap: PropTypes.number,
    autoplay: PropTypes.bool,
    hoverpause: PropTypes.bool,
    keyboard: PropTypes.bool,
    bound: PropTypes.bool,
    swipeThreshold: PropTypes.oneOf([PropTypes.number, PropTypes.bool]),
    dragThreshold: PropTypes.oneOf([PropTypes.number, PropTypes.bool]),
    perTouch: PropTypes.oneOf([PropTypes.number, PropTypes.bool]),
    touchRatio: PropTypes.number,
    touchAngle: PropTypes.number,
    animationDuration: PropTypes.number,
    rewind: PropTypes.bool,
    rewindDuration: PropTypes.number,
    animationTimingFunc: PropTypes.string,
    direction: PropTypes.string,
    peek: PropTypes.object,
    breakpoints: PropTypes.object,
    classes: PropTypes.object,
    throttle: PropTypes.number,
    data: PropTypes.array,
  }),
  settingsThumbs: PropTypes.shape({
    type: PropTypes.string,
    startAt: PropTypes.number,
    perView: PropTypes.number,
    focusAt: PropTypes.number,
    gap: PropTypes.number,
    autoplay: PropTypes.bool,
    hoverpause: PropTypes.bool,
    keyboard: PropTypes.bool,
    bound: PropTypes.bool,
    swipeThreshold: PropTypes.oneOf([PropTypes.number, PropTypes.bool]),
    dragThreshold: PropTypes.oneOf([PropTypes.number, PropTypes.bool]),
    perTouch: PropTypes.oneOf([PropTypes.number, PropTypes.bool]),
    touchRatio: PropTypes.number,
    touchAngle: PropTypes.number,
    animationDuration: PropTypes.number,
    rewind: PropTypes.bool,
    rewindDuration: PropTypes.number,
    animationTimingFunc: PropTypes.string,
    direction: PropTypes.string,
    peek: PropTypes.object,
    breakpoints: PropTypes.object,
    classes: PropTypes.object,
    throttle: PropTypes.number,
    data: PropTypes.array,
  }),
  // id: PropTypes.string,
  // className: PropTypes.string,
};
export default GlideComponentThumbs;

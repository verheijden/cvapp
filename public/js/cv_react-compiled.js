"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  // SectionTxt component
  var SectionTxt = function (_React$Component) {
    _inherits(SectionTxt, _React$Component);

    function SectionTxt(props) {
      _classCallCheck(this, SectionTxt);

      return _possibleConstructorReturn(this, (SectionTxt.__proto__ || Object.getPrototypeOf(SectionTxt)).call(this, props));
    }

    _createClass(SectionTxt, [{
      key: "render",
      value: function render() {

        var frag = React.createElement(
          "div",
          null,
          "json not handled"
        );
        var title = this.props.content.title;

        if (title === 'Personalia') {
          var items = this.props.content.items;
          return React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "col1" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "Email:"
                ),
                React.createElement(
                  "li",
                  null,
                  "Telefoonnummer:"
                ),
                React.createElement(
                  "li",
                  null,
                  "Woonplaats:"
                ),
                React.createElement(
                  "li",
                  null,
                  "Geboren:"
                ),
                React.createElement(
                  "li",
                  null,
                  "Nationaliteit:"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "col2" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  items.Email
                ),
                React.createElement(
                  "li",
                  null,
                  items.Telefoonnummer
                ),
                React.createElement(
                  "li",
                  null,
                  items.Woonplaats
                ),
                React.createElement(
                  "li",
                  null,
                  items.Geboortedatum
                ),
                React.createElement(
                  "li",
                  null,
                  items.Nationaliteit
                )
              )
            ),
            React.createElement("div", { className: "clear" })
          );
        }

        if (title === 'Profiel') {
          return React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.content.description } });
        }

        if (title === 'Educatie') {
          var litems = this.props.content.items;
          var eLitems = litems.map(function (litem, index) {
            return React.createElement(
              "li",
              { key: index },
              React.createElement(
                "div",
                { className: "col1" },
                litem.Instituut
              ),
              React.createElement(
                "div",
                { className: "col2" },
                litem.Opleiding
              ),
              React.createElement(
                "div",
                { className: "col3" },
                litem.Jaar
              ),
              React.createElement("div", { className: "clear" })
            );
          });
          return React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                "div",
                { className: "col1" },
                "Instituut:"
              ),
              React.createElement(
                "div",
                { className: "col2" },
                "Opleiding:"
              ),
              React.createElement(
                "div",
                { className: "col3" },
                "Jaar:"
              ),
              React.createElement("div", { className: "clear" })
            ),
            eLitems
          );
        }

        if (title === 'Ervaring') {
          var _litems = this.props.content.items;
          var eLitems = _litems.map(function (litem, index) {
            return React.createElement(
              "li",
              { key: index },
              React.createElement(
                "div",
                { className: "col1" },
                litem.Werkgever
              ),
              React.createElement(
                "div",
                { className: "col2" },
                litem.Functie
              ),
              React.createElement(
                "div",
                { className: "col3" },
                litem.Jaar
              ),
              React.createElement("div", { className: "clear" })
            );
          });
          return React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                "div",
                { className: "col1" },
                "Werkgever:"
              ),
              React.createElement(
                "div",
                { className: "col2" },
                "Functie:"
              ),
              React.createElement(
                "div",
                { className: "col3" },
                "Jaar:"
              ),
              React.createElement("div", { className: "clear" })
            ),
            eLitems
          );
        }

        if (title === 'UX Design') {
          var lists = this.props.content.lists;
          var eLists = lists.map(function (list, index) {
            return React.createElement(
              "div",
              { key: index, className: "col33" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  list[0]
                ),
                React.createElement(
                  "li",
                  null,
                  list[1]
                ),
                React.createElement(
                  "li",
                  null,
                  list[2]
                ),
                React.createElement(
                  "li",
                  null,
                  list[3]
                ),
                React.createElement(
                  "li",
                  null,
                  list[4]
                )
              )
            );
          });
          return React.createElement(
            "div",
            null,
            eLists,
            React.createElement("div", { className: "clear" })
          );
        }

        if (title === 'Development') {
          var _lists = this.props.content.lists;
          var eLists = _lists.map(function (list, index) {
            return React.createElement(
              "div",
              { key: index, className: "col33" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  list[0]
                ),
                React.createElement(
                  "li",
                  null,
                  list[1]
                ),
                React.createElement(
                  "li",
                  null,
                  list[2]
                ),
                React.createElement(
                  "li",
                  null,
                  list[3]
                ),
                React.createElement(
                  "li",
                  null,
                  list[4]
                )
              )
            );
          });
          return React.createElement(
            "div",
            null,
            eLists,
            React.createElement("div", { className: "clear" })
          );
        }

        if (title === 'Methode') {
          var _lists2 = this.props.content.lists;
          var eLists = _lists2.map(function (list, index) {
            return React.createElement(
              "div",
              { key: index, className: "col33" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  list[0]
                ),
                React.createElement(
                  "li",
                  null,
                  list[1]
                ),
                React.createElement(
                  "li",
                  null,
                  list[2]
                ),
                React.createElement(
                  "li",
                  null,
                  list[3]
                ),
                React.createElement(
                  "li",
                  null,
                  list[4]
                ),
                React.createElement(
                  "li",
                  null,
                  list[5]
                )
              )
            );
          });
          return React.createElement(
            "div",
            null,
            eLists,
            React.createElement("div", { className: "clear" })
          );
        }

        return frag;
      }
    }]);

    return SectionTxt;
  }(React.Component);

  var eSectionTxt = React.createElement(SectionTxt, null);

  // Section component

  var Section = function (_React$Component2) {
    _inherits(Section, _React$Component2);

    function Section(props) {
      _classCallCheck(this, Section);

      return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));
    }

    _createClass(Section, [{
      key: "render",
      value: function render() {
        var _this3 = this;

        var classNames = this.props.content.title;
        if (!this.props.appState.wrapperState) {
          classNames += ' section-hidden';
          if (this.props.content.title === this.props.appState.sectionFocus) {
            classNames += ' selected';
          }
        }

        return React.createElement(
          "section",
          { ref: function ref(eSection) {
              _this3.el = eSection;
            }, onClick: function onClick(e) {
              return _this3.props.onCVclick(e, _this3);
            }, className: classNames },
          React.createElement(
            "h2",
            null,
            this.props.content.title
          ),
          React.createElement(SectionTxt, { content: this.props.content }),
          React.createElement(
            "div",
            { className: "section-button" },
            "..meer over ",
            this.props.content.title
          )
        );
      }
    }]);

    return Section;
  }(React.Component);

  var eSection = React.createElement(Section, null);

  // Wrapper component paper cv

  var Wrapper = function (_React$Component3) {
    _inherits(Wrapper, _React$Component3);

    function Wrapper(props) {
      _classCallCheck(this, Wrapper);

      return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));
    }

    _createClass(Wrapper, [{
      key: "render",
      value: function render() {
        var _this5 = this;

        var classNames = 'cv_header';
        var fotoClass = 'cv_foto';
        if (!this.props.appState.wrapperState) {
          classNames += ' section-hidden';
          fotoClass += ' foto-hidden';
        }
        var sections = this.props.content.content_nl.sections;

        // map section objects to section components
        var eSections = sections.map(function (section) {
          return React.createElement(Section, { key: section.title, content: section, onCVclick: _this5.props.onCVclick, appState: _this5.props.appState });
        });

        if (!this.props.appState.mobileState) {
          return React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement(
              "section",
              { className: classNames },
              React.createElement(
                "h1",
                null,
                this.props.content.content_nl.header
              ),
              React.createElement(
                "div",
                { className: "cv_top" },
                React.createElement(
                  "h1",
                  null,
                  this.props.content.content_nl.sections[0].items.Naam
                ),
                React.createElement(
                  "h2",
                  null,
                  this.props.content.content_nl.subheader
                )
              ),
              React.createElement(
                "div",
                { className: "cv_inkstrip" },
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)
              )
            ),
            eSections,
            React.createElement("div", { className: fotoClass })
          );
        } else {
          return null;
        }
      }
    }]);

    return Wrapper;
  }(React.Component);

  var eWrapper = React.createElement(Wrapper, { content: json_content });

  var Slide = function (_React$Component4) {
    _inherits(Slide, _React$Component4);

    function Slide() {
      _classCallCheck(this, Slide);

      return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));
    }

    _createClass(Slide, [{
      key: "render",
      value: function render() {
        var slide = this.props.slide;
        var period_h3 = '';
        if (slide.Jaar) {
          period_h3 = React.createElement(
            "h4",
            null,
            "werkzaam: ",
            slide.Jaar
          );
        }
        // innerHTML method used for slide content, maybe change later
        return React.createElement(
          "div",
          { className: "slide" },
          React.createElement(
            "h2",
            null,
            slide.title
          ),
          React.createElement("div", { dangerouslySetInnerHTML: { __html: slide.slide_text } }),
          period_h3
        );
      }
    }]);

    return Slide;
  }(React.Component);

  var eSlide = React.createElement(Slide, null);

  var Navdot = function (_React$Component5) {
    _inherits(Navdot, _React$Component5);

    function Navdot() {
      _classCallCheck(this, Navdot);

      return _possibleConstructorReturn(this, (Navdot.__proto__ || Object.getPrototypeOf(Navdot)).apply(this, arguments));
    }

    _createClass(Navdot, [{
      key: "render",
      value: function render() {
        var classNames = "carousel-button";
        if (this.props.indexDot === this.props.activeDot) {
          classNames += " active";
        }
        return React.createElement("div", { onClick: this.props.onClick, className: classNames });
      }
    }]);

    return Navdot;
  }(React.Component);

  var eNavdot = React.createElement(Navdot, null);

  // Carousel component

  var Carousel = function (_React$Component6) {
    _inherits(Carousel, _React$Component6);

    function Carousel(props) {
      _classCallCheck(this, Carousel);

      var _this8 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

      _this8.activeDot = { index: 0 };
      return _this8;
    }

    _createClass(Carousel, [{
      key: "handleClick",
      value: function handleClick(e, i) {
        var aNav = [i, this.props.content.expanded.slides.length];
        this.props.onNAVclick(e, aNav);
        this.forceUpdate();
      }
    }, {
      key: "render",
      value: function render() {
        var _this9 = this;

        var classNames = 'carousel ' + this.props.content.title;
        if (this.props.content.title === this.props.appState.sectionFocus) {
          classNames = 'carousel ' + this.props.content.title + ' active';
        }

        var slideState = { left: -270 * this.props.appState.cardNavIndex };
        if (this.props.appState.mobileState) {
          slideState = { left: -86 * this.props.appState.cardNavIndex + 'vw' };
        }
        var activeDot = this.props.appState.cardNavIndex;

        var slides = this.props.content.expanded.slides;
        // map section objects to Carousel components
        var eSlides = slides.map(function (slide, index) {
          return React.createElement(Slide, { key: index, slide: slide });
        });

        var eButtons = slides.map(function (slide, index) {
          return React.createElement(Navdot, { key: index, onClick: function onClick(e) {
              return _this9.handleClick(e, index);
            }, indexDot: index, activeDot: activeDot });
        });
        var icon = this.props.content.icon;
        var bg = { backgroundImage: 'url("img/icons/' + icon + '")' };

        return React.createElement(
          "div",
          { className: classNames },
          React.createElement(
            "h3",
            null,
            this.props.content.title
          ),
          React.createElement(
            "div",
            { className: "carousel-content", style: slideState },
            eSlides
          ),
          React.createElement("div", { className: "icon", style: bg, onClick: function onClick(e) {
              return _this9.props.onCVclick(e);
            } }),
          React.createElement(
            "div",
            { className: "carousel-nav" },
            eButtons
          )
        );
      }
    }]);

    return Carousel;
  }(React.Component);

  var eCarousel = React.createElement(Carousel, null);

  var CarouselmenuLi = function (_React$Component7) {
    _inherits(CarouselmenuLi, _React$Component7);

    function CarouselmenuLi(props) {
      _classCallCheck(this, CarouselmenuLi);

      return _possibleConstructorReturn(this, (CarouselmenuLi.__proto__ || Object.getPrototypeOf(CarouselmenuLi)).call(this, props));
    }

    _createClass(CarouselmenuLi, [{
      key: "render",
      value: function render() {
        var bg = { backgroundImage: 'url("img/icons/' + this.props.section.icon + '")' };

        return React.createElement(
          "li",
          { onClick: this.props.onClick, style: bg },
          React.createElement(
            "h3",
            null,
            this.props.section.title
          )
        );
      }
    }]);

    return CarouselmenuLi;
  }(React.Component);

  var eCarouselmenuLi = React.createElement(CarouselmenuLi, null);

  // CarouselContainer component

  var Carouselcontainer = function (_React$Component8) {
    _inherits(Carouselcontainer, _React$Component8);

    function Carouselcontainer(props) {
      _classCallCheck(this, Carouselcontainer);

      var _this11 = _possibleConstructorReturn(this, (Carouselcontainer.__proto__ || Object.getPrototypeOf(Carouselcontainer)).call(this, props));

      _this11.onFABclick = _this11.onFABclick.bind(_this11);
      return _this11;
    }

    _createClass(Carouselcontainer, [{
      key: "onFABclick",
      value: function onFABclick(e) {
        this.props.onNavclick(e, 'fw');
      }
    }, {
      key: "render",
      value: function render() {
        var _this12 = this;

        var displayState = {};
        var classNamesC = 'carousel-container';
        if (this.props.appState.carouselState) {
          classNamesC = 'carousel-container active';
        }

        var classNames = 'hamburger--arrow';
        if (this.props.appState.carouselMenu) {
          var ctrans = 'translate(214px, 0px)';
          if (this.props.appState.mobileState) {
            ctrans = 'translate(100vw, 0px)';
          }
          displayState = { transform: ctrans };
          classNames = 'hamburger--arrow is-active';
        }

        var sections = this.props.content.content_nl.sections;
        // map section objects to Carousel components
        var eCarousels = sections.map(function (section) {
          return React.createElement(Carousel, { key: section.title, content: section, appState: _this12.props.appState, onCVclick: _this12.props.onCVclick, onNAVclick: _this12.props.onNavclick });
        });
        return React.createElement(
          "div",
          { className: classNamesC, style: displayState },
          React.createElement(
            "div",
            { className: classNames, onClick: this.props.onCVclick },
            React.createElement(
              "div",
              { className: "hamburger-box" },
              React.createElement("div", { className: "hamburger-inner" })
            )
          ),
          eCarousels,
          React.createElement("div", { onClick: this.onFABclick, className: "carousel-nav-fab" })
        );
      }
    }]);

    return Carouselcontainer;
  }(React.Component);

  var eCarouselcontainer = React.createElement(Carouselcontainer, { content: json_content });

  var BDSlide = function (_React$Component9) {
    _inherits(BDSlide, _React$Component9);

    function BDSlide() {
      _classCallCheck(this, BDSlide);

      return _possibleConstructorReturn(this, (BDSlide.__proto__ || Object.getPrototypeOf(BDSlide)).apply(this, arguments));
    }

    _createClass(BDSlide, [{
      key: "render",
      value: function render() {
        var slide = this.props.content;
        var bgurl = slide.resource;

        // skip undefined bgslides
        if (bgurl === 'url') {
          return React.createElement("div", { className: "bdslide" });
        }

        var winX = this.props.appState.winX;
        var winY = this.props.appState.winY;

        if (bgurl.slice(-3) === 'mp4') {
          var bg = { width: winX + 'px' };
          return React.createElement(
            "div",
            { className: "bdslide", style: bg },
            React.createElement(
              "video",
              { autoPlay: "true", loop: "true" },
              React.createElement("source", { type: "video/mp4", src: bgurl })
            )
          );
        } else {
          var _bg = { backgroundImage: 'url("../' + bgurl + '")', width: winX + 'px', height: winY + 'px' };
          return React.createElement("div", { className: "bdslide", style: _bg });
        }
      }
    }]);

    return BDSlide;
  }(React.Component);

  var eBDSlide = React.createElement(BDSlide, null);

  // Backdrop Carousel component

  var BDCarousel = function (_React$Component10) {
    _inherits(BDCarousel, _React$Component10);

    function BDCarousel(props) {
      _classCallCheck(this, BDCarousel);

      var _this14 = _possibleConstructorReturn(this, (BDCarousel.__proto__ || Object.getPrototypeOf(BDCarousel)).call(this, props));

      var css = 'translate(0px, 0px)';
      _this14.slideState = { transform: css };
      return _this14;
    }

    // TODO change to state change


    _createClass(BDCarousel, [{
      key: "render",
      value: function render() {
        var _this15 = this;

        var classNames = 'bdcarousel ' + this.props.content.title;
        if (this.props.content.title === this.props.appState.sectionFocus) {
          classNames = 'bdcarousel ' + this.props.content.title + ' active';
        }
        var winX = this.props.appState.winX;
        var cleft = -winX * this.props.appState.cardNavIndex;
        var ctrans = 'translate(' + cleft + 'px, 0px)';
        var slideState = {
          transform: ctrans
        };
        if (this.props.content.expanded.single_bg) {
          slideState = {};
        }
        var slides = this.props.content.expanded.slides;
        // map section objects to Carousel components
        var eSlides = slides.map(function (slide, index) {
          return React.createElement(BDSlide, { key: index, content: slide, appState: _this15.props.appState });
        });

        return React.createElement(
          "div",
          { className: classNames },
          React.createElement(
            "div",
            { className: "bdcarousel-content", style: slideState },
            eSlides
          )
        );
      }
    }]);

    return BDCarousel;
  }(React.Component);

  var eBDCarousel = React.createElement(BDCarousel, null);

  var Backdrop = function (_React$Component11) {
    _inherits(Backdrop, _React$Component11);

    function Backdrop(props) {
      _classCallCheck(this, Backdrop);

      return _possibleConstructorReturn(this, (Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).call(this, props));
    }

    _createClass(Backdrop, [{
      key: "render",
      value: function render() {
        var _this17 = this;

        var sections = this.props.content.content_nl.sections;
        // map section objects to Backdrop carousel components
        var eBDCarousels = sections.map(function (section) {
          return React.createElement(BDCarousel, { key: section.title, content: section, appState: _this17.props.appState });
        });
        if (!this.props.appState.mobileState) {
          return React.createElement(
            "div",
            { className: "backdrop" },
            eBDCarousels
          );
        } else {
          return null;
        }
      }
    }]);

    return Backdrop;
  }(React.Component);

  var eBackdrop = React.createElement(Backdrop, { content: json_content });

  // Baselayer component

  var Baselayer = function (_React$Component12) {
    _inherits(Baselayer, _React$Component12);

    function Baselayer(props) {
      _classCallCheck(this, Baselayer);

      var _this18 = _possibleConstructorReturn(this, (Baselayer.__proto__ || Object.getPrototypeOf(Baselayer)).call(this, props));

      _this18.handleCVclick = _this18.handleCVclick.bind(_this18);
      _this18.handleNAVclick = _this18.handleNAVclick.bind(_this18);
      _this18.handleMobile = _this18.handleMobile.bind(_this18);
      _this18.updateWindowDimensions = _this18.updateWindowDimensions.bind(_this18);

      _this18.state = {
        mobileState: false,
        wrapperState: true,
        carouselState: false,
        carouselMenu: false,
        sectionFocus: 'Home',
        cardNavIndex: 0,
        cardTotal: 0,
        winX: '0px',
        winY: '0px',
        actor: { 'x': 800, 'y': 200, 'a': 1, 'px': -1000, 'py': 0, 'tx': 0, 'ty': 0, 'sx': 1, 'sy': 1 }
      };

      return _this18;
    }

    _createClass(Baselayer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
      }
    }, {
      key: "updateWindowDimensions",
      value: function updateWindowDimensions() {
        this.setState({ winX: window.innerWidth, winY: window.innerHeight });
        if (window.innerWidth < 480) {
          this.handleMobile(window.innerWidth);
          this.setState({ mobileState: true });
        } else {
          this.setState({ mobileState: false });
        }
      }
    }, {
      key: "handleMobile",
      value: function handleMobile(winX) {
        // switch from cv to detail view
        this.setState({
          wrapperState: false,
          carouselState: true,
          sectionFocus: 'Personalia',
          cardTotal: 2
        });
      }
    }, {
      key: "handleCVclick",
      value: function handleCVclick(e, oSection) {

        if (this.state.wrapperState === false) {
          // toggle carousel menu on hamburger click
          this.setState({
            carouselMenu: this.state.carouselMenu ? false : true
          });
        } else {
          var el = oSection.el,
              elx = el.clientWidth,
              ely = el.clientHeight;
          var rect = el.getBoundingClientRect();

          var carX = this.state.winX * 0.25;
          var carY = this.state.winY * 0.25;

          var scaleY = 450 / el.clientHeight;

          this.setState({ actor: { 'x': elx, 'y': ely, 'a': 1, 'px': rect.left, 'py': rect.top, 'tx': 0, 'ty': 0, 'sx': 1, 'sy': 1 } });
          this.setState({ actor: { 'x': elx, 'y': ely, 'a': 0, 'px': rect.left, 'py': rect.top, 'tx': carX - rect.left, 'ty': carY - rect.top, 'sx': 0.4, 'sy': scaleY } });

          this.setState({
            wrapperState: false,
            carouselState: true,
            sectionFocus: oSection.props.content.title,
            cardTotal: oSection.props.content.expanded.slides.length
          });
        }
      }
    }, {
      key: "handleMenu",
      value: function handleMenu(e, sectionName, cardTotal) {
        if (sectionName === 'cv') {
          this.setState({
            wrapperState: true,
            carouselState: false,
            carouselMenu: false,
            sectionFocus: 'Home',
            cardNavIndex: 0,
            cardTotal: 0,
            actor: { 'x': 800, 'y': 200, 'a': 1, 'px': -1000, 'py': 0, 'tx': 0, 'ty': 0, 'sx': 1, 'sy': 1 }
          });
        } else {
          this.setState({
            sectionFocus: sectionName,
            cardNavIndex: 0,
            carouselMenu: false,
            cardTotal: cardTotal
          });
        }
      }
    }, {
      key: "handleNAVclick",
      value: function handleNAVclick(e, aNav) {
        if (aNav === 'fw') {
          var ct = this.state.cardTotal - 1;
          var cc = this.state.cardNavIndex;
          if (cc < ct) {
            this.setState({ cardNavIndex: cc + 1 });
          } else {
            this.setState({ cardNavIndex: 0 });
          }
        } else {
          this.setState({ cardNavIndex: aNav[0] });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this19 = this;

        var sections = this.props.content.content_nl.sections;
        var classNames = 'baselayer tint_' + this.state.sectionFocus;

        var displayState = 'carousel-menu';
        if (this.state.carouselMenu) {
          displayState += ' active';
        }
        var bgLi = { backgroundImage: 'url("img/icons/doc-128.png")' };
        // map section objects to section components
        var eLinks = sections.map(function (section) {
          return React.createElement(CarouselmenuLi, { key: section.title, onClick: function onClick(e) {
              return _this19.handleMenu(e, section.title, section.expanded.slides.length);
            }, section: section });
        });
        var actor = this.state.actor;
        var ctrans = 'translate(' + actor.tx + 'px, ' + actor.ty + 'px) scale(' + actor.sx + ',' + actor.sy + ')';
        var actorCSS = { width: actor.x, height: actor.y, opacity: actor.a, left: actor.px, top: actor.py, transform: ctrans };

        return React.createElement(
          "div",
          { className: classNames },
          React.createElement(Backdrop, { content: json_content, appState: this.state }),
          React.createElement("div", { className: "cfilter" }),
          React.createElement(Wrapper, { content: json_content, appState: this.state, onCVclick: this.handleCVclick }),
          React.createElement("div", { className: "transition-actor", style: actorCSS }),
          React.createElement(
            "div",
            { className: displayState },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                { onClick: function onClick(e) {
                    return _this19.handleMenu(e, 'cv');
                  } },
                React.createElement(
                  "h3",
                  null,
                  "Terug naar CV"
                )
              ),
              eLinks
            )
          ),
          React.createElement(Carouselcontainer, { content: json_content, appState: this.state, onCVclick: this.handleCVclick, onNavclick: this.handleNAVclick })
        );
      }
    }]);

    return Baselayer;
  }(React.Component);

  var eBaselayer = React.createElement(Baselayer, { content: json_content });

  ReactDOM.render(eBaselayer, document.getElementById('root'));
})();
//# sourceMappingURL=cv_react-compiled.js.map

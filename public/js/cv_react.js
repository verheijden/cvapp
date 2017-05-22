(function () {

    


// SectionTxt component
class SectionTxt extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    var frag = <div>json not handled</div>;
    var title = this.props.content.title;
    
    if (title === 'Personalia') {
      const items = this.props.content.items;
      return (
        <div> 
          <div className="col1">
            <ul>
              <li>Email:</li>
              <li>Telefoonnummer:</li>
              <li>Woonplaats:</li>
              <li>Geboren:</li>
              <li>Nationaliteit:</li>
            </ul>
          </div>
          <div className="col2">  
            <ul>
              <li>{items.Email}</li>
              <li>{items.Telefoonnummer}</li>
              <li>{items.Woonplaats}</li>
              <li>{items.Geboortedatum}</li>
              <li>{items.Nationaliteit}</li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      );
    }

    if (title === 'Profiel') {
      return (
        <div dangerouslySetInnerHTML={{__html: this.props.content.description}}> 
        </div>
      );
    }

    if (title === 'Educatie') {
      const litems = this.props.content.items;
      var eLitems = litems.map((litem, index) =>
        <li key={index}>
          <div className="col1">{litem.Instituut}</div>
          <div className="col2">{litem.Opleiding}</div>
          <div className="col3">{litem.Jaar}</div>
          <div className="clear"></div>
        </li>
      );
      return ( 
        <ul>
          <li>
            <div className="col1">Instituut:</div>
            <div className="col2">Opleiding:</div>
            <div className="col3">Jaar:</div>
            <div className="clear"></div>
          </li>
          {eLitems}
        </ul> );
    }

    if (title === 'Ervaring') {
      const litems = this.props.content.items;
      var eLitems = litems.map((litem, index) =>
        <li key={index}>
          <div className="col1">{litem.Werkgever}</div>
          <div className="col2">{litem.Functie}</div>
          <div className="col3">{litem.Jaar}</div>
          <div className="clear"></div>
        </li>
      );
      return ( 
        <ul>
          <li>
            <div className="col1">Werkgever:</div>
            <div className="col2">Functie:</div>
            <div className="col3">Jaar:</div>
            <div className="clear"></div>
          </li>
          {eLitems}
        </ul> );
    }

    if (title === 'UX Design') {
      const lists = this.props.content.lists;
      var eLists = lists.map((list, index) =>
        <div key={index} className="col33">
          <ul>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
            <li>{list[4]}</li>
          </ul>
        </div>
      );
      return ( <div>{eLists}<div className="clear" /></div> );
    }  

    if (title === 'Development') {
      const lists = this.props.content.lists;
      var eLists = lists.map((list, index) =>
        <div key={index} className="col33">
          <ul>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
            <li>{list[4]}</li>
          </ul>
        </div>
      );
      return ( <div>{eLists}<div className="clear" /></div> );
    }  

    if (title === 'Methode') {
      const lists = this.props.content.lists;
      var eLists = lists.map((list, index) =>
        <div key={index} className="col33">
          <ul>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
            <li>{list[4]}</li>
            <li>{list[5]}</li>
          </ul>
        </div>
      );
      return ( <div>{eLists}<div className="clear" /></div> );
    }  

    return frag;
  }
}
const eSectionTxt = <SectionTxt />;


// Section component
class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classNames = this.props.content.title;
    if (!this.props.appState.wrapperState) {
      classNames += ' section-hidden';
      if (this.props.content.title === this.props.appState.sectionFocus){
        classNames += ' selected';
      }
    }
    
    return (
      <section ref={(eSection) => { this.el = eSection; }} onClick={(e) => this.props.onCVclick(e, this)} className={classNames}>
        <h2>{this.props.content.title}</h2>
        <SectionTxt content={this.props.content} />
        <div className="section-button">..meer over {this.props.content.title}</div>
      </section>
    );   
  }
}
const eSection = <Section />;


// Wrapper component paper cv
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let classNames = 'cv_header';
    let fotoClass = 'cv_foto';
    if (!this.props.appState.wrapperState) {
      classNames += ' section-hidden';
      fotoClass += ' foto-hidden';
    }
    const sections = this.props.content.content_nl.sections;
    
    // map section objects to section components
    var eSections = sections.map((section) =>
      <Section key={section.title} content={section} onCVclick={this.props.onCVclick} appState={this.props.appState} />
    );

    if (!this.props.appState.mobileState) {
      return ( 
        <div className="wrapper">
          <section className={classNames}>
            <h1>{this.props.content.content_nl.header}</h1>
            <div className="cv_top">
              <h1>{this.props.content.content_nl.sections[0].items.Naam}</h1>
              <h2>{this.props.content.content_nl.subheader}</h2>
            </div>
            <div className="cv_inkstrip"><div /><div /><div /><div /><div /><div /></div>
          </section>
          {eSections}
          <div className={fotoClass}></div>
        </div> );  
    } else {
      return null;
    }
    
  }  
}
const eWrapper = <Wrapper content={json_content}  />;


class Slide extends React.Component {
  render(){
    const slide = this.props.slide;
    let period_h3 = '';
    if (slide.Jaar) { period_h3 = <h4>werkzaam: {slide.Jaar}</h4>; }
    // innerHTML method used for slide content, maybe change later
    return (
      <div className="slide">
        <h2>{slide.title}</h2>
        <div dangerouslySetInnerHTML={{__html: slide.slide_text}}></div>
        {period_h3}
      </div>
    );
  }
}
const eSlide = <Slide />;

class Navdot extends React.Component {
  render(){
    let classNames = "carousel-button";
    if (this.props.indexDot === this.props.activeDot) {
      classNames += " active";
    }
    return (
      <div onClick={this.props.onClick} className={classNames}></div>
    );
  }
}
const eNavdot = <Navdot />;

// Carousel component
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.activeDot = {index: 0};
  }
  
  handleClick(e, i) {
    let aNav = [i, this.props.content.expanded.slides.length];
    this.props.onNAVclick(e, aNav);
    this.forceUpdate();
  }

  render() {
    
    let classNames = 'carousel ' + this.props.content.title;
    if (this.props.content.title === this.props.appState.sectionFocus) {
      classNames = 'carousel ' + this.props.content.title + ' active';
    }
    
    let slideState = { left: -270*this.props.appState.cardNavIndex};
    if (this.props.appState.mobileState) {
        slideState = { left: -86*this.props.appState.cardNavIndex+'vw'};
      }
    let activeDot = this.props.appState.cardNavIndex;
    
    const slides = this.props.content.expanded.slides;
    // map section objects to Carousel components
    var eSlides = slides.map((slide, index) =>
      <Slide key={index} slide={slide} />
    );

    var eButtons = slides.map((slide, index) =>
      <Navdot key={index} onClick={(e) => this.handleClick(e, index)} indexDot={index} activeDot={activeDot} />
    );
    const icon = this.props.content.icon;
    let bg = {backgroundImage: 'url("img/icons/'+icon+'")'}; 
    
    return (
      <div className={classNames}>
        <h3>{this.props.content.title}</h3>
        <div className="carousel-content" style={slideState}>
          {eSlides}
        </div>
        <div className="icon" style={bg} onClick={(e) => this.props.onCVclick(e)}></div>
        <div className="carousel-nav">
          {eButtons}
        </div>
      </div>
    );   
  }
}
const eCarousel = <Carousel />;


class CarouselmenuLi extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let bg = {backgroundImage: 'url("img/icons/'+this.props.section.icon+'")'}; 
    
    return (
      <li onClick={this.props.onClick} style={bg}><h3>{this.props.section.title}</h3></li>
    )
  }
}
const eCarouselmenuLi = <CarouselmenuLi />;





// CarouselContainer component
class Carouselcontainer extends React.Component {
  constructor(props) {
    super(props);
    this.onFABclick = this.onFABclick.bind(this);
  }

  onFABclick(e) {
    this.props.onNavclick(e, 'fw');
  }

  render() {
    let displayState = {};
    let classNamesC = 'carousel-container';
    if (this.props.appState.carouselState) {
      classNamesC = 'carousel-container active';
    }
    

    let classNames = 'hamburger--arrow';
    if (this.props.appState.carouselMenu) {
      var ctrans = 'translate(214px, 0px)';
      if (this.props.appState.mobileState) {
        ctrans = 'translate(100vw, 0px)';
      }
      displayState = {transform: ctrans};
      classNames = 'hamburger--arrow is-active';
    }
    
    const sections = this.props.content.content_nl.sections;
    // map section objects to Carousel components
    var eCarousels = sections.map((section) =>
      <Carousel key={section.title} content={section} appState={this.props.appState} onCVclick={this.props.onCVclick} onNAVclick={this.props.onNavclick} />
    );
    return ( 
      <div className={classNamesC} style={displayState}>
        <div className={classNames} onClick={this.props.onCVclick}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        {eCarousels}
        <div onClick={this.onFABclick} className="carousel-nav-fab"></div>
      </div> 
    );  
  }
}
const eCarouselcontainer = <Carouselcontainer content={json_content} />;


class BDSlide extends React.Component {
  render(){
    const slide = this.props.content;
    const bgurl = slide.resource;
    
    // skip undefined bgslides
    if (bgurl === 'url') { return (<div className="bdslide" />);}

    let winX = this.props.appState.winX;
    let winY = this.props.appState.winY;

    if(bgurl.slice(-3) === 'mp4'){
      let bg = {width: winX+'px'}; 
      return (
        <div className="bdslide" style={bg}>
          <video autoPlay="true" loop="true">
            <source type="video/mp4" src={bgurl} />
          </video> 
        </div>
      );
    } else {
      let bg = {backgroundImage: 'url("../'+bgurl+'")', width: winX+'px', height: winY+'px'}; 
      return (
        <div className="bdslide" style={bg} />
      );
    }  
  }
}
const eBDSlide = <BDSlide />;


// Backdrop Carousel component
class BDCarousel extends React.Component {
  constructor(props) {
    super(props);
    var css = 'translate(0px, 0px)';
    this.slideState = {transform: css};
  }

  // TODO change to state change
  render() {

    let classNames = 'bdcarousel ' + this.props.content.title;
    if (this.props.content.title === this.props.appState.sectionFocus) {
      classNames = 'bdcarousel ' + this.props.content.title + ' active';
    }
    let winX = this.props.appState.winX;
    var cleft = -winX*this.props.appState.cardNavIndex;
    var ctrans = 'translate('+cleft+'px, 0px)';
    let slideState = {
        transform: ctrans 
    };
    if (this.props.content.expanded.single_bg) {
      slideState = {};
    }
    const slides = this.props.content.expanded.slides;
    // map section objects to Carousel components
    var eSlides = slides.map((slide, index) =>
      <BDSlide key={index} content={slide} appState={this.props.appState} />
    );

    return (
      <div className={classNames}>
        <div className="bdcarousel-content" style={slideState}>
          {eSlides}
        </div>
      </div>
    );   
  }
}
const eBDCarousel = <BDCarousel />;


class Backdrop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const sections = this.props.content.content_nl.sections;
    // map section objects to Backdrop carousel components
    var eBDCarousels = sections.map((section) =>
      <BDCarousel key={section.title} content={section} appState={this.props.appState} />
    );
    if (!this.props.appState.mobileState) {
      return ( <div className="backdrop">{eBDCarousels}</div> );
    } else {
      return null;
    }  
  }
}
const eBackdrop = <Backdrop content={json_content} />;


// Baselayer component
class Baselayer extends React.Component {
  constructor(props) {
    super(props);
    this.handleCVclick = this.handleCVclick.bind(this);
    this.handleNAVclick = this.handleNAVclick.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      mobileState: false,
      wrapperState: true,
      carouselState: false,
      carouselMenu: false,
      sectionFocus: 'Home',
      cardNavIndex: 0,
      cardTotal: 0,
      winX: '0px',
      winY: '0px',
      actor: {'x': 800, 'y': 200, 'a': 1, 'px': -1000, 'py': 0, 'tx': 0, 'ty': 0, 'sx': 1, 'sy': 1}
    };
    
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ winX: window.innerWidth, winY: window.innerHeight });
    if (window.innerWidth < 480) {
      this.handleMobile(window.innerWidth);
      this.setState({mobileState: true});
    } else {
      this.setState({mobileState: false});
    }
  }

  handleMobile(winX){
    // switch from cv to detail view
    this.setState({
      wrapperState: false, 
      carouselState: true, 
      sectionFocus: 'Personalia',
      cardTotal: 2
    });
  }

  handleCVclick(e, oSection) {

    if (this.state.wrapperState === false) {
      // toggle carousel menu on hamburger click
      this.setState({
        carouselMenu: this.state.carouselMenu ? false : true
      });
    } else {
      let el = oSection.el,
          elx = el.clientWidth,
          ely = el.clientHeight;
      let rect = el.getBoundingClientRect();

      let carX = this.state.winX * 0.25; 
      let carY = this.state.winY * 0.25;

      let scaleY = 450 / el.clientHeight;

      this.setState({ actor:{'x': elx, 'y': ely, 'a': 1, 'px': rect.left, 'py': rect.top, 'tx': 0, 'ty': 0, 'sx': 1, 'sy': 1} });
      this.setState({ actor:{'x': elx, 'y': ely, 'a': 0, 'px': rect.left, 'py': rect.top, 'tx': carX-rect.left, 'ty': carY-rect.top, 'sx': 0.4, 'sy': scaleY} });

      this.setState({
        wrapperState: false, 
        carouselState: true, 
        sectionFocus: oSection.props.content.title,
        cardTotal: oSection.props.content.expanded.slides.length
      });
    }
  }

  handleMenu(e, sectionName, cardTotal) {
    if (sectionName === 'cv') {
      this.setState({
        wrapperState: true,
        carouselState: false,
        carouselMenu: false,
        sectionFocus: 'Home',
        cardNavIndex: 0,
        cardTotal: 0,
        actor: {'x': 800, 'y': 200, 'a': 1, 'px': -1000, 'py': 0, 'tx': 0, 'ty': 0, 'sx': 1, 'sy': 1}
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

  handleNAVclick(e, aNav) {
    if (aNav === 'fw') {
      let ct = this.state.cardTotal-1;
      let cc = this.state.cardNavIndex;
      if (cc < ct) { 
        this.setState({ cardNavIndex: cc + 1 });
      } else {
        this.setState({ cardNavIndex: 0 });
      }
    } else {
      this.setState({ cardNavIndex: aNav[0] });
    }
  }
    
  render() {

    const sections = this.props.content.content_nl.sections;
    let classNames = 'baselayer tint_' + this.state.sectionFocus;
    
    let displayState = 'carousel-menu';
    if (this.state.carouselMenu) {
      displayState += ' active';
    }
    let bgLi = {backgroundImage: 'url("img/icons/doc-128.png")'};
    // map section objects to section components
    var eLinks = sections.map((section) =>
      <CarouselmenuLi key={section.title} onClick={(e) => this.handleMenu(e, section.title, section.expanded.slides.length)} section={section} />
    );
    let actor = this.state.actor;
    var ctrans = 'translate('+actor.tx+'px, '+actor.ty+'px) scale('+actor.sx+','+actor.sy+')';
    let actorCSS = {width: actor.x, height: actor.y, opacity: actor.a, left: actor.px, top: actor.py, transform: ctrans};
      
    return ( 
      <div className={classNames}>
        <Backdrop content={json_content} appState={this.state} />
        <div className="cfilter"></div>
        <Wrapper content={json_content} appState={this.state} onCVclick={this.handleCVclick} />
        <div className="transition-actor" style={actorCSS} />
        <div className={displayState}>
          <ul>
            <li onClick={(e) => this.handleMenu(e, 'cv')}><h3>Terug naar CV</h3></li>
            {eLinks}
          </ul>
        </div>
        <Carouselcontainer content={json_content} appState={this.state} onCVclick={this.handleCVclick} onNavclick={this.handleNAVclick} />
      </div>
    );
  }
}
const eBaselayer = <Baselayer content={json_content} />;

ReactDOM.render(
  eBaselayer, document.getElementById('root')  
);


})();




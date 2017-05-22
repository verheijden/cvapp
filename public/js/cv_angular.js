// module setter
var cvapp = angular.module('cvApp', []); // ngRoute dependency later toevoegen, evt ngAnimate. global later verwijderen
// module getter
cvapp
  .controller('cvdocController', cvdocController)
  .controller('sectionController', sectionController)
  .controller('menuController', menuController)
  .factory('sectionFactory', sectionFactory)
  .factory('stateFactory', stateFactory)
  .constant('GLOBALS', {
    cvUrl: 'content/cvtext.json'
  });


cvdocController.$inject = ['sectionFactory'];
function cvdocController(sectionFactory) {

  var vm = this;
  
  sectionFactory.getsections()
    .success(function (sections) {
      vm.sections = sections.content_nl.sections; 
    })
    .error(function (err) {
      console.info('Er is een fout opgetreden');
    });
}




menuController.$inject = ['sectionFactory', 'stateFactory', '$rootScope'];
function menuController(sectionFactory, stateFactory, $rootScope) {

  var vm = this;
  vm.selectSection = function (index) {
    console.dir(index);
    stateFactory.setSection(index);
    $rootScope.$broadcast('stateChange', {
        section: index
    });
  };

  sectionFactory.getsections()
    .success(function (sections) {
      vm.sections = sections.content_nl.sections;
    })
    .error(function (err) {
      console.info('Er is een fout opgetreden');
    });
}




sectionController.$inject = ['sectionFactory', '$element', 'stateFactory', '$scope', '$rootScope'];
function sectionController(sectionFactory, $element, stateFactory, $scope, $rootScope) {
  
  var vm = this;
  vm.sectionclass = "section_cv";
  vm.selected = false;
  vm.index = {};
  
  $scope.$on('stateChange', function(event, data) {
    console.info('onevent :' + data.section);
    vm.handleSection(data.section);
  });

  // console.dir($element);
  $element.on('transitionend', function(e){  //be aware of other event names from other browsers vendor-prefixed
       // vm.sectionclass = "section_done";
       $element.addClass('section_done');
  });

  vm.selectSection = function (index) {
    $rootScope.$broadcast('stateChange', {
        section: index
    });
  };

  vm.handleSection = function (index) {
    console.dir($scope.$parent.$index);
    console.info('index: '+index);
    // first get array of sections
    var sections = $('section', document.body);
    
    console.dir(sections);
    // hide other sections
    var i = 0;
    while (i < sections.length) {
      if (i !== index) {
        console.info(i); 
        sections[i].addEventListener("transitionend", transitionCb, false);
        // sections.eq(i).addClass('section_fadeout').removeClass('section_done');
        vm.sectionclass = "section_fadeout";
  
      } else {
        // index matches this section
        console.info('match');
        sections.eq(index).css('display', 'block').removeClass('section_fadeout');
        vm.sectionclass = 'section_cv2mnu';
      }
      i++;  
    }

    // hide sections transition done callback
    function transitionCb(event, i) {
      this.style.display = 'none';
      $('nav').css('opacity', '100');
    }
    
    
 };


  vm.selectSlide = function (index) {
    // set slideposition to index * width
    $element.find('.carousel-content').css('left', '-'+index*540+'px');
  };

}

function stateFactory() {
  var factory = {};
  var state = { section: 1 };
  factory.setSection = function(index){
    state.section = index;
    console.info('setting section ' + state.section);
  };
  factory.getSection = function(){
    return state.section;
  };
  return factory;
}

sectionFactory.$inject = ['$http', 'GLOBALS'];
function sectionFactory($http, GLOBALS) {
  var factory = {};
  factory.getsections = function () {
    return $http({
      method: 'GET',
      url: GLOBALS.cvUrl
    });
  };
  return factory;
}

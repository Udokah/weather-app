var directives = angular.module('weatherApp.directives', []);

directives.directive('googleplace', function() {
    return {
      require : 'ngModel',
      link : function(scope, element, attrs, model) {
        var options = {
          types : ['(cities)'],
          componentRestrictions: {country: "jp"}
        };
        scope.googlePlace = new google.maps.places.Autocomplete(element[0],options);
        google.maps.event.addListener(scope.googlePlace, 'place_changed',function() {
          scope.$apply(function() {
            model.$setViewValue(element.val());
          });
        });
      }
    };
  });
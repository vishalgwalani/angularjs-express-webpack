export default function appRoutes($routeProvider, $locationProvider) {
    $routeProvider.when('/home-page', {
        templateUrl: 'public/views/hello.html',
        controller: 'homeController'

    })
    .otherwise({
        redirectTo: '/home-page'
    });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}
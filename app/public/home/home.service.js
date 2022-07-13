angular.module("app").service("homeService",function (env,$http) {
    this.getUsers = () => { 
        return $http.get(`${env.apiUrl}/users`);
    };
});
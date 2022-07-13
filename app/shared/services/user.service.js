angular.module("app").service("userService", function(env,$http){
    this.getUSers= () => {
        return $http.get(`$(env.apiUrl)/users`);
    }
})
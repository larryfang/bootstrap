function TodoCtrl($scope) {
   $scope.todos = [{text:"homework", status:false},
       {text:"rest",status:true}]
    $scope.add = function(){
        $scope.todos.push( {text:$scope.formdata,status:false})
        $scope.formdata = ''
    }
    $scope.remove = function(){
       $scope.todos =  _.filter($scope.todos, function(todo){
                  return !todo.status
        })
    }
   $scope.total =   function() {
      return $scope.todos.length
   }
}
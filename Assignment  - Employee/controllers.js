app.service("myService", function($http){
    this.getData = function(){
        return $http.get('Employee_Data.JSON');
    };
});
app.controller("tab2Ctrl", function($scope, myService){
    myService.getData().then(function(response){
        $scope.data = response.data;
        $scope.hideElement = true;
  });  

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
   
    $scope.addEmp = function(){
        $scope.hideElement = false;
        today = new Date();
        birthDate = new Date($scope.empBdate);
        $scope.age = today.getFullYear() - birthDate.getFullYear();
        $scope.data.push({
            id:$scope.data.length+1, lastname: $scope.empLname, firstname:$scope.empFname,
            email: $scope.empEmail, city:$scope.empCity, age:$scope.age});
        
        $scope.empLname = "";
        $scope.empFname = "";
        $scope.empCity ="";
        $scope.empEmail ="";
        $scope.empBdate ="";
       
    };
    $scope.edit = function(id){
       $scope.hideTable = true;
        $scope.hideElement = false;
        $scope.empnewLname = $scope.data[id].lastname; 
        $scope.empnewFname = $scope.data[id].firstname;
        $scope.empnewEmail = $scope.data[id].email;
        $scope.empnewCity = $scope.data[id].city;
        $scope.empnewBdate = $scope.data[id].age;
        console.log($scope.data[id].city);
        console.log($scope.data[id].id);
        $scope.saveDetails = function(){
            $scope.hideTable = false;
            $scope.hideElement = true;
            $scope.data[id].lastname = $scope.empnewLname;
            $scope.data[id].firstname = $scope.empnewFname;
            $scope.data[id].email = $scope.empnewEmail;
            $scope.data[id].city = $scope.empnewCity;
            $scope.data[id].age = $scope.empnewBdate;
        };
    };
    
    $scope.removeEmp = function(id){
        $scope.newData = $scope.data;
        $scope.newData.splice(id-1,1);
        console.log($scope.newData.length);
        for(i=0;i<$scope.newData.length;i++){
            $scope.newData[i].id = i+1;
        }
        $scope.data= $scope.newData;
    }
});

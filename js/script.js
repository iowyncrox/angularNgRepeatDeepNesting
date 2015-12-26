var app = angular.module("demo", []);

app.controller("myController", ["$scope", function ($scope) {
    $scope.eventmetrics = [
        {
            "metric": [
                {
                    "event": [
                        {
                            "id": 1,
                            "name": "Wedding",
                            "date": "2013-12-17",
                            "time": "2000-01-01T20:47:46Z",
                            "description": "Wedding Desc",
                            "address": "Wedding Address",
                        }
                    ]
                },
                {
                    "meal": [
                        {
                            "id": 1,
                            "name": "Chicken",
                            "description": "Chicken Yum!",
                        }
                    ]
                }
            ]
        },
        {
            "metric": [
                {
                    "event": [
                        {
                            "id": 2,
                            "name": "Rehersal",
                            "date": "2013-12-17",
                            "time": "2000-01-01T20:47:46Z",
                            "description": "Rehersal Desc",
                            "address": "Rehersal Address"
                        }
                    ]
                },
                {
                    "meal": [
                        {
                            "id": 2,
                            "name": "Steak",
                            "description": "9oz"
                        }
                    ]
                }
            ]
        }
    ];
}]);
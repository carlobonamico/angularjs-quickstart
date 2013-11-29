    $scope.add = function(pizza)
    {
        $scope.order.items.push(pizza);
        $scope.order.pizzaCount = $scope.order.pizzaCount + 1;
        $scope.order.totalPrice = $scope.order.totalPrice + pizza.price; //TODO REFACTOR
    }

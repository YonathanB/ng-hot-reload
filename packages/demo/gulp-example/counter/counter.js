
class CounterController {

    constructor() {
      this.counter = 1;
    }

    add() {
      this.counter++;
    }

    sub() {
      this.counter--;
    }

}

angular.module('hot-reload-demo')
    .component('counter', {
        controller: CounterController,
        templateUrl: 'counter/counter.html',
    });

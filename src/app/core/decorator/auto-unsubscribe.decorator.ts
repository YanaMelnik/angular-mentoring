// subName - the name of the property with Subscription
// default name is sub
export function AutoUnsubscribe(subNames: Array<string> = ['sub']) {
  return function (constructor) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      subNames.forEach((elem) => {
        const sub = this[elem];

        if (sub) {
          sub.unsubscribe();
        }

        console.log(`Unsubscribe decorator is called. Subscription name is: ${elem}.`);
      });

      if (original && (typeof original === 'function')) {
        original.apply(this, arguments);
      }
    };
  };
}

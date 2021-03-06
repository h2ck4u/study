/**
 * 리스트의 핵심적인 개념은 순서가 있는 엘리먼트의 모임이라는 것입니다. 빈 엘리먼트는 허용되지 않는다는 것도 기억해야 할 것입니다. 
 * 그리고 중복된 데이터를 허용한다는 것도 기억해두세요. 중복 허용은 배열과 리스트의 차이가 아닙니다. 배열도 중복이 허용됩니다. 중복 허용은 이후에 배울 set과 같은 데이터 스트럭쳐와의 차이라고 할 수 있습니다.
 * 조금 이야기를 구체화합시다. 
 * 일반적으로 리스트 데이터 스트럭쳐는 아래와 같은 기능(operation)을 가지고 있습니다.
 * 처음, 끝, 중간에 엘리먼트를 추가/삭제하는 기능
 * 리스트에 데이터가 있는지를 체크하는 기능
 * 리스트의 모든 데이터에 접근할 수 있는 기능
 * 위와 같은 기능을 가지고 있고, 순서가 있으면서 중복이 허용된다면 그러한 데이터 스트럭쳐를 리스트라고 합니다.
 */

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    append(element) {
        this.dataStore[this.listSize] = element;
        this.listSize++;
    }

    remove(element) {
        let idx = this.find(element);
        if ( idx > -1 ) {
            this.dataStore.splice(idx, 1);
            this.listSize--;
            return true;
        }
        return false;
    }

    find(element) {
        for (let i = 0; i < this.listSize; i++) {
            if (element === this.dataStore[i]) {
                return i;
            }
        }
        return -1; //없는경우
    }

    insert() {

    }

    contains() {

    }

    prev() {

    }

    next() {

    }

    getElement() {

    }

    currPos() {

    }

    moveTo(pos) {

    }

    clear() {

    }

    toString() {

    }
}
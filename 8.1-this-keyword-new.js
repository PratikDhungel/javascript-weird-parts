const newObj = {
  name: 'Daniel',
  showName: function () {
    console.log(this);
  },
};

newObj.showName();

const newObjTwo = {
  name: 'Daniel',
  showName: () => {
    console.log(this);
  },
};

newObjTwo.showName();

const newObjThree = {
  name: 'Daniel',
  showName: () => {
    (() => {
      console.log(this);
    })();
  },
};

newObjThree.showName();

const newObjFour = {
  name: 'Daniel',
  showName: function () {
    (() => {
      console.log(this);
    })();
  },
};

newObjFour.showName();

const newObjFive = {
  name: 'Daniel',
  showName: {
    showFirstName: function () {
      console.log(this);
    },
  },
};

newObjFive.showName.showFirstName();

const newObjSix = {
  name: 'Daniel',
  showName: {
    showFirstName: () => {
      console.log(this);
    },
  },
};

newObjSix.showName.showFirstName();

const newObjSeven = {
  name: 'Daniel',
  showName: {
    showFirstName: function () {
      (() => {
        console.log(this);
      })();
    },
  },
};

newObjSeven.showName.showFirstName();

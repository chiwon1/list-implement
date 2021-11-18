const List = function () {
  this.storage = [];
  this.length = 0;
};

List.prototype.append = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

List.prototype.pop = function () {
  if (this.length === 0) {
    return;
  }

  const cache = this.storage[this.length - 1];

  this.storage = this.storage.slice(0, this.length - 1);
  this.length--;

  return cache;
};

List.prototype.remove = function (index) {
  if (typeof index !== 'number') {
    throw new Error('Invalid input');
  }

  if (!this.storage[index]) {
    return -1;
  }

  this.storage = [
    ...this.storage.slice(0, index),
    ...this.storage.slice(index + 1),
  ];

  this.length--;
};

List.prototype.removeAll = function () {
  this.storage = [];
  this.length = 0;
};

List.prototype.find = function (index) {
  if (typeof index !== 'number') {
    throw new Error('Invalid input');
  }

  return this.storage[index] !== undefined ? this.storage[index] : -1;
};

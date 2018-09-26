'use strict';
var comm = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var description = ['Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'];

// Для лайков
var getRandomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Для комментов
var getRandomComment = function () {
  var randomComm = Math.floor(Math.random() * comm.length);
  return comm[randomComm];
};

var getRandomCommentTwice = function () {
  return (getRandomComment() + getRandomComment());
};

var getComment = function () {
  var randomNum = getRandomNum(0, 101);
  if (randomNum < 50) {
    return getRandomComment();
  } else {
    return getRandomCommentTwice();
  }
};

// Для descr
var description = ['Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'];
var getRandomDescr = function () {
  var randomDescr = Math.floor(Math.random() * description.length);
  return description[randomDescr];
};

var picturesData = [];
for (var i = 1; i <= 25; i++) {
  picturesData[i] = {};
  picturesData[i].url = 'photos/' + i + '.jpg';
  picturesData[i].likes = getRandomNum(15, 200);
  picturesData[i].comments = getComment();
  picturesData[i].description = getRandomDescr();
}
console.log(picturesData);

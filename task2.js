"use strict"

function generateId() {
    return (Math.random() * 100000).toFixed(0)
}

function Library() {
    this.books = [];
    this.addBook = function addBook(id) {
      this.books.push(id);
    };
    this.removeBook = function removeBook(id) {
      let del = this.books.indexOf(id);
      this.books.splice(del, 1);
    };
    this.findBooksByAuthor = function findBooksByAuthor(author) {
      let findAuthor = this.books.find((elem) => elem.author == author);
      if (findAuthor) {
        console.log(`Ваша книга:`, findAuthor);
      } else {
        console.log("Такой книги нет");
      }
    };
    this.listAvailableBooks = function listAvailableBooks() {
      let findavaliable = this.books.filter(
        (elem) => elem.availability == "available"
      );
      if (findavaliable) {
        console.log(`Ваша книга:`, findavaliable);
      } else {
        console.log("Такой книги нет");
      }
    };
  }
   
function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.availability = "available";
    this.id = generateId()
    this.rating = [];
    this.addRating = function addRating(user, rate) {
      let myBook = user.read.find((elem) => elem.name == name);
      if (!myBook) {
        console.log("Вы не взяли книгу");
      } else {
        this.rating.push(rate);
        console.log(`Спасибо за оценку`);
      }
    };
    this.getAverageRating = function getAverageRating() {
      let count = 0;
      for (const iterator of this.rating) {
        count += iterator;
      }
      if (count > 0) {
        let rate = count / this.rating.length;
        console.log(`Средний рейтинг: ${rate.toFixed(2)}`);
      } else {
        console.log("Эту книгу еще не оценили");
      }
    };
  }

function User(name, lastName, age, sex) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
    this.id = generateId();
    this.read = []; 
  
    this.borrowBook = function borrowBook(name, library) {
      let order = library.books.find((elem) => elem.name == name);
      if (order) {
        if (order.availability == "available") {
          this.read.push(order);
          order.availability = "unavailable";
          console.log("Вы взяли книгу");
        } else {
          console.log("Книга недоступна в данный момент");
        }
      } else {
        console.log(`Такой книги нет`);
      }
    };
  
    this.returnBook = function returnBook(name, library) {
      let myBook = this.read.find((elem) => elem.name == name);
      if (!myBook) {
        console.log("Вы не взяли книгу");
      }
      let order = library.books.find((elem) => elem.name == name);
      if (order) {
        if (order.availability == "unavailable") {
          order.availability = "available";
          console.log(`Вы вернули книгу`);
        }
      } else {
        console.log(`Такой книги нет`);
      }
    };
  }

const book1 = new Book("Уинстон Черчилль (Знаменитые люди планеты)", "Дмитрий Кукленко", 2010);
const book2 = new Book("Метод Сильвы. Управление разумом", "Хосе Сильва", 2023);
const book3 = new Book("Одесская сага. Книга 1. Понаехали", "Юлия Верба", 2021);
const book4 = new Book("Разделяй и властвуй!", "Гай Юлий Цезарь", 2023);
const book5 = new Book("Тело, мой дом", "Рупи Каур", 2024);

let user = new User("Илон", "Маск", 52, "м");
let user1 = new User("Кира", "Найтли", 38, "ж");
let user2 = new User("Орландо", "Блум", 47, "м");
let user3 = new User("Натали", "Портман", 42, "ж");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
  
user.borrowBook("Тело, мой дом", library);  
user.borrowBook("Одесская сага. Книга 1. Понаехали", library);  
user.returnBook("Уинстон Черчилль (Знаменитые люди планеты)", library);  

book2.addRating(user, 2); 
book2.addRating(user, 1);
book3.addRating(user, 4);

book2.getAverageRating();  
library.findBooksByAuthor("Гай Юлий Цезарь");  
library.listAvailableBooks(); 

'use strict';
// import ArticleList from './article-list.js';
// import Article from './article.js';

const articleContainer = document.getElementById('article-list');
let data;

document.addEventListener('DOMContentLoaded', () => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles', true);
    xhr.send();
    xhr.addEventListener('load', function () {
        data = JSON.parse(xhr.response);
        console.log(data)
        const article = new Article(data[0].title, data[0].author, data[0].text);
        let articleList = new ArticleList(articleContainer);
        articleList.addArticle(article);
        articleList.render();
    })
});

class ArticleList {
    constructor(articleContainer) {
        this.articleContainer = articleContainer;
        this.articlels = data;
    }

    addArticle(article) {
        this.articlels.push(article);
    }

    removeArticle(article) {
        this.articlels.splice(article, 1);
        this.render();
    }

    render() {
        while (this.articleContainer.hasChildNodes()) {
            this.articleContainer.removeChild(this.articleContainer.firstChild);
        }
        this.articlels.forEach((article, index) => {
            const articleWrapper = document.createElement('div');
            const titleArticle = document.createElement('div');
            const authorArticle = document.createElement('div');
            const textArticle = document.createElement('div');
            const buttonRemoveArticle = document.createElement('span');
            titleArticle.textContent = article.title;
            authorArticle.textContent = article.author;
            textArticle.innerHTML = article.text;
            buttonRemoveArticle.textContent = `x`;
            buttonRemoveArticle.addEventListener('click', () => {
                this.removeArticle(index);
            })

            articleWrapper.append(buttonRemoveArticle);
            articleWrapper.append(titleArticle);
            articleWrapper.append(authorArticle);
            articleWrapper.append(textArticle);
            this.articleContainer.appendChild(articleWrapper)
        })
    }
}

class Article {
    constructor(title, author, text) {
        this.title = title;
        this.author = author;
        this.text = text;
        const obj = {
            author: `${this.author}`,
            text: `${this.text}`,
            title: `${this.title}`
        };
        return obj;
    }

    matches(query) {
        const pattern = /\bw+\b/
        return pattern.test(query);
    }
}





'use strict';
// import ArticleList from './article-list.js';
// import Article from './article.js';

const articleContainer = document.getElementById('article-list');
const input = document.getElementById('input');
let data;

document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles', true);
    xhr.send();
    xhr.addEventListener('load', function () {
        data = JSON.parse(xhr.response);
        let articleList = new ArticleList(articleContainer);

        data.forEach(ar => {
            const article = new Article(ar.title, ar.author, ar.text);
            articleList.addArticle(article);
        })

        articleList.render();
        input.addEventListener('input', () => {
            articleList.render(input.value);
        })
    })
});

class ArticleList {
    constructor(articleContainer) {
        this.articleContainer = articleContainer;
        this.articlels = [];
    }

    addArticle(article) {
        this.articlels.push(article);
    }

    removeArticle(article) {
        this.articlels.splice(article, 1);
        this.render();
    }

    render(query) {
        while (this.articleContainer.hasChildNodes()) {
            this.articleContainer.removeChild(this.articleContainer.firstChild);
        }

        if (query) {
            const trimQuery = query.trim();
            this.articlels.forEach((article, index) => {
                if (article.matches(trimQuery)) {

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
                }

            })
            return;
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
    }

    matches(query) {
        let regexp = new RegExp(`${query}`, "g");
        return regexp.test(this.title) || regexp.test(this.text);
    }
}





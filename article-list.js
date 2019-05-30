'use strict';



export default class ArticleList {
    constructor(articleContainer) {
        this.articleContainer = articleContainer;
        this.articlels = [];
    }

    addArticle(article) {
        this.articlels.push(article);
    }

    removeArticle(article) {

    }

    render() {
        while (this.articleContainer.hasChildNodes()) {
            this.articleContainer.removeChild(this.articleContainer.firstChild);
        }
        this.articlels.forEach(article => {
            const articleWrapper = document.createElement('div');
            const titleArticle = document.createElement('div');
            const authorArticle = document.createElement('div');
            const textArticle = document.createElement('div');
            titleArticle.textContent = article.title;
            authorArticle.textContent = article.author;
            textArticle.innerHTML = article.text;

            articleWrapper.append(titleArticle);
            articleWrapper.append(authorArticle);
            articleWrapper.append(textArticle);

            this.articleContainer.appendChild(articleWrapper)
        })
    }
}


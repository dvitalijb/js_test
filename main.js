'use strict';
const articleContainer=document.getElementById('article-list');

let data;
const xhr = new XMLHttpRequest();
xhr.open("GET", 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles', true);
xhr.send();
xhr.addEventListener('load',function () {
    data =JSON.parse(xhr.response) ;

    console.log(data[0].title)
})
document.addEventListener('DOMContentLoaded', () => {

    const article = new Article('dcssdc', 'sdvfsd', 'sadcf');
    let articleList = new ArticleList(articleContainer);
    articleList.addArticle(article);
    articleList.render();
});

class Article {
    constructor(title, author, text){
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
    matches(query){
        const pattern = /\bw+\b/
        return pattern.test(query);
    }


}

class ArticleList {
    constructor(articleContainer){
        this.articleContainer = articleContainer;
        this.articlels=[];
    }

    addArticle(article){
        this.articlels.push(article);
    }

    removeArticle(article){

    }

    render(){
        while (this.articleContainer.hasChildNodes()) {
            this.articleContainer.removeChild(this.articleContainer.firstChild);
        }
          this.articlels.forEach(article=>{
            const articleWrapper = document.createElement('div');
            const titleArticle = document.createElement('div');
            const authorArticle = document.createElement('div');
            const textArticle = document.createElement('div');
            titleArticle.textContent = article.title;
            authorArticle.textContent = article.author;
            textArticle.textContent = article.text;

            articleWrapper.append(titleArticle);
            articleWrapper.append(authorArticle);
            articleWrapper.append(textArticle);

              this.articleContainer.appendChild(articleWrapper)
        })

    }
}

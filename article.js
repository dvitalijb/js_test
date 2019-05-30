'use strict';

export default class Article {
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
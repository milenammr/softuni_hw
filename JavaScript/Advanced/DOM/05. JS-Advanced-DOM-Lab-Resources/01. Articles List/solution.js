function createArticle() {
	let title = document.getElementById('createTitle');
	let textarea = document.getElementById('createContent');
	let articleSection = document.getElementById('articles');
	let article = document.createElement('article');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');
	if(title.value !== '' && textarea.value !== ''){
		h3.innerHTML = title.value;
		p.innerHTML = textarea.value;
		articleSection.appendChild(article);
		article.appendChild(h3);
		article.appendChild(p);
	} 
	title.value = '';	
	textarea.value = '';
	
}
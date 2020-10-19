function focus() {
    let div = document.querySelector('div');
    div.addEventListener('click', doFocus);
    function doFocus(e){
        if (e.target.nodeName == 'INPUT'){
            for (let i of div.children){
                i.setAttribute('class', 'blurred');
            };
            e.target.parentNode.setAttribute('class', 'focused');
            //console.log(div.children);
        }
    }
}
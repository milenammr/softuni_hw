function solve(path){
    let index = path.lastIndexOf('\\');
    let fileName = path.substring(index + 1);
    let index2 = fileName.lastIndexOf('.');
    let extension = fileName.substring(index2 + 1)
    fileName = fileName.substring(0, index2)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')
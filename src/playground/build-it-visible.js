// let paragraph = 0;
// let visibility = false

// const handleOnClick = () => {
//     visibility = !visibility;

//     render();
// }

// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visiblility Toggel</h1>
//             <button onClick={handleOnClick}>
//                 {visibility ? 'hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey.these are some details you can now see</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();
let count = 0;
function average(table) {
    for (let i = 0; i < table.length; i++) {
        count += table[i];
    }
    console.log(count);
    return count / table.length;
}








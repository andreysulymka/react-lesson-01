import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import './index.css';

// const elem1 = <span>Привет</span>
// const elem2 = <span>мир</span>

// const element = React.createElement('div', { a: 5, b: 10, children:'Привет мир'})

// const jsxElement = <div>
// {elem1}
// {elem2}
// </div>
// console.log(jsxElement);

// const Head = () => {
//   return <p>
//     I am Head
//   </p>
// }


// const Card = () => {
//   return(  
//   data.map(photo => {
//     return <div key={photo.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//   <img src={photo.url} className="card-img-top" alt={photo.title} />
//   <div className ="card-body">
//     <h5 className ="card-title">{photo.title}</h5>
//         {/* <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//         <Head />
//         {/* компонент рендерим всередині іншого */}
//     <a href="http" className ="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//   })
//   )
// }
  
// function Card(props) {
//   const { url, title } = props;
//   // деструктуризація props її також можна використовувати в сигнатурі функції по бажанню
//       return <div className="card mx-auto my-2" style={{ width: '18rem' }}>
//   <img src={url} className="card-img-top" alt={title} />
//   <div className ="card-body">
//     <h5 className ="card-title">{title}</h5>
//         <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
//     <a href="http" className ="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//   }
// Перенесли в компоненти в Cards.jsx


const root = ReactDOM.createRoot(document.getElementById('root')).render(<App
  // url={point.url}
  // title={point.title}
  // Всі влістивості які тут записуються вони знаходяться в одному об'єкті props 
/>);



root.render(
  <React.StrictMode>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


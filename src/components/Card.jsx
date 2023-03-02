// import PropTypes from 'prop-types';
export default function Card(props) {
    const { url, title = 'невідомо' } = props;
    // При декструктуризації можна виставляти якісь дефолтні значення, які будуть використовуватись якщо інформація з бекенду не прийшла
  // деструктуризація props її також можна використовувати в сигнатурі функції по бажанню
      return <div className="card mx-auto my-2" style={{ width: '18rem' }}>
  <img src={url} className="card-img-top" alt={title} />
  <div className ="card-body">
    <h5 className ="card-title">{title}</h5>
        <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    <a href="http" className ="btn btn-primary">Go somewhere</a>
  </div>
</div>
}
//   Компонент незалежна одиниця, яка не знає про будь-які дані. Дані що отримуються з бекенду імпортуються в елемент де відбувається його рендер. В нашому випадку
// App.js

// Card.PropTypes = {
//     url: PropTypes.string,
//     title: PropTypes.string

// };
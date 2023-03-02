import Card from "./components/Card";
import data from './data.json';



export default function App() {
    return <div>
        {data.map(point => {
            <Card
    url={point.url}
    title={point.title}/> 
        })}
     
    </div>;
    // Props і дані з бекенду отримується там де рендериться елемент 
}
import {PageHero} from '../shared';
import InsightsList from './insights-list';
export const metadata={title:'Insights'};
export default function Insights(){return <main id="main"><PageHero label="Insights" title="Ideas. Insights. The Future of Technology." text="We explore technology, innovation, emerging trends and the opportunities they create."/><InsightsList/></main>}

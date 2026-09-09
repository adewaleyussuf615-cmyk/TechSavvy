import {PageHero} from '../shared';
import ContactForm from './contact-form';
export const metadata={title:'Contact'};
export default function Contact(){return <main id="main"><PageHero label="Contact" title="Let's Start a Conversation." text="Tell us what you are working on, what problem you want to solve or what opportunity you would like to explore."/><section className="section wrap contact-layout"><aside><span className="number">GOOD IDEAS START HERE</span><h2>A challenge.<br/>An idea.<br/>A possibility.</h2><p>Tell us a little about it. We can explore the next step together.</p></aside><ContactForm/></section></main>}

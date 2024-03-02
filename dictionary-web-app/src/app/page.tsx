import Header from '@/components/header/header';
import Search from '@/components/search/search';
import Content from '@/components/content/content';

const Home = () => {
    return (
        <section className="container pt-14">
            <Header />

            <Search />

            <Content />
        </section>
    );
}

export default Home;

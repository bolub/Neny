import React,{useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Post from '../Components/Post';
import { Container, Col } from 'reactstrap';
import axios from 'axios';

const HomePage = ()=>{
    const [posts, updatePost] = useState([]);

    useEffect(() => {
        let mount = true;

        const fetchData = async () => {
            if(mount){
                const fd = await axios.get('http://localhost:4000/api/posts');

                const results = fd.data;
                updatePost(results);
            }

            return mount = false;
        }

        fetchData();

    }, [])

    return(
        <Container className="my-5">
            <Col sm={10} className="m-auto">
                <h1 className="my-3 text-center">Neny's Blog</h1>
                <p className="text-content mb-5 text-center">A little bit of everything you love, all in one beautiful place. Happy happens at Hilldale.  The biggest piece of advice I can give is to just be yourself, every single time. </p>

                <Navbar/>

                <main>
                    <Post posts={posts} />
                </main>
            </Col>
        </Container>
    );
}

export default HomePage;
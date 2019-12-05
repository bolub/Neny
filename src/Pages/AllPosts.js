import React, {useEffect, useState} from 'react';
import Navbar from './../Components/Navbar';
import { Container, Col, } from 'reactstrap';
import Post from '../Components/Post';
import axios from 'axios';

const AllPosts = () => {
    const [posts, updatePost] = useState([]);

    useEffect(() => {
        let mount = true;

        const fetchData = async () => {
            if (mount) {
                const fd = await axios.get('http://localhost:4000/api/posts');

                const results = fd.data;

                updatePost(results);
            }

            return mount = false;
        }

        fetchData();
    }, [])

    return (
        <Container className="my-5">
            <Col sm={10} className="m-auto">
                <Navbar brand="true" />
             
                <main className="my-3">
                    <Post posts={posts}/>
                </main>
            </Col>
        </Container>
    );
}

export default AllPosts;
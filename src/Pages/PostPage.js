import React, { useState, useEffect } from 'react';
import Navbar from './../Components/Navbar';
import { Container, Col, } from 'reactstrap';
import axios from 'axios';
import styles from './PostPage.module.css';
import Moment from 'react-moment';

const PostPage = (props) => {
    const [post, updatePost] = useState([]);

    let postID = props.match.params.id;

    useEffect(() => {
        let mount = true;

        const fetchData = async () => {
            if (mount) {
                const fd = await axios.get(`http://localhost:4000/api/posts/${postID}`);

                let results = fd.data;

                updatePost(results);

                results = '';
            }

            return mount = false;
        }

        fetchData();

    })

    let createMarkup = () => {
        return { __html: post.content };
    }

    // let createHeaderMarkup = () => {
    //     return { __html: post.heading };
    // }

    return (
        <Container className="my-5">
            <Col sm={10} className="m-auto">
                <Navbar brand="true" />
            </Col>

            <Col sm={8} className="m-auto">

                <main className="my-5">
                    <div style={{ fontSize: '1.75em' }} className="text-center mb-3">
                        { post.heading }
                    </div>


                    {/* <div style={{ background: `url(${post.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={`${styles.image}`}>
                    </div> */}

                    <img src={post.image} className="img-fluid w-100" style={{ objectFit: "contain", height: "363px" }} />
                    
                    <div className="text-content my-3" style={{ fontSize: '.8em', color: '#718096' }}>
                        <Moment fromNow>
                            {post.created}
                        </Moment>
                    </div>

                    <div style={{ lineHeight: '30px' }} className="text-content" dangerouslySetInnerHTML={createMarkup()}></div>

                </main>
            </Col>
        </Container>
    );
}

export default PostPage;